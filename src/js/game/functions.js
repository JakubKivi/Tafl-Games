function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}


function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

window.onresize = function(){
    s.init(document.getElementById("game"));
    if(s.w()>s.h()){
        fieldSize = (s.h()-margin)/(size+1);
    }else{
        fieldSize = (s.w()-margin)/(size+1);
    }
    center = {
        x: (s.w()-(2*fieldSize))/2,
        y: (s.h()-fieldSize)/2
    };
    startCord = {
        x: center.x-(Math.trunc(size/2)*fieldSize),
        y: center.y-(Math.trunc(size/2)*fieldSize)
    };
    mouseX=-1000;
    mouseY=-1000;
}
