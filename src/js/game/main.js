function onModalOpen(){
    // onload
    start();
    update();
}

function start(){

    if(gameName=='Brandubh'){
        size=7;
        winCondition='corner';
        weaponlessKing='enable'; 
        killingKingCondition='two'; 

    }else if(gameName=='Tablut'){
        size=9;
        winCondition='edge';
        killingKingCondition='two'; 
        weaponlessKing='enable';

    }else if(gameName=='Ard Ri'){
        size=7;
        winCondition='corner';
        killingKingCondition='two'; 
        weaponlessKing='disable';
        
    }else if(gameName=='Tawlbwrdd'){
        size=11;
        winCondition='corner';
        killingKingCondition='two'; 
        weaponlessKing='disable';

    }else if(gameName=='Hnefatafl'){
        size=11;
        winCondition='corner';
        killingKingCondition='four'; 
        weaponlessKing='disable';
    }
    else if(gameName=='Alea Evangelii'){
        size=19;
        winCondition='cornerB';
        killingKingCondition='two'; 
        weaponlessKing='disable';
    }else if(gameName=='Custom'){
        switch(document.getElementById('Map-size').value){

            case "7x7 (Brandubh)":
                size=7;
                gameName="Brandubh";
            break;
            case "7x7 (Ard Ri)":
                size=7;
                gameName="Ard Ri";
            break;
            case "9x9 (Tablut)":
                size=9;
                gameName="Tablut";
            break;
            case "11x11 (Hnefatafl)":
                size=11;
                gameName="Hnefatafl";
            break;
            case "11x11 (Tawlbwrdd)":
                size=11;
                gameName="Tawlbwrdd";
            break;
            case "19x19 (Alea Evangelii)":
                size=11;
                gameName="Alea Evangelii";
            break;
        }
        switch(document.getElementById('Escape').value){

            case "Krawędź":
                winCondition='corner';
            break;
            case "Narożnik":
                winCondition='edge';
            break;
        }
        switch(document.getElementById('King-surroundings').value){

            case "2":
                killingKingCondition='four'; 
            break;
            case "4":
                killingKingCondition='two'; 
            break;
        }
        switch(document.getElementById('King-weapon').value){
            case "Nieuzbrojony":
                weaponlessKing='enable';
            break;
            case "Zabójczy":
                weaponlessKing='disable';
            break;
        }

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

    console.log(field[parseInt(size/2)+1][parseInt(size/2)+1]); 
}

function update(){
    if(window.location.hash == closedModalHashStateId){
        modal.style.display = "none";
    }
    setTimeout(function(){
         update();  
    }, 1000 / s.FPS);
    s.ctx.clearRect(0, 0, s.w(), s.h());
    s.ctx.fillStyle = '#000000';
    s.ctx.fillRect(0, 0, s.w(), s.h());
    if(win==1){
        renderMap(size);
        renderFig();
        s.ctx.save();
        s.ctx.globalAlpha=0.85;
        s.ctx.drawImage(blackWin, 0, 0, s.w(), s.h());
        console.log("Wygral czorny w ", movesB, " ruchach");
        s.ctx.restore();
    }else if(win==2){
        renderMap(size);
        renderFig();
        s.ctx.save();
        s.ctx.globalAlpha=0.85;
        s.ctx.drawImage(whiteWin, 0, 0, s.w(), s.h());
        console.log("Wygral bioly w ", movesW, " ruchach");
        s.ctx.restore();
    }else {
        renderMap(size);
        if(!isMobile)if(typeof mouseCord!= 'undefined')drawHovered();
        renderFig();
		if(player==AI){
            var a = new ruch();
            a=AImove(field, AI, 3);
            if(a.x!=0){
                move(field, a.x, a.y, a.tx, a.ty, AI);
                console.log("ruszyłem z: "+a.x+", "+a.y+" do: "+a.tx+", "+a.ty+" z wartością: "+a.value);
                player==1?player=2:player=1;
            }else console.log('ai ma totalny problem');
        }
    }
    if(!isMobile)s.ctx.drawImage(cursor, mouseX, mouseY, fieldSize*0.75, fieldSize*0.75);
}