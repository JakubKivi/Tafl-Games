function move(t, a, b, c, d, e){
    if(t[a][b]==3)escaping(c, d);
    var buf=t[a][b];
    if(buf==3 && a==parseInt(size/2)+1 && b==parseInt(size/2)+1)t[a][b]=5;
    else t[a][b]=0;
    t[c][d]=buf;
    if(c-1>0)if(e==1 &&(t[c+1][d]==3 || t[c-1][d]==3 ||
                    t[c][d+1]==3 || t[c][d-1]==3)
    )removeKing(t, c, d);
    remove(t, c, d, e);
    
    
}

function canMove(t,x,y,tx,ty){
    if(winCondition=='corner'){
        if(t[x][y]!=3){
            if(tx==size && ty==size)return false;
            if(tx==1 && ty==size)return false;
            if(tx==size && ty==1)return false;
            if(tx==1 && ty==1)return false;
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
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }else if(tx<x){
            for(var i=x-1; i>=tx; i--){
                if(t[i][y]==1 || t[i][y]==2 || t[i][y]==3)return false;
                if(t[x][y]!=3 && t[x][i]==4)return false;
                if(moveThroughtThrone=='disabled' && t[i][y]==5)return false;
            }
        }
    }
    return true;
}