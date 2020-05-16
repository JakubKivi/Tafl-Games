$(window).ready(function(){
    // onload
    start();
    update();
});

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

class Screen{
    init(cnv){
        this.canvas = cnv;
        this.ctx = this.canvas.getContext("2d");
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    get FPS(){
        return 20;
    }

    w(){
        return this.canvas.width;
    }

    h(){
        return this.canvas.height;
    }
}

var s = new Screen();

var whiteField = new Image;
whiteField.src="img/whiteField.png";
var blackField = new Image;
blackField.src="img/blackField.png";
var specialField = new Image;
specialField.src="img/specialField.png";
var cursor = new Image;
cursor.src="img/cursor.png"
var whiteFieldHovered = new Image;
whiteFieldHovered.src="img/whiteFieldHovered.png";
var blackFieldHovered = new Image;
blackFieldHovered.src="img/blackFieldHovered.png";
var specialFieldHovered = new Image;
specialFieldHovered.src="img/specialFieldHovered.png";
var blackPawn = new Image;
blackPawn.src="img/blackPawn.png";
var whitePawn = new Image;
whitePawn.src="img/whitePawn.png";
var king = new Image;
king.src="img/king.png";
var blackPawnClicked = new Image;
blackPawnClicked.src="img/blackPawnClicked.png";
var whitePawnClicked = new Image;
whitePawnClicked.src="img/whitePawnClicked.png";
var kingClicked = new Image;
kingClicked.src="img/kingClicked.png";
var clickToStart = new Image;
clickToStart.src="img/pressToStart.png";
var clickToStartH = new Image;
clickToStartH.src="img/pressToStartH.png";
var whiteWin = new Image;
whiteWin.src="img/whiteWin.png";
var blackWin = new Image;
blackWin.src="img/blackWin.png";

var sound = new Audio('sound/sound.wav');



var hovered = {
    x: -1,
    y: -1
};
var clicked = {
    x:0,
    y:0
};

var gameName='Brandubh';           // Brandubh, Tablut
var size=0;                      //by default
var winCondition='corner';       //edge, corner
var moveThroughtThrone='enable'; //enable, disable
var weaponlessKing='disable';    //enable, disable
var ableToBackToThrone='enable'; //enable, disable
var throneIsKilling='both';      //both, attackersOnly
var killingKingCondition='two';  //two, four
var throneProtecting='disable';  //enable, disable 
var fourToKillOnThrone='enable'; //enable, disable
var startingPlayer='black';		 //black, white
var AI=0;  						 //0, 1-black, 2 - white

var margin =100;

var mouseX=9999999;
var mouseY=9999999;
var MouseCord;
var player;
var fieldSize;
var center;
var startCord;
var isMobile;
var tourNr=0;
var win=0;
var mainMenu=0;
var firstBoard=1;

var field= createArray(100, 100);  //1 - black, 2 - white, 3 - king, 4 - obstacle

function cursorPos(e) {

    e = e || window.event;

    mouseX = e.pageX;
    mouseY = e.pageY;

    if(mouseX>startCord.x && mouseY>startCord.y && mouseX<(startCord.x+(size*fieldSize)) && mouseY<(startCord.y+(size*fieldSize))){
        var found=false; 
        
        for(i=0; i<=size; i++){
            for(j=0; j<=size; j++){
                if(mouseX<(startCord.x+(i*fieldSize)) && mouseY<(startCord.y+(j*fieldSize)) && !found){
                    mouseCord = {
                        x: i,
                        y: j
                    }     
                    found=true;
                }
            }
        }
    }
}

function renderMap(size){
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            if(winCondition=='corner' && i==0&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            else if(winCondition=='corner' && i==size-1&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            else if(winCondition=='corner' && i==0&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            else if(winCondition=='corner' && i==size-1&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            else if(i==parseInt(size/2)&&j==parseInt(size/2))s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            else if(i%2==0){
                if(j%2==0)
                    s.ctx.drawImage(blackField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                if(j%2==1)
                    s.ctx.drawImage(whiteField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            }else{
                if(j%2==1)
                    s.ctx.drawImage(blackField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                if(j%2==0)
                    s.ctx.drawImage(whiteField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
            }
        }
    }   
}

function clearFigures(a){
    for(i=0; i<100; i++){
        for(j=0; j<100; j++){
            a[i][j]=0;
        }
    }
};

function putFiguresOnMap(){
    function mirroring(){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if(field[i][j]==1){
                    field[size-i+1][size-j+1]=1;
                    field[i][size-j+1]=1;
                    field[size-i+1][j]=1;
                }
                if(field[i][j]==2){
                    field[size-i+1][size-j+1]=2;
                    field[i][size-j+1]=2;
                    field[size-i+1][j]=2;
                }
            }
        }
    }
   if(gameName=='Brandubh'){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if(j==4){
                    if(i<3||i>5)field[i][j]=1;
                    else field[i][j]=2;
                }
                if(i==4){
                    if(j<3||j>5)field[i][j]=1;
                    else field[i][j]=2;
                }
            }
        }
   }
   if(gameName=='Tablut'){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if(j==5){
                    if(i<3||i>5)field[i][j]=1;
                    else field[i][j]=2;
                }
                if(i==5){
                    if(j<3||j>5)field[i][j]=1;
                    else field[i][j]=2;
                }
                if((i==4 && j==1) || (j==4 && i==1))field[i][j]=1;
            }
        }
   }
   mirroring();
   field[parseInt(size/2)+1][parseInt(size/2)+1]=3;
   if(winCondition=='corner')field[1][1]=4;
   if(winCondition=='corner')field[1][size]=4;
   if(winCondition=='corner')field[size][1]=4;
   if(winCondition=='corner')field[size][size]=4;
}

function renderFig(){
    for(i=1; i<=size; i++){
        for(j=1; j<=size; j++){
            if(i==clicked.x&&j==clicked.y){
                if(field[i][j]==1)s.ctx.drawImage(blackPawnClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(field[i][j]==2)s.ctx.drawImage(whitePawnClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(field[i][j]==3)s.ctx.drawImage(kingClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
            }else{
                if(field[i][j]==1)s.ctx.drawImage(blackPawn, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(field[i][j]==2)s.ctx.drawImage(whitePawn, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(field[i][j]==3)s.ctx.drawImage(king, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
            }
        }
    }
}

function drawHovered(){
    if(mouseX>startCord.x && mouseY>startCord.y && mouseX<(startCord.x+(size*fieldSize)) && mouseY<(startCord.y+(size*fieldSize))){
        if(winCondition=='corner' && mouseCord.x==1&&mouseCord.y==1)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==size&&mouseCord.y==size)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==1&&mouseCord.y==size)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==size&&mouseCord.y==1)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(mouseCord.x==parseInt(size/2)+1&&mouseCord.y==parseInt(size/2)+1)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(mouseCord.x%2==0){
            if(mouseCord.y%2==0)
                s.ctx.drawImage(blackFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
            else
                s.ctx.drawImage(whiteFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        }else{
            if(mouseCord.y%2==0)
                s.ctx.drawImage(whiteFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
            else 
                s.ctx.drawImage(blackFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        }
    }
}

function remove(t, c, d){
    var o;
    player==1?o=2:o=1;

    //simple killing figures
    			if(t[c+1][d]==o && t[c+2][d]==player)t[c+1][d]=0;
    if(c-2>0)	if(t[c-1][d]==o && t[c-2][d]==player)t[c-1][d]=0;
    			if(t[c][d+1]==o && t[c][d+2]==player)t[c][d+1]=0;
    if(d-2>0)	if(t[c][d-1]==o && t[c][d-2]==player)t[c][d-1]=0;

    if(throneIsKilling=='both'){
     				if(t[c+1][d]==o && t[c+2][d]==5)t[c+1][d]=0;
    if(c-2>0)     	if(t[c-1][d]==o && t[c-2][d]==5)t[c-1][d]=0;
        		    if(t[c][d+1]==o && t[c][d+2]==5)t[c][d+1]=0;
    if(d-2>0)		if(t[c][d-1]==o && t[c][d-2]==5)t[c][d-1]=0;
    }
    if(winCondition=='corner'){
		        if(t[c+1][d]==o && t[c+2][d]==4)t[c+1][d]=0;
	if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==4)t[c-1][d]=0;
		        if(t[c][d+1]==o && t[c][d+2]==4)t[c][d+1]=0;
	if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==4)t[c][d-1]=0;
    }
    if(weaponlessKing=='disable'){
        		 if(t[c+1][d]==o && t[c+2][d]==3)t[c+1][d]=0;
    if(c-2>0)    if(t[c-1][d]==o && t[c-2][d]==3)t[c-1][d]=0;
        		 if(t[c][d+1]==o && t[c][d+2]==3)t[c][d+1]=0;
    if(d-2>0)    if(t[c][d-1]==o && t[c][d-2]==3)t[c][d-1]=0;
    }
}

function removeKing(t, c, d){
    if(killingKingCondition=='two'){
        if(t[parseInt(size/2)+1][parseInt(size/2)+1]!=3 && fourToKillOnThrone=='enable'){
            if(t[c+1][d]==3 && t[c+2][d]==1){
                if(c+1==parseInt(size/2)+1 && d==parseInt(size/2)+1){
                    if(t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
                }else win=1;
            }
            else if(t[c-1][d]==3 && t[c-2][d]==1){
                if(c-1==parseInt(size/2)+1 && d==parseInt(size/2)+1){
                    if(t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
                }else win=1;
            }
            else if(t[c][d+1]==3 && t[c][d+2]==1){
                if(c==parseInt(size/2)+1 && d+1==parseInt(size/2)+1){
                    if(t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
                }else win=1;
            }
            else if(t[c][d-1]==3 && t[c][d-2]==1){
                if(c==parseInt(size/2)+1 && d-1==parseInt(size/2)+1){
                    if(t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
                }else win=1;
            }
        }else{
            if(t[c+1][d]==3   && (t[c+2][d]==1 || c+2>size) &&
               t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
            else if(t[c-1][d]==3   && (t[c-2][d]==1 || c-2<1) &&
                    t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
            else if(t[c][d+1]==3   && (t[c][d+2]==1 || d+2>size) &&
                    t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
            else if(t[c][d-1]==3   && (t[c][d-2]==1 || d-2<1) &&
                    t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
        }
    }else if(killingKingCondition=='four'){
            if(t[c+1][d]==3   && (t[c+2][d]==1 || c+2>size) &&
               t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
            else if(t[c-1][d]==3   && (t[c-2][d]==1 || c-2<1) &&
                    t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
            else if(t[c][d+1]==3   && (t[c][d+2]==1 || d+2>size) &&
                    t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
            else if(t[c][d-1]==3   && (t[c][d-2]==1 || d-2<1) &&
                    t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
    }
}
function escaping(c, d){
    if(winCondition=="edge" && (c==size||d==size||c==1||d==1))win=2;
    if(winCondition=="corner" && (c==1&&d==1 || c==1&&d==size||
                                  c==size&&d==1 || c==size&&d==size))win=2;
}

function move(t, a, b, c, d){
    if(t[a][b]==3)escaping(c, d);
    var buf=t[a][b];
    if(buf==3 && a==parseInt(size/2)+1 && b==parseInt(size/2)+1)t[a][b]=5;
    else t[a][b]=0;
    t[c][d]=buf;
    if(c-1>0)if(player==1 &&(t[c+1][d]==3 || t[c-1][d]==3 ||
                    t[c][d+1]==3 || t[c][d-1]==3)
    )removeKing(t, c, d);
    remove(t, c, d);
    
    player==1?player=2:player=1;
}

function canMove(t,x,y,tx,ty){
    if(x!=tx&&y!=ty)return false;
    if(t[x][y]!=3 && (t[tx][ty]==5||t[x][y]==4))return false;
    if(x==tx){
        if(ty>y){
            for(i=y+1; i<=ty; i++){
                if(t[x][i]==1 || t[x][i]==2 || t[x][i]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[x][i]==5)return false;
            }
        }else if(ty<y){
            for(i=y-1; i>=ty; i--){
                if(t[x][i]==1 || t[x][i]==2 || t[x][i]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[x][i]==5)return false;
            }
        }
    }else if(y==ty){
        if(tx>x){
            for(i=x+1; i<=tx; i++){
                if(t[i][y]==1 || t[i][y]==2 || t[i][y]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }else if(tx<x){
            for(i=x-1; i>=tx; i--){
                if(t[i][y]==1 || t[i][y]==2 || t[i][y]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }
    }
    return true;
}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function AImove(t){
 	//INTELIGENT MOVES... almost xd
 	var bestBoard=0;
 	var bestMove={
 		x: 0,
 		y: 0,
 		tx: 0,
 		ty: 0
 	};

	var nfield= createArray(100, 100);
	clearFigures(nfield);

 	for(i=0; i<=size; i++){
        for(j=0; j<=size; j++){
        	nfield[i][j]=t[i][j];
        }
    }

 	for(a=1; a<=size; a++){
 		for(b=1; b<=size; b++){
 			for(c=1; c<=size; c++){
	 			if((nfield[a][b]==AI || (nfield[a][b]==AI+1 && AI==2)) && canMove(nfield,a,b,c,b) && a!=c){
	 				console.log('a');
					move(nfield,a,b,c,b);

				}
				if((nfield[a][b]==AI || (nfield[a][b]==AI+1 && AI==2)) && canMove(nfield,a,b,a,c) && b!=c){
					console.log('a');
					move(nfield,a,b,a,c);

				}
		 	}
 		}
 	}
 	if(bestMove.x!=0 && bestMove.y!=0 && bestMove.tx!=0 && bestMove.ty!=0){
 		move(field,bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
 		console.log("ruch z: " + bestMove.x + ", " + bestMove.y + " do: " + bestMove.tx + ", " + bestMove.ty);
 	}
 	else{
		//RANDOM MOVES//
		var AImoved=false;
		while(!AImoved){
				
			var a = randomInt(1, size+1);
			var b = randomInt(1, size+1);
			var c = randomInt(1, size+1);
			var d = randomInt(1, size+1);
			if((field[a][b]==AI || (field[a][b]==AI+1 && AI==2)) && canMove(field,a,b,c,d) && (a!=c || b!=d)){
				move(field,a,b,c,d);
				console.log('wale randoma');
				AImoved=true;
			}
	 	}	
 	}
}

function AIcount(t){
	var value=0;
	for(i=1; i<=size; i++){
    	for(j=1; j<=size; j++){
    		if(t[i][j]==1)value+=10;
    		if(t[i][j]==2)value-=10;
    	}
    }
	return value;
}

function click(e){
    if(firstBoard==1){
        if(mouseY > (s.h()-clickToStart.height)/2 && mouseY < (s.h()-clickToStart.height)/2 + clickToStart.height){
            firstBoard=0;
            var audio = new Audio('sound/music.mp3');
            audio.play();
            audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        }
    }else if(mainMenu==1){
        mainMenu=0;
    }else if(win!=0){
        clearFigures(field);
        putFiguresOnMap();
        win=0;
        startingPlayer=='black'?player=1:player=2;
    }else{
        if(mouseX>startCord.x && mouseY>startCord.y && mouseX<(startCord.x+(size*fieldSize)) && mouseY<(startCord.y+(size*fieldSize))){
            if(clicked.x==0 && clicked.y==0){
                if(field[mouseCord.x][mouseCord.y]==1 && player==1){
                    clicked.x=mouseCord.x;
                    clicked.y=mouseCord.y;
                }else if((field[mouseCord.x][mouseCord.y]==2 || field[mouseCord.x][mouseCord.y]==3) && player==2){
                    clicked.x=mouseCord.x;
                    clicked.y=mouseCord.y;
                }else{
                    clicked.x=0;
                    clicked.y=0;
                }
            }else if(field[clicked.x][clicked.y]==1 || field[clicked.x][clicked.y]==2 || field[clicked.x][clicked.y]==3){
                if(clicked.x!=mouseCord.x || clicked.y!=mouseCord.y){
                    if(canMove(field,clicked.x, clicked.y, mouseCord.x, mouseCord.y)){
                    	move(field,clicked.x, clicked.y, mouseCord.x, mouseCord.y);
                    	sound.play();
                    	clicked.x=0;
    					clicked.y=0;
                    }
                    else{
                        clicked.x=0;
                        clicked.y=0;
                    }
                }else{
                    clicked.x=0;
                    clicked.y=0;
                }
            }else{
                clicked.x=0;
                clicked.y=0;
            }
        }else{
            clicked.x=0;
            clicked.y=0;
        }
    }
}

function start(){
    
    if(gameName=='Brandubh'){
        size=7;
        winCondition='corner';
        moveThroughtThrone='enable';
        throneIsKilling='both';
        killingKingCondition='two'; 
        throneProtecting='disable';
        fourToKillOnThrone='enable';
        startingPlayer='black';
    }
    else if(gameName=='Tablut'){
        size=9;
        winCondition='edge';
        moveThroughtThrone='enable';
        throneIsKilling='both';
        killingKingCondition='four'; 
        throneProtecting='enable';
        fourToKillOnThrone='enable';
        startingPlayer='black';
    }
    startingPlayer=='black'?player=1:player=2;

    s.init(document.getElementById("game"));

    if (document.attachEvent) document.attachEvent('mousemove', cursorPos);
    else document.addEventListener('mousemove', cursorPos);

    if (document.attachEvent) document.attachEvent('onclick', click);
    else document.addEventListener('click', click);

    if(s.w()>s.h()){
        fieldSize = (s.h()-margin)/size;
    }else{

        fieldSize = (s.w()-margin)/size;
    }
    center = {
        x: (s.w()-fieldSize)/2,
        y: (s.h()-fieldSize)/2
    };
    startCord = {
        x: center.x-(Math.trunc(size/2)*fieldSize),
        y: center.y-(Math.trunc(size/2)*fieldSize)
    };

    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    clearFigures(field);
    putFiguresOnMap();
    if(player==1 && AI ==1)AImove(field);
}

function update(){
    setTimeout(function(){
         update();  
    }, 1000 / s.FPS);
    s.ctx.clearRect(0, 0, s.w(), s.h());

    s.ctx.fillRect(0, 0, s.w(), s.h());
    if(firstBoard==1){
        
        if(mouseY > (s.h()-clickToStart.height)/2 && mouseY < (s.h()-clickToStart.height)/2 + clickToStart.height)
            s.ctx.drawImage(clickToStartH, 0, (s.h()-clickToStartH.height)/2, s.w(), clickToStartH.height);
        else s.ctx.drawImage(clickToStart, 0, (s.h()-clickToStart.height)/2, s.w(), clickToStart.height);
    }else if(mainMenu==1){

    }else if(win==1){
        renderMap(size);
        renderFig();
        s.ctx.save();
        s.ctx.globalAlpha=0.85;
        s.ctx.drawImage(blackWin, 0, 0, s.w(), s.h());
        s.ctx.restore();
    }else if(win==2){
        renderMap(size);
        renderFig();
        s.ctx.save();
        s.ctx.globalAlpha=0.85;
        s.ctx.drawImage(whiteWin, 0, 0, s.w(), s.h());
        s.ctx.restore();
    }else {
        renderMap(size);
        if(!isMobile)if(typeof mouseCord!= 'undefined')drawHovered();
        renderFig();
		if(player==AI)AImove(field);
    }
    if(!isMobile)s.ctx.drawImage(cursor, mouseX, mouseY, fieldSize*0.75, fieldSize*0.75);
}

window.onresize = function(){
    s.init(document.getElementById("game"));
    if(s.w()>s.h()){
        fieldSize = (s.h()-margin)/size;
    }else{

        fieldSize = (s.w()-margin)/size;
    }
    center = {
        x: (s.w()-fieldSize)/2,
        y: (s.h()-fieldSize)/2
    };
    startCord = {
        x: center.x-(Math.trunc(size/2)*fieldSize),
        y: center.y-(Math.trunc(size/2)*fieldSize)
    };
    mouseX=-1000;
    mouseY=-1000;
}

