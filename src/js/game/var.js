var hovered = {
    x: -1,
    y: -1
};
var clicked = {
    x:0,
    y:0
};

var gameName='Hnefatafl';           // Brandubh, Tablut, Ard Ri, Tawlbwrdd, Hnefatafl, Alea Evangelii
var weaponlessKing='disable';    //enable, disable					
var size=0;                      //by default								/		
var winCondition='corner';       //edge, corner, cornerB						/
var killingKingCondition='two';  //two, four 						/


var moveThroughtThrone='enable'; //enable, disable					/
var ableToBackToThrone='enable'; //enable, disable					/
var throneIsKilling='both';      //both, attackersOnly				/	
var fourToKillOnThrone='enable'; //enable, disable					/
var startingPlayer='black';		 //black, white					/	
var shieldWall='disable';        //disable, enable				
var AI=2;  						 //0, 1-black/lapiacy, 2 - white/uciekajacy	

var zbici = createArray(100,100);
var ap;		
var aii;
var ax;
var ay;
var atarx;
var atary;      //animation vars

var 

var margin =0;

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
var movesB=0;
var movesW=0;

var field= createArray(100, 100);   //1 - black, 2 - white, 3 - king, 4 - obstacle, 
									//5 - throne