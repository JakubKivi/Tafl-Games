function escaping(c, d){
    if(winCondition=="edge" && (c==size||d==size||c==1||d==1))win=2;
    else if(winCondition=="corner" && (c==1&&d==1 || c==1&&d==size||
                                  c==size&&d==1 || c==size&&d==size))win=2;
    else if(winCondition=="cornerB"){
        if(c<3     && d<3   ||   c<3      &&  d>(size-2)       ||
        c>(size-2) && d<3   ||   c>size-2 &&  d>(size-2))    win=2;

    }
}

function move(t, a, b, c, d, e){
    if(t[a][b]==3)escaping(c, d);
    var buf=t[a][b];
    if(buf==3 && a==parseInt(size/2)+1 && b==parseInt(size/2)+1)t[a][b]=5;  //jesli krol schodzi ztronu
    else t[a][b]=0;
    t[c][d]=buf;
    if(e==1 && (t[c+1][d]==3 || t[c-1][d]==3 ||
                t[c][d+1]==3 || t[c][d-1]==3))
                removeKing(t, c, d);
    remove(t, c, d, e);
    mem='pamietam!';
}

function canMove(t,x,y,tx,ty){
    if(x==tx&&y==ty)return false;
    if(winCondition=='corner'){
        if(t[x][y]!=3){
            if(tx==size && ty==size)return false;
            if(tx==1 && ty==size)return false;
            if(tx==size && ty==1)return false;
            if(tx==1 && ty==1)return false;
        }
    }
    if (winCondition=='cornerB'){
        if(((tx<3 && ty<3) || (tx<3 && ty>size-2)  || (ty<3 && tx>size-2)  || (tx>size-2 && ty>size-2)) && t[x][y]!=3){
            return 0;
            console.log("dupa");
        }
    }

    if(gameName=='Ard Ri'){
        if(Math.abs(x-tx)>1 || Math.abs(y-ty)>1){
            return false;
        }
    }

    if(x!=tx&&y!=ty)return false;
    if(t[x][y]!=3 && (t[tx][ty]==5||t[x][y]==4))return false;

    if(x==tx){
        if(ty>y){
            for(var i=y+1; i<=ty; i++){
                if(t[x][i]==1 || t[x][i]==2 || t[x][i]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[x][i]==5)return false;
            }
        }else if(ty<y){
            for(var i=y-1; i>=ty; i--){
                if(t[x][i]==1 || t[x][i]==2 || t[x][i]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[x][i]==5)return false;
            }
        }
    }else if(y==ty){
        if(tx>x){
            for(var i=x+1; i<=tx; i++){
                if(t[i][y]==1 || t[i][y]==2 || t[i][y]==3)return false;
                // if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }else if(tx<x){
            for(var i=x-1; i>=tx; i--){
                if(t[i][y]==1 || t[i][y]==2 || t[i][y]==3)return false;
                // if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }
    }
    return true;
}

function noLegalMove(t, a){
    for(var i=1; i<=size; i++){
        for(var j=1; j<=size; j++){
            if(t[i][j]==a || (t[i][j]==3 && a==2)){  //jeśli jest twoje
                for(var k=1; k<=size; k++){ //przejrzyj wszystkie pola na które może się ruszyć
                    if(canMove(t, i, j, k, j)){   //poziomo
                        return 0;
                    }
                    if(canMove(t, i, j, i, k)){
                        return 0;
                    }
                }
            }
        }
    }
    return 1;
}


function updateAvailableMoves(x,y){
    if(x==0 && y==0){
        for (var i = 1; i <=size; i++) {
            for (var j = 1; j <=size; j++) {
                availableMoves[i][j]=0;
            }
        }
    }else{
        for (var i = 1; i <=size ; i++) {
            if(canMove(field, x,y,x,i))availableMoves[x][i]=1;
            if(canMove(field, x,y,i,y))availableMoves[i][y]=1;
        }
    }
}

