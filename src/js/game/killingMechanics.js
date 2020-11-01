function remove(t, c, d, p){
    var o;
    p==1?o=2:o=1;

    //simple killing figures
                if(t[c+1][d]==o && t[c+2][d]==p)t[c+1][d]=0;
    if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==p)t[c-1][d]=0;
                if(t[c][d+1]==o && t[c][d+2]==p)t[c][d+1]=0;
    if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==p)t[c][d-1]=0;

    if(throneIsKilling=='both'){
                    if(t[c+1][d]==o && t[c+2][d]==5 )t[c+1][d]=0;
    if(c-2>0)       if(t[c-1][d]==o && t[c-2][d]==5)t[c-1][d]=0;
                    if(t[c][d+1]==o && t[c][d+2]==5)t[c][d+1]=0;
    if(d-2>0)       if(t[c][d-1]==o && t[c][d-2]==5)t[c][d-1]=0;
    }
    if(winCondition=='corner'){
                if(t[c+1][d]==o && t[c+2][d]==4)t[c+1][d]=0;
    if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==4)t[c-1][d]=0;
                if(t[c][d+1]==o && t[c][d+2]==4)t[c][d+1]=0;
    if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==4)t[c][d-1]=0;
    }
    if(weaponlessKing=='disable'){
        if(o==1){
                         if(t[c+1][d]==o && t[c+2][d]==3)t[c+1][d]=0;
            if(c-2>0)    if(t[c-1][d]==o && t[c-2][d]==3)t[c-1][d]=0;
                         if(t[c][d+1]==o && t[c][d+2]==3)t[c][d+1]=0;
            if(d-2>0)    if(t[c][d-1]==o && t[c][d-2]==3)t[c][d-1]=0; //to jest że król ogólnie
        }
    }
}

function removeKing(t, c, d){
    if(killingKingCondition=='two'){
        if(t[parseInt(size/2)+1][parseInt(size/2)+1]!=3 && fourToKillOnThrone=='enable'){
            if(t[c+1][d]==3 && t[c+2][d]==1){
                if(c+1==parseInt(size/2)+1 && d==parseInt(size/2)+1){
                    if(t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
                }else win=1;
            }
            else if(t[c-1][d]==3 && t[c-2][d]==1){
                if(c-1==parseInt(size/2)+1 && d==parseInt(size/2)+1){
                    if(t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
                }else win=1;
            }
            else if(t[c][d+1]==3 && t[c][d+2]==1){
                if(c==parseInt(size/2)+1 && d+1==parseInt(size/2)+1){
                    if(t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
                }else win=1;
            }
            else if(t[c][d-1]==3 && t[c][d-2]==1){
                if(c==parseInt(size/2)+1 && d-1==parseInt(size/2)+1){
                    if(t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
                }else win=1;
            }
        }else{
            if(t[c+1][d]==3   && (t[c+2][d]==1 || c+2>size) &&
               t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
            else if(t[c-1][d]==3   && (t[c-2][d]==1 || c-2<1) &&
                    t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
            else if(t[c][d+1]==3   && (t[c][d+2]==1 || d+2>size) &&
                    t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
            else if(t[c][d-1]==3   && (t[c][d-2]==1 || d-2<1) &&
                    t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
        }
    }else if(killingKingCondition=='four'){
            if(t[c+1][d]==3   && (t[c+2][d]==1 || c+2>size) &&
               t[c+1][d+1]==1 && t[c+1][d-1]==1)win=1;
            else if(t[c-1][d]==3   && (t[c-2][d]==1 || c-2<1) &&
                    t[c-1][d+1]==1 && t[c-1][d-1]==1)win=1;
            else if(t[c][d+1]==3   && (t[c][d+2]==1 || d+2>size) &&
                    t[c+1][d+1]==1 && t[c-1][d+1]==1)win=1;
            else if(t[c][d-1]==3   && (t[c][d-2]==1 || d-2<1) &&
                    t[c+1][d-1]==1 && t[c-1][d-1]==1)win=1;
    }
}
function escaping(c, d){
    if(winCondition=="edge" && (c==size||d==size||c==1||d==1))win=2;
    if(winCondition=="corner" && (c==1&&d==1 || c==1&&d==size||
                                  c==size&&d==1 || c==size&&d==size))win=2;
}