function onModalOpen(){
    // onload
    start();
    update();
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
    if(window.location.hash == closedModalHashStateId){
        modal.style.display = "none";
        resButton.style.display = "block";
    }

    setTimeout(function(){
         update();  
    }, 1000 / s.FPS);
    s.ctx.clearRect(0, 0, s.w(), s.h());

    s.ctx.fillRect(0, 0, s.w(), s.h());
    if(win==1){
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