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



function drawHovered(){
    if(mouseX>startCord.x && mouseY>startCord.y && mouseX<(startCord.x+(size*fieldSize)) && mouseY<(startCord.y+(size*fieldSize))){
        if(winCondition=='corner' && mouseCord.x==1&&mouseCord.y==1)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==size&&mouseCord.y==size)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==1&&mouseCord.y==size)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if(winCondition=='corner' && mouseCord.x==size&&mouseCord.y==1)s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
        else if((winCondition=='cornerB') && (mouseCord.x<3     && mouseCord.y<3   ||   mouseCord.x<3      &&  mouseCord.y>(size-2)       ||
                                           mouseCord.x>(size-2) && mouseCord.y<3   ||   mouseCord.x>size-2 &&  mouseCord.y>(size-2)))s.ctx.drawImage(specialFieldHovered, startCord.x+((mouseCord.x-1)*fieldSize), startCord.y+((mouseCord.y-1)*fieldSize), fieldSize, fieldSize);
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
        //console.log(isFree[mouseCord.x][mouseCord.y]);
    }
    // console.log("x: " + mouseCord.x + " y: " +mouseCord.y);
}