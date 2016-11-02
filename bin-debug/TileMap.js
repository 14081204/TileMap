var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        var config = [
            { x: 0, y: 0, walkable: true, image: "road2_jpg" },
            { x: 1, y: 0, walkable: true, image: "road2_jpg" },
            { x: 2, y: 0, walkable: true, image: "road2_jpg" },
            { x: 3, y: 0, walkable: true, image: "road2_jpg" },
            { x: 4, y: 0, walkable: false, image: "tree1_jpg" },
            { x: 5, y: 0, walkable: true, image: "road2_jpg" },
            { x: 6, y: 0, walkable: true, image: "road2_jpg" },
            { x: 7, y: 0, walkable: true, image: "road2_jpg" },
            { x: 8, y: 0, walkable: true, image: "road2_jpg" },
            { x: 9, y: 0, walkable: true, image: "road2_jpg" },
            { x: 0, y: 1, walkable: true, image: "road2_jpg" },
            { x: 1, y: 1, walkable: false, image: "wall1_jpg" },
            { x: 2, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 4, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 5, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 6, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 7, y: 1, walkable: false, image: "wall1_jpg" },
            { x: 8, y: 1, walkable: true, image: "grass1_jpg" },
            { x: 9, y: 1, walkable: true, image: "road2_jpg" },
            { x: 0, y: 2, walkable: true, image: "road2_jpg" },
            { x: 1, y: 2, walkable: false, image: "wall1_jpg" },
            { x: 2, y: 2, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 2, walkable: true, image: "grass1_jpg" },
            { x: 4, y: 2, walkable: true, image: "grass1_jpg" },
            { x: 5, y: 2, walkable: false, image: "tree1_jpg" },
            { x: 6, y: 2, walkable: false, image: "wall1_jpg" },
            { x: 7, y: 2, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 2, walkable: false, image: "wall1_jpg" },
            { x: 9, y: 2, walkable: true, image: "road2_jpg" },
            { x: 0, y: 3, walkable: true, image: "road2_jpg" },
            { x: 1, y: 3, walkable: false, image: "wall1_jpg" },
            { x: 2, y: 3, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 3, walkable: true, image: "grass1_jpg" },
            { x: 4, y: 3, walkable: true, image: "grass1_jpg" },
            { x: 5, y: 3, walkable: true, image: "grass1_jpg" },
            { x: 6, y: 3, walkable: false, image: "wall1_jpg" },
            { x: 7, y: 3, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 3, walkable: false, image: "wall1_jpg" },
            { x: 9, y: 3, walkable: true, image: "road2_jpg" },
            { x: 0, y: 4, walkable: true, image: "road2_jpg" },
            { x: 1, y: 4, walkable: false, image: "wall1_jpg" },
            { x: 2, y: 4, walkable: false, image: "wall1_jpg" },
            { x: 3, y: 4, walkable: false, image: "wall1_jpg" },
            { x: 4, y: 4, walkable: false, image: "tree1_jpg" },
            { x: 5, y: 4, walkable: true, image: "grass1_jpg" },
            { x: 6, y: 4, walkable: false, image: "wall1_jpg" },
            { x: 7, y: 4, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 4, walkable: false, image: "wall1_jpg" },
            { x: 9, y: 4, walkable: true, image: "road2_jpg" },
            { x: 0, y: 5, walkable: true, image: "road2_jpg" },
            { x: 1, y: 5, walkable: true, image: "road1_jpg" },
            { x: 2, y: 5, walkable: true, image: "road1_jpg" },
            { x: 3, y: 5, walkable: true, image: "road1_jpg" },
            { x: 4, y: 5, walkable: true, image: "road1_jpg" },
            { x: 5, y: 5, walkable: true, image: "road1_jpg" },
            { x: 6, y: 5, walkable: true, image: "road1_jpg" },
            { x: 7, y: 5, walkable: true, image: "road1_jpg" },
            { x: 8, y: 5, walkable: true, image: "road1_jpg" },
            { x: 9, y: 5, walkable: true, image: "road2_jpg" },
            { x: 0, y: 6, walkable: true, image: "road2_jpg" },
            { x: 1, y: 6, walkable: false, image: "tree1_jpg" },
            { x: 2, y: 6, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 6, walkable: false, image: "wall1_jpg" },
            { x: 4, y: 6, walkable: true, image: "grass1_jpg" },
            { x: 5, y: 6, walkable: false, image: "tree1_jpg" },
            { x: 6, y: 6, walkable: false, image: "wall1_jpg" },
            { x: 7, y: 6, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 6, walkable: false, image: "tree1_jpg" },
            { x: 9, y: 6, walkable: true, image: "road2_jpg" },
            { x: 0, y: 7, walkable: true, image: "road2_jpg" },
            { x: 1, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 2, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 7, walkable: false, image: "wall1_jpg" },
            { x: 4, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 5, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 6, y: 7, walkable: false, image: "wall1_jpg" },
            { x: 7, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 7, walkable: true, image: "grass1_jpg" },
            { x: 9, y: 7, walkable: true, image: "road2_jpg" },
            { x: 0, y: 8, walkable: false, image: "tree1_jpg" },
            { x: 1, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 2, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 3, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 4, y: 8, walkable: false, image: "wall1_jpg" },
            { x: 5, y: 8, walkable: false, image: "wall1_jpg" },
            { x: 6, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 7, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 8, y: 8, walkable: true, image: "grass1_jpg" },
            { x: 9, y: 8, walkable: false, image: "tree1_jpg" },
            { x: 0, y: 9, walkable: true, image: "road2_jpg" },
            { x: 1, y: 9, walkable: true, image: "road1_jpg" },
            { x: 2, y: 9, walkable: false, image: "tree2_jpg" },
            { x: 3, y: 9, walkable: true, image: "road1_jpg" },
            { x: 4, y: 9, walkable: true, image: "road1_jpg" },
            { x: 5, y: 9, walkable: true, image: "road1_jpg" },
            { x: 6, y: 9, walkable: true, image: "road1_jpg" },
            { x: 7, y: 9, walkable: false, image: "tree2_jpg" },
            { x: 8, y: 9, walkable: true, image: "road1_jpg" },
            { x: 9, y: 9, walkable: true, image: "road2_jpg" },
            { x: 0, y: 10, walkable: true, image: "road2_jpg" },
            { x: 1, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 2, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 3, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 4, y: 10, walkable: true, image: "flower_jpg" },
            { x: 5, y: 10, walkable: true, image: "flower_jpg" },
            { x: 6, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 7, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 8, y: 10, walkable: true, image: "grass2_jpg" },
            { x: 9, y: 10, walkable: true, image: "road2_jpg" },
            { x: 0, y: 11, walkable: false, image: "tree2_jpg" },
            { x: 1, y: 11, walkable: true, image: "grass2_jpg" },
            { x: 2, y: 11, walkable: true, image: "flower_jpg" },
            { x: 3, y: 11, walkable: false, image: "wall2_jpg" },
            { x: 4, y: 11, walkable: false, image: "wall2_jpg" },
            { x: 5, y: 11, walkable: false, image: "wall2_jpg" },
            { x: 6, y: 11, walkable: false, image: "wall2_jpg" },
            { x: 7, y: 11, walkable: true, image: "flower_jpg" },
            { x: 8, y: 11, walkable: true, image: "grass2_jpg" },
            { x: 9, y: 11, walkable: false, image: "tree2_jpg" },
            { x: 0, y: 12, walkable: true, image: "road2_jpg" },
            { x: 1, y: 12, walkable: true, image: "grass2_jpg" },
            { x: 2, y: 12, walkable: true, image: "grass2_jpg" },
            { x: 3, y: 12, walkable: false, image: "wall2_jpg" },
            { x: 4, y: 12, walkable: true, image: "flower_jpg" },
            { x: 5, y: 12, walkable: true, image: "flower_jpg" },
            { x: 6, y: 12, walkable: true, image: "grass2_jpg" },
            { x: 7, y: 12, walkable: true, image: "grass2_jpg" },
            { x: 8, y: 12, walkable: true, image: "grass2_jpg" },
            { x: 9, y: 12, walkable: true, image: "road2_jpg" },
            { x: 0, y: 13, walkable: true, image: "road2_jpg" },
            { x: 1, y: 13, walkable: false, image: "tree2_jpg" },
            { x: 2, y: 13, walkable: true, image: "grass2_jpg" },
            { x: 3, y: 13, walkable: false, image: "wall2_jpg" },
            { x: 4, y: 13, walkable: false, image: "wall2_jpg" },
            { x: 5, y: 13, walkable: false, image: "wall2_jpg" },
            { x: 6, y: 13, walkable: true, image: "grass2_jpg" },
            { x: 7, y: 13, walkable: true, image: "grass2_jpg" },
            { x: 8, y: 13, walkable: false, image: "tree2_jpg" },
            { x: 9, y: 13, walkable: true, image: "road2_jpg" },
            { x: 0, y: 14, walkable: true, image: "road2_jpg" },
            { x: 1, y: 14, walkable: true, image: "grass2_jpg" },
            { x: 2, y: 14, walkable: true, image: "grass2_jpg" },
            { x: 3, y: 14, walkable: false, image: "wall2_jpg" },
            { x: 4, y: 14, walkable: true, image: "flower_jpg" },
            { x: 5, y: 14, walkable: true, image: "flower_jpg" },
            { x: 6, y: 14, walkable: true, image: "grass2_jpg" },
            { x: 7, y: 14, walkable: true, image: "grass2_jpg" },
            { x: 8, y: 14, walkable: true, image: "grass2_jpg" },
            { x: 9, y: 14, walkable: true, image: "road2_jpg" },
            { x: 0, y: 15, walkable: false, image: "tree2_jpg" },
            { x: 1, y: 15, walkable: true, image: "grass2_jpg" },
            { x: 2, y: 15, walkable: true, image: "flower_jpg" },
            { x: 3, y: 15, walkable: false, image: "wall2_jpg" },
            { x: 4, y: 15, walkable: false, image: "wall2_jpg" },
            { x: 5, y: 15, walkable: false, image: "wall2_jpg" },
            { x: 6, y: 15, walkable: false, image: "wall2_jpg" },
            { x: 7, y: 15, walkable: true, image: "flower_jpg" },
            { x: 8, y: 15, walkable: true, image: "grass2_jpg" },
            { x: 9, y: 15, walkable: false, image: "tree2_jpg" },
            { x: 0, y: 16, walkable: true, image: "road2_jpg" },
            { x: 1, y: 16, walkable: true, image: "road2_jpg" },
            { x: 2, y: 16, walkable: false, image: "tree1_jpg" },
            { x: 3, y: 16, walkable: true, image: "road2_jpg" },
            { x: 4, y: 16, walkable: true, image: "flower_jpg" },
            { x: 5, y: 16, walkable: true, image: "flower_jpg" },
            { x: 6, y: 16, walkable: true, image: "road2_jpg" },
            { x: 7, y: 16, walkable: false, image: "tree1_jpg" },
            { x: 8, y: 16, walkable: true, image: "road2_jpg" },
            { x: 9, y: 16, walkable: true, image: "road2_jpg" },
        ];
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TILE_SIZE);
            var gridY = Math.floor(localY / TileMap.TILE_SIZE);
            console.log(gridX, gridY);
        }, this);
    };
    TileMap.TILE_SIZE = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        //bitmap.scaleX = bitmap.scaleY = 2;
        this.x = data.x * TileMap.TILE_SIZE;
        this.y = data.y * TileMap.TILE_SIZE;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
//# sourceMappingURL=TileMap.js.map