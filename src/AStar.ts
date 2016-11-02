class AStar {

	private _open: Tile[];
    private _closed: Tile[];
    private tileMap : TileMap;
    public startTile : Tile;
    public endTile : Tile;
    public pathArray : Tile[];
    private straightCost:number = 1.0;
    private diagCost:number = Math.SQRT2;
    private heuristic:Function = this.diagonal;
	public constructor() {
	}

	public findPath(tileMap: TileMap): any{
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
	}

	private isOpen(tile : Tile):any{
        for(var i = 0 ; i < this._open.length ; i++){
            if( tile == this._open[i] ){
                return true;
            }
        }
        return false;
    }

	private isClosed(tile : Tile):any{
        for(var i = 0 ; i < this._closed.length ; i++){
            if( tile == this._closed[i] ){
                return true;
            }
        }
        return false;
    }

	private findMinFInOpenArray():any{
        var i = 0;
        var temp : Tile;
        for(var j = 0 ; j < this._open.length ; j++){
            if( this._open[i].data.f > this._open[j].data.f){
                i = j;
            }
        }
        temp = this._open[i];
        for( j = i ; j < this._open.length - 1; j++){
            this._open[j] = this._open[j + 1];
        }
        this._open.pop();
        return temp;
    }

	 public search():any{
        var tile = this.startTile;
        
        while( tile != this.endTile){
            var startX:number = Math.max(0, tile.data.x - 1);
            var endX:number = Math.min(this.tileMap._numCols - 1, tile.data.x + 1);
            var startY:number = Math.max(0, tile.data.y - 1);
            var endY:number = Math.min(this.tileMap._numRows - 1, tile.data.y + 1);
            for(var i:number = startX; i <= endX; i++){
                for(var j:number = startY; j <= endY; j++){
                    var test:Tile = this.tileMap.getTile(i, j);
                    if(test == tile ||!test.data.walkable ||!this.tileMap.getTile(tile.data.x, test.data.y).data.walkable ||!this.tileMap.getTile(test.data.x, tile.data.y).data.walkable){
                        continue;
                    }
                    var cost:number = this.straightCost;
                    if(!((tile.data.x == test.data.x) || (tile.data.y == test.data.y))){
                        cost = this.diagCost;
                    }
                    var g:number = tile.data.g + cost * test.data.costMultiplier;
                    var h:number = this.heuristic(test);
                    var f:number = g + h;
                    if(this.isOpen(test) || this.isClosed(test)){
                       if(test.data.f > f){
                          test.data.f = f;
                          test.data.g = g;
                          test.data.h = h;
                          test.tileParent = tile;
                        }
                    }
                    else{
                        test.data.f = f;
                        test.data.g = g;
                        test.data.h = h;
                        test.tileParent = tile;
                        this._open.push(test);
                    }

                }
            }
            this._closed.push(tile);
            if(this._open.length == 0){
                console.log("no path found");
                return false
            }
            tile = this.findMinFInOpenArray();
        }
        this.buildPath();
        return true;
    }

	private buildPath():void{
    
    	var tile:Tile = this.endTile;
    	this.pathArray.push(tile);
    	while(tile != this.startTile){
        	tile = tile.tileParent;
        	this.pathArray.unshift(tile);
    	}
	}

	private emanhattan(tile:Tile):number {
		return Math.abs(tile.x - this.endTile.data.x) * this.straightCost +
		Math.abs(tile.y + this.endTile.data.y) * this.straightCost;
	}

	private euclidian(tile:Tile):number
	{
		var dx:number = tile.x - this.endTile.data.x;
		var dy:number = tile.y - this.endTile.data.y;
		return Math.sqrt(dx * dx + dy * dy) * this.straightCost;
	}

	private diagonal(tile:Tile):number
	{
		var dx:number = Math.abs(tile.data.x - this.endTile.data.x);
		var dy:number = Math.abs(tile.data.y - this.endTile.data.y);
		var diag:number = Math.min(dx, dy);
		var straight:number = dx + dy;
		return this.diagCost * diag + this.straightCost * (straight - 2 * diag);
	}

}