function click(e){
    if(mainMenu==1){
        mainMenu=0;
    }else if(win!=0){
        clearFigures(field);
        movesB=0;
        movesW=0;
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
                    if(field[mouseCord.x][mouseCord.y]==player){
                        clicked.x=mouseCord.x;
                        clicked.y=mouseCord.y;
                    }else if(canMove(field,clicked.x, clicked.y, mouseCord.x, mouseCord.y)){
                        ap=field[clicked.x][clicked.y];
                        atarx=mouseCord.x;
                        atary=mouseCord.y;
                        ax=clicked.x;
                        ay=clicked.y;

                    	move(field,clicked.x, clicked.y, mouseCord.x, mouseCord.y, player);
                        if(AI != player)
                            if(surrounding(field, mouseCord.x, mouseCord.y))
                                win=1;
                    	sound.play();
                        player==1?movesB++:movesW++;
                    	clicked.x=0;
    					clicked.y=0;
                        player==1?player=2:player=1;    
                        if(!isLegalMove(player))player==1?win=1:win=2;  //check if there is legal response
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