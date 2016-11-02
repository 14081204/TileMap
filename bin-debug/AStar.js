var AStar = (function () {
    function AStar() {
        this.straightCost = 1.0;
        this.diagCost = Math.SQRT2;
        this.heuristic = this.diagonal;
    }
    var d = __define,c=AStar,p=c.prototype;
    p.findPath = function (tileMap) {
        var h = 0;
        var g = 0;
        this.pathArray = [];
        this.tileMap = tileMap;
        this._open = [];
        this._closed = [];
        this.startTile = tileMap._startNode;
        this.endTile = tileMap._endNode;
        this.startTile.data.g = 0;
        this.startTile.data.h = this.heuristic(this.startTile);
        this.startTile.data.f = this.startTile.data.g + this.startTile.data.h;
        return this.search();
    };
    p.isOpen = function (tile) {
        for (var i = 0; i < this._open.length; i++) {
            if (tile == this._open[i]) {
                return true;
            }
        }
        return false;
    };
    p.isClosed = function (tile) {
        for (var i = 0; i < this._closed.length; i++) {
            if (tile == this._closed[i]) {
                return true;
            }
        }
        return false;
    };
    p.findMinFInOpenArray = function () {
        var i = 0;
        var temp;
        for (var j = 0; j < this._open.length; j++) {
            if (this._open[i].data.f > this._open[j].data.f) {
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
        var tile = this.startTile;
        while (tile != this.endTile) {
            var startX = Math.max(0, tile.data.x - 1);
            var endX = Math.min(this.tileMap._numCols - 1, tile.data.x + 1);
            var startY = Math.max(0, tile.data.y - 1);
            var endY = Math.min(this.tileMap._numRows - 1, tile.data.y + 1);
            for (var i = startX; i <= endX; i++) {
                for (var j = startY; j <= endY; j++) {
                    var test = this.tileMap.getTile(i, j);
                    if (test == tile || !test.data.walkable || !this.tileMap.getTile(tile.data.x, test.data.y).data.walkable || !this.tileMap.getTile(test.data.x, tile.data.y).data.walkable) {
                        continue;
                    }
                    var cost = this.straightCost;
                    if (!((tile.data.x == test.data.x) || (tile.data.y == test.data.y))) {
                        cost = this.diagCost;
                    }
                    var g = tile.data.g + cost * test.data.costMultiplier;
                    var h = this.heuristic(test);
                    var f = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.data.f > f) {
                            test.data.f = f;
                            test.data.g = g;
                            test.data.h = h;
                            test.tileParent = tile;
                        }
                    }
                    else {
                        test.data.f = f;
                        test.data.g = g;
                        test.data.h = h;
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
        var tile = this.endTile;
        this.pathArray.push(tile);
        while (tile != this.startTile) {
            tile = tile.tileParent;
            this.pathArray.unshift(tile);
        }
    };
    p.emanhattan = function (tile) {
        return Math.abs(tile.x - this.endTile.data.x) * this.straightCost +
            Math.abs(tile.y + this.endTile.data.y) * this.straightCost;
    };
    p.euclidian = function (tile) {
        var dx = tile.x - this.endTile.data.x;
        var dy = tile.y - this.endTile.data.y;
        return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
    };
    p.diagonal = function (tile) {
        var dx = Math.abs(tile.data.x - this.endTile.data.x);
        var dy = Math.abs(tile.data.y - this.endTile.data.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
    };
    return AStar;
}());
egret.registerClass(AStar,'AStar');
//# sourceMappingURL=AStar.js.map