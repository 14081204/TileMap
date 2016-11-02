//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.EventPoint = new egret.Point();
        this.Player = new Person();
        this.GoalPoint = new egret.Point();
        this.DistancePoint = new egret.Point();
        this.MoveTime = 0;
        this.TILE_SIZE = 64;
        this.ifFindAWay = false;
        this.currentPath = 0;
        this.movingTime = 32;
        this.ifOnGoal = false;
        this.ifStartMove = false;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        var _this = this;
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.map = new TileMap();
        this.addChild(this.map);
        this.addChild(this.Player.PersonBitmap);
        this.Player.PersonBitmap.x = 0;
        this.Player.PersonBitmap.y = 0;
        this.map.startNode = this.map.getTile(0, 0);
        this.map.endNode = this.map.getTile(0, 0);
        this.astar = new AStar();
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            _this.ifStartMove = true;
            _this.playerx = Math.floor(_this.Player.PersonBitmap.x / _this.TILE_SIZE);
            _this.playery = Math.floor(_this.Player.PersonBitmap.y / _this.TILE_SIZE);
            _this.playerBitX = _this.Player.PersonBitmap.x;
            _this.playerBitY = _this.Player.PersonBitmap.y;
            _this.map.startNode = _this.map.getTile(_this.playerx, _this.playery);
            _this.currentPath = 0;
            _this.EventPoint.x = e.stageX;
            _this.EventPoint.y = e.stageY;
            _this.gridX = Math.floor(_this.EventPoint.x / _this.TILE_SIZE);
            _this.gridY = Math.floor(_this.EventPoint.y / _this.TILE_SIZE);
            _this.map.endNode = _this.map.getTile(_this.gridX, _this.gridY);
            _this.ifFindAWay = _this.astar.findPath(_this.map);
            if (_this.ifFindAWay) {
                _this.Player.SetState(new WalkingState(), _this);
                _this.currentPath = 0;
            }
            for (var i = 0; i < _this.astar.pathArray.length; i++) {
                console.log(_this.astar.pathArray[i].x + " And " + _this.astar.pathArray[i].y);
            }
            if (_this.ifFindAWay)
                _this.map.startNode = _this.map.endNode;
        }, this);
        this.PlayerMove();
        this.PlayerAnimation();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.PlayerMove = function () {
        var _this = this;
        var self = this;
        egret.Ticker.getInstance().register(function () {
            if (_this.ifStartMove && self.ifFindAWay) {
                if (self.currentPath < self.astar.pathArray.length - 1) {
                    var distanceX = self.astar.pathArray[self.currentPath + 1].x - self.astar.pathArray[self.currentPath].x;
                    var distanceY = self.astar.pathArray[self.currentPath + 1].y - self.astar.pathArray[self.currentPath].y;
                    if (distanceX > 0) {
                        self.Player.SetRightOrLeftState(new GoRightState(), self);
                    }
                    if (distanceX <= 0) {
                        self.Player.SetRightOrLeftState(new GoLeftState(), self);
                    }
                    if (!self.IfOnGoal(self.astar.pathArray[self.currentPath + 1])) {
                        self.Player.PersonBitmap.x += distanceX / self.movingTime;
                        self.Player.PersonBitmap.y += distanceY / self.movingTime;
                    }
                    else {
                        self.currentPath += 1;
                    }
                }
            }
            if (_this.ifStartMove && !self.ifFindAWay) {
                var distanceX = self.map.startNode.x - self.playerBitX;
                var distanceY = self.map.startNode.y - self.playerBitY;
                if (distanceX > 0) {
                    self.Player.SetRightOrLeftState(new GoRightState(), self);
                }
                if (distanceX <= 0) {
                    self.Player.SetRightOrLeftState(new GoLeftState(), self);
                }
                if (!self.IfOnGoal(self.map.startNode)) {
                    self.Player.PersonBitmap.x += distanceX / self.movingTime;
                    self.Player.PersonBitmap.y += distanceY / self.movingTime;
                }
                else
                    self.Player.SetState(new IdleState(), self);
            }
        }, self);
    };
    p.PictureMove = function (pic) {
        var self = this;
        var MapMove = function () {
            egret.Tween.removeTweens(pic);
            var dis = self.Player.PersonBitmap.x - self.EventPoint.x;
            if (self.Player.GetIfGoRight() && pic.x >= -(pic.width - self.stage.stageWidth)) {
                egret.Tween.get(pic).to({ x: pic.x - Math.abs(dis) }, self.MoveTime);
            }
            if (self.Player.GetIfGoLeft() && pic.x <= 0) {
                egret.Tween.get(pic).to({ x: pic.x + Math.abs(dis) }, self.MoveTime);
            }
        };
        MapMove();
    };
    p.IfOnGoal = function (tile) {
        var self = this;
        if (self.Player.PersonBitmap.x == tile.x && self.Player.PersonBitmap.y == tile.y)
            this.ifOnGoal = true;
        else
            this.ifOnGoal = false;
        return this.ifOnGoal;
    };
    p.PlayerAnimation = function () {
        var self = this;
        var n = 0;
        var GOR = 0;
        var GOL = 0;
        var speed = 0;
        var speed2 = 0;
        var speed3 = 0;
        var standArr = ["stand_0001", "stand_0002", "stand_0003", "stand_0004", "stand_0005", "stand_0006", "stand_0007", "stand_0008"];
        var walkRightArr = ["166-1", "166-2", "166-3", "166-4", "166-5", "166-6", "166-7", "166-8"];
        var MoveAnimation = function () {
            egret.Ticker.getInstance().register(function () {
                if (speed % 4 == 0) {
                    if (self.Player.GetIfIdle() && !self.Player.GetIfWalk()) {
                        GOR = 0;
                        GOL = 0;
                        var textureName = standArr[n] + "_png";
                        var texture = RES.getRes(textureName);
                        self.Player.PersonBitmap.texture = texture;
                        n++;
                        if (n >= standArr.length) {
                            n = 0;
                        }
                    }
                    if (self.Player.GetIfWalk() && self.Player.GetIfGoRight() && !self.Player.GetIfIdle()) {
                        n = 0;
                        GOL = 0;
                        var textureName = walkRightArr[GOR] + "_png";
                        var texture = RES.getRes(textureName);
                        self.Player.PersonBitmap.texture = texture;
                        GOR++;
                        if (GOR >= walkRightArr.length) {
                            GOR = 0;
                        }
                    }
                    if (self.Player.GetIfWalk() && self.Player.GetIfGoLeft() && !self.Player.GetIfIdle()) {
                        n = 0;
                        GOR = 0;
                        var textureName = walkRightArr[GOL] + "_png";
                        var texture = RES.getRes(textureName);
                        self.Player.PersonBitmap.texture = texture;
                        GOL++;
                        if (GOL >= walkRightArr.length) {
                            GOL = 0;
                        }
                    }
                }
                if (self.IfOnGoal(self.map.endNode)) {
                    self.Player.SetState(new IdleState(), self);
                }
            }, self);
        };
        var FramePlus = function () {
            egret.Ticker.getInstance().register(function () {
                speed++;
                if (speed == 400)
                    speed = 0;
            }, self);
        };
        MoveAnimation();
        FramePlus();
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
var Person = (function () {
    function Person() {
        this.GoRight = false;
        this.GoLeft = false;
        this.PersonBitmap = new egret.Bitmap();
        this.PersonBitmap.width = 49;
        this.PersonBitmap.height = 64;
        this.IsIdle = true;
        this.IsWalking = false;
        this.IdleOrWalkStateMachine = new StateMachine();
        this.LeftOrRightStateMachine = new StateMachine();
    }
    var d = __define,c=Person,p=c.prototype;
    p.SetPersonBitmap = function (picture) {
        this.PersonBitmap = picture;
    };
    p.SetIdle = function (set) {
        this.IsIdle = set;
    };
    p.GetIfIdle = function () {
        return this.IsIdle;
    };
    p.SetWalk = function (set) {
        this.IsWalking = set;
    };
    p.GetIfWalk = function () {
        return this.IsWalking;
    };
    p.SetGoRight = function () {
        this.GoRight = true;
        this.GoLeft = false;
    };
    p.GetIfGoRight = function () {
        return this.GoRight;
    };
    p.SetGoLeft = function () {
        this.GoLeft = true;
        this.GoRight = false;
    };
    p.GetIfGoLeft = function () {
        return this.GoLeft;
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.SetState = function (e, _tmain) {
        this.IdleOrWalkStateMachine.setState(e, _tmain);
    };
    p.SetRightOrLeftState = function (e, _tmain) {
        this.LeftOrRightStateMachine.setState(e, _tmain);
    };
    return Person;
}());
egret.registerClass(Person,'Person');
var PeopleState = (function () {
    function PeopleState() {
    }
    var d = __define,c=PeopleState,p=c.prototype;
    p.OnState = function (_tmain) { };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return PeopleState;
}());
egret.registerClass(PeopleState,'PeopleState',["State"]);
var StateMachine = (function () {
    function StateMachine() {
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.setState = function (e, _tmain) {
        if (this.CurrentState != null) {
            this.CurrentState.ExitState(_tmain);
        }
        this.CurrentState = e;
        this.CurrentState.OnState(_tmain);
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
var IdleState = (function () {
    function IdleState() {
    }
    var d = __define,c=IdleState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.Player.SetIdle(true);
        _tmain.Player.SetWalk(false);
    };
    ;
    p.ExitState = function (_tmain) {
        _tmain.Player.SetIdle(false);
    };
    ;
    return IdleState;
}());
egret.registerClass(IdleState,'IdleState');
var WalkingState = (function () {
    function WalkingState() {
    }
    var d = __define,c=WalkingState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.Player.SetIdle(false);
        _tmain.Player.SetWalk(true);
    };
    ;
    p.ExitState = function (_tmain) {
        _tmain.Player.SetWalk(false);
    };
    ;
    return WalkingState;
}());
egret.registerClass(WalkingState,'WalkingState');
var GoRightState = (function () {
    function GoRightState() {
    }
    var d = __define,c=GoRightState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.Player.SetGoRight();
    };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return GoRightState;
}());
egret.registerClass(GoRightState,'GoRightState');
var GoLeftState = (function () {
    function GoLeftState() {
    }
    var d = __define,c=GoLeftState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.Player.SetGoLeft();
    };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return GoLeftState;
}());
egret.registerClass(GoLeftState,'GoLeftState');
//# sourceMappingURL=Main.js.map