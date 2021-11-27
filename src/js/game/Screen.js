class Screen{
    init(cnv){
        this.canvas = cnv;
        this.ctx = this.canvas.getContext("2d");
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    get FPS(){
        return 30;
    }

    w(){
        return this.canvas.width;
    }

    h(){
        return this.canvas.height;
    }
}

var s = new Screen();
