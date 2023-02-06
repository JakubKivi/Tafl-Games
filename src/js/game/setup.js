function renderMap(size){
    renderPlayer();
    if(s.w>s.h){
        for(i=0; i<size; i++){
            for(j=0; j<size; j++){
                if(winCondition=='corner' && i==0&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==size-1&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==0&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==size-1&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='cornerB' &&(
                    (i<2     && j<2   ||   i<2      &&  j>(size-3)       ||
                    i>(size-3) && j<2   ||   i>size-3 &&  j>(size-3)))) 
                        s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                
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

    }else{
        for(i=0; i<size; i++){
            for(j=0; j<size; j++){
                if(winCondition=='corner' && i==0&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==size-1&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==0&&j==size-1)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='corner' && i==size-1&&j==0)s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                else if(winCondition=='cornerB' &&(
                    (i<2     && j<2   ||   i<2      &&  j>(size-3)       ||
                    i>(size-3) && j<2   ||   i>size-3 &&  j>(size-3)))) {
                        s.ctx.drawImage(specialField, startCord.x+(i*fieldSize), startCord.y+(j*fieldSize), fieldSize, fieldSize);
                    }
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
   }else if(gameName=='Tablut'){
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
    }else if(gameName=='Ard Ri'){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if(j>2 && i==1){
                    field[i][j]=1;
                }else if(i==2 && j==4){
                    field[i][j]=1;
                }else if(i>2 && j==1){
                    field[i][j]=1;
                }else if(i==4 && j==2){
                    field[i][j]=1;
                }else if(i>2 && j>2){
                    field[i][j]=2;
                }
            }
        }
   }else if(gameName=='Tawlbwrdd'){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if((i==6&&j>3)||(j==6&&i>3))field[i][j]=2;
                else if(i==5&&j==5)field[i][j]=2;
                else if(i==6||j==6){
                    if(i==1||i==3||j==1||j==3)field[i][j]=1;
                }else if(i==5||j==5){
                    if(j<3||i<3)field[i][j]=1;
                }
            }
        }
   }else if(gameName=='Hnefatafl'){
        
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if((i==6&&j>3)||(j==6&&i>3))field[i][j]=2;
                else if(i==5&&j==5)field[i][j]=2;
                else if(i==6||j==6){
                    if(i<4||j<4)field[i][j]=1;
                }else if(i==5||j==5){
                    if(j==1||i==1)field[i][j]=1;
                }else if(i==4||j==4){
                    if(j==1||i==1)field[i][j]=1;
                }
            }
        }
   }
   else if(gameName=='Alea Evangelii'){
        for(i=1; i<=parseInt(size/2)+1; i++){
            for(j=1; j<=parseInt(size/2)+1; j++){
                if(i==1||j==1){
                    if(i==3||j==3||i==6||j==6)field[i][j]=1;
                }else if((i==3||j==3)&&(i==6||j==6))field[i][j]=1;
                else if(i+j==12&&i>3&&j>3)field[i][j]=1;
                else if(i==10||j==10){
                    if(i==4||j==4)field[i][j]=1;
                    if(i>6&&j>6&&i!=8&&j!=8)field[i][j]=2;
                }else if((i==9&&j==5)||(i==5&&j==9))field[i][j]=2;
                else if((i==9&&j==8)||(i==8&&j==9))field[i][j]=2;
            }
        }
   }
   mirroring();
   field[parseInt(size/2)+1][parseInt(size/2)+1]=3;
   if(winCondition=='corner'){
        field[1][1]=4;
        field[1][size]=4;
        field[size][1]=4;
        field[size][size]=4;
    }
    if(winCondition=='cornerB'){
        for (var i = 0; i <= size; i++) {
            for (var j = 0; j <= size; j++) {
                if(i<3     && j<3   ||   i<3      &&  j>(size-2)       ||
                i>(size-2) && j<3   ||   i>size-2 &&  j>(size-2)) field[i][j]=4;
            }
        }
    }
}

function renderFig(){
    for(i=1; i<=size; i++){
        for(j=1; j<=size; j++){

            if(!(i==atarx&&j==atary)||(atarx==0)){
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

            //!!!!!!!!!!!!!!!!! KOLOROWANIE ISFREE POL !!!!!!!!!!!!!!\\
            // if(isFree[i][j]==1){
            //     s.ctx.save();
            //     s.ctx.globalAlpha=0.20;
            //     s.ctx.fillStyle="#0f0";
            //     s.ctx.fillRect(startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
            //     s.ctx.restore();
            // }
        }
    }
}

function renderPlayer(){
    var orientation;
    (s.w()<s.h())?orientation='horizontal':orientation='vertical';

    var AIPlayer;
    if(AI==0) AIPlayer='none';
    else if (AI==1)AIPlayer='left';
    else AIPlayer='right';

    var activePlayer;
    if(player==1)activePlayer='left';
    else activePlayer='right';

    var activeImageLeft;
    var activeImageRight;

    if(activePlayer=='left'){
        if(AIPlayer=='left'){
            activeImageLeft = AIIcon;
            activeImageRight = playerIconD;
        }else if(AIPlayer=='right'){
            activeImageLeft = playerIcon;
            activeImageRight = AIIconD;
        }else{
            activeImageLeft = playerIcon;
            activeImageRight = playerIconD;
        }
    }else{
        if(AIPlayer=='left'){
            activeImageLeft = AIIconD;
            activeImageRight = playerIcon;
        }else if(AIPlayer=='right'){
            activeImageLeft = playerIconD;
            activeImageRight = AIIcon;
        }else{
            activeImageLeft = playerIconD;
            activeImageRight = playerIcon;
        }
    }


        var size;
        if(orientation=='vertical')size=startCord.x;
        else size= startCord.y;

        if(size>110)size=110;

        s.ctx.drawImage(activeImageLeft,0,0,size,size);
        s.ctx.drawImage(activeImageRight,s.w()-size,s.h()-size,size,size);
    
}