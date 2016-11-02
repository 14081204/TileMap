class TileMap  extends egret.DisplayObjectContainer{

	public static TILE_SIZE = 64;
	public _startNode: Tile;
	public _endNode: Tile;
	public tileArray: Tile[];
	public _numCols: number;
	public _numRows: number;

	public constructor() {
		super();
		this._numCols = 10;
		this._numRows = 17;
		this.tileArray = [];
		/*for(var i: number = 0; i < this._numCols; i++){
			tileArray[i] = new Array();
			for(var j: number = 0; j < this._numRows; j++){
				tileArray[i][j] = new TileNode(i, j);
			}
		}*/
		this.init();
	}

	public gettileNode(x: number, y: number):any{
		return this.tileArray[x][y];
	}

	/*
	
	public setStartNode(x: number, y: number): void{
		_startNode = _nodes[x][y] as Node;
	}

	public setEndNode(x: number, y: number){
		this._endNode = tileArray[x][y] as Node;
	}

	public setWalkable(x: number, y: number, value: Boolean){
		_nodes[x][y].walkable = value;
	}

	public get endNode(): Node{
		return _endNode;
	}

	*/

	public getTile( x : number , y : number):any{
        for(var i = 0 ; i<this.tileArray.length ; i++){
              if(this.tileArray[i].x / TileMap.TILE_SIZE == x && this.tileArray[i].y / TileMap.TILE_SIZE == y){
                  break;
              }
        }
        return this.tileArray[i];
    }

	public getnumCols(): number{
		return this._numCols;
	}

	public getnumRows(): number{
		return this._numRows;
	}

	public getStartNode(): any{
		return this._startNode;
	}

	private init(){
		var config:TileData[] = [
			{ x:0, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:0, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:0, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:1, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:1, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:1, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:1, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:1, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:2, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:2, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:2, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:2, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:2, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:2, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:2, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:2, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:2, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:2, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:3, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:3, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:3, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:3, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:3, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:3, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:3, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:3, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:3, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:3, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:4, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:4, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:4, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:4, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:4, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:4, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:4, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:4, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:4, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:4, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:5, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:5, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:5, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:6, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:6, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:6, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:6, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:6, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:6, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:6, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:6, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:6, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:6, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:7, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:7, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:7, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:7, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:7, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:8, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:8, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:8, walkable: false, image: "wall1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:8, walkable: true, image: "grass1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:8, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:9, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:9, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:9, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:9, walkable: true, image: "road1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:9, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:10, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:10, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:10, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:10, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:10, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:11, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:11, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:11, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:11, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:11, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:11, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:11, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:11, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:11, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:11, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:12, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:12, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:12, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:12, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:12, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:12, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:12, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:12, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:12, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:12, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:13, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:13, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:13, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:13, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:13, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:13, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:13, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:13, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:13, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:13, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:14, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:14, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:14, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:14, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:14, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:14, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:14, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:14, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:14, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:14, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:15, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:15, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:15, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:15, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:15, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:15, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:15, walkable: false, image: "wall2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:15, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:15, walkable: true, image: "grass2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:15, walkable: false, image: "tree2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},

			{ x:0, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:1, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:2, y:16, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:3, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:4, y:16, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:5, y:16, walkable: true, image: "flower_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:6, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:7, y:16, walkable: false, image: "tree1_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:8, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
			{ x:9, y:16, walkable: true, image: "road2_jpg", f : 0 , g : 0, h : 0 , costMultiplier :1.0},
		]
		for(var i = 0; i < config.length; i++){
			var data = config[i];
			var tile = new Tile(data);
			this.addChild(tile);
		}
		this.touchEnabled = true;
		/*this.addEventListener(egret.TouchEvent.TOUCH_TAP,(e) => {
			var localX = e.localX;
			var localY = e.localY;
			var gridX = Math.floor(localX / TileMap.TILE_SIZE);
			var gridY = Math.floor(localY / TileMap.TILE_SIZE);
			console.log(gridX, gridY);
		}, this);*/



	}
}


class TileData{

	x: number;
	y: number;
	walkable: boolean;
	image: string;
	f:number;
    g:number;
    h:number;
	costMultiplier:number = 1.0;
}

class Tile extends egret.DisplayObjectContainer{

	data: TileData;
	public bitmaps;
    public tileParent : Tile;

	constructor(data: TileData){
		super();
		this.data = data;
		var bitmaps = new egret.Bitmap();
		this.addChild(bitmaps);
		bitmaps.texture = RES.getRes(data.image);
		//bitmap.scaleX = bitmap.scaleY = 2;
		this.x = data.x * TileMap.TILE_SIZE;
		this.y = data.y * TileMap.TILE_SIZE;
	}
}