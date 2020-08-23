function click(e){
    if(mainMenu==1){
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
                    	move(field,clicked.x, clicked.y, mouseCord.x, mouseCord.y, player);
                    	sound.play();
                    	clicked.x=0;
    					clicked.y=0;
                        player==1?player=2:player=1;
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