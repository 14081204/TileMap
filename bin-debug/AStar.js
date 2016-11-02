var AStar = (function () {
    function AStar() {
        this.straightCost = 1.0;
        this.diagCost = Math.SQRT2;
        this.heuristic = this.diagonal;
    }
    var d = __define,c=AStar,p=c.prototype;
    ;
    p.findPath = function (tileMap) {
        var h = 0;
        var g = 0;
        this.pathArray = [];
        this.tileMap = tileMap;
        this._open = [];
        this._closed = [];
        this.startNode = tileMap.startNode;
        this.endNode = tileMap.endNode;
        this.startNode.tileData.g = 0;
        this.startNode.tileData.h = this.heuristic(this.startNode);
        this.startNode.tileData.f = this.startNode.tileData.g + this.startNode.tileData.h;
        return this.search();
    };
    p.isOpen = function (tile) {
        for (var i = 0; i < this._open.length; i++) {
            if (this._open[i] == tile) {
                return true;
            }
        }
        return false;
    };
    p.isClosed = function (tile) {
        for (var i = 0; i < this._closed.length; i++) {
            if (this._closed[i] == tile) {
                return true;
            }
        }
        return false;
    };
    p.findMinFInOpenArray = function () {
        var i = 0;
        var temp;
        for (var j = 0; j < this._open.length; j++) {
            if (this._open[i].tileData.f > this._open[j].tileData.f) {
                i = j;
            }
        }
        temp = this._open[i];
        for (j = i; j < this._open.length - 1; j++) {
            this._open[j] = this._open[j + 1];
        }
        this._open.pop();
        return temp;
    };
    p.search = function () {
        var tile = this.startNode;
        while (tile != this.endNode) {
            var startX = Math.max(0, tile.tileData.x - 1);
            var endX = Math.min(this.tileMap.numCols - 1, tile.tileData.x + 1);
            var startY = Math.max(0, tile.tileData.y - 1);
            var endY = Math.min(this.tileMap.numRows - 1, tile.tileData.y + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this.tileMap.getTile(i, j);
                    if (test == tile || !test.tileData.walkable || !this.tileMap.getTile(tile.tileData.x, test.tileData.y).tileData.walkable || !this.tileMap.getTile(test.tileData.x, tile.tileData.y).tileData.walkable) {
                        continue;
                    }
                    var cost = this.straightCost;
                    //if(!((tile.tileData.x == test.tileData.x) || (tile.tileData.y == test.tileData.y))){
                    if (!((tile.tileData.x == test.tileData.x) || (tile.tileData.y == test.tileData.y))) {
                        cost = this.diagCost;
                    }
                    //var g:number = tile.tileData.g + cost * test.tileData.costMultiplier;                    
                    var g = tile.tileData.g + cost;
                    var h = this.heuristic(test);
                    var f = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.tileData.f > f) {
                            test.tileData.f = f;
                            test.tileData.g = g;
                            test.tileData.h = h;
                            test.tileParent = tile;
                        }
                    }
                    else {
                        test.tileData.f = f;
                        test.tileData.g = g;
                        test.tileData.h = h;
                        test.tileParent = tile;
                        this._open.push(test);
                    }
                }
            }
            this._closed.push(tile);
            if (this._open.length == 0) {
                console.log("no path found");
                return false;
            }
            tile = this.findMinFInOpenArray();
        }
        this.buildPath();
        return true;
    };
    p.buildPath = function () {
        this.pathArray = new Array();
        var tile = this.endNode;
        this.pathArray.push(tile);
        while (tile != this.startNode) {
            tile = tile.tileParent;
            this.pathArray.unshift(tile);
        }
    };
    p.getpath = function () {
        return this.pathArray;
    };
    p.manhattan = function (tile) {
        return Math.abs(tile.x - this.endNode.tileData.x) * this.straightCost +
            Math.abs(tile.y + this.endNode.tileData.y) * this.straightCost;
    };
    p.euclidian = function (tile) {
        var dx = tile.x - this.endNode.tileData.x;
        var dy = tile.y - this.endNode.tileData.y;
        return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
    };
    p.diagonal = function (tile) {
        var dx = Math.abs(tile.tileData.x - this.endNode.tileData.x);
        var dy = Math.abs(tile.tileData.y - this.endNode.tileData.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
    };
    p.getvisited = function () {
        return this._closed.concat(this._open);
    };
    return AStar;
}());
egret.registerClass(AStar,'AStar');
//# sourceMappingURL=AStar.js.map