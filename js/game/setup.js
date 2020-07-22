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