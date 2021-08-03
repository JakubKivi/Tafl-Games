function remove(t, c, d, p){
    var o;
    p==1?o=2:o=1;

    //simple killing figures
    if(weaponlessKing=='disable'){  
                    if(t[c+1][d]==o && t[c+2][d]==p){
                        zbici[c+1][d]=t[c+1][d];
                        t[c+1][d]=0;
                    }
        if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==p){
                        zbici[c-1][d]=t[c-1][d];
                        t[c-1][d]=0;
                    }
                    if(t[c][d+1]==o && t[c][d+2]==p){
                        zbici[c][d+1]=t[c][d+1];
                        t[c][d+1]=0;
                    }
        if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==p){
                        zbici[c][d-1]=t[c][d-1];
                        t[c][d-1]=0;
                    }
    }else if(t[c][d]!=3){       //jeśli król nie moze bic to reszta moze oczywiscie 
                    if(t[c+1][d]==o && t[c+2][d]==p){
                        zbici[c+1][d]=t[c+1][d];
                        t[c+1][d]=0;
                    }
        if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==p){
                        zbici[c-1][d]=t[c-1][d];
                        t[c-1][d]=0;
                    }
                    if(t[c][d+1]==o && t[c][d+2]==p){
                        zbici[c][d+1]=t[c][d+1];
                        t[c][d+1]=0;
                    }
        if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==p){
                        zbici[c][d-1]=t[c][d-1];
                        t[c][d-1]=0;
                    }

    }
    if(throneIsKilling=='both'){
                    if(t[c+1][d]==o && t[c+2][d]==5 ){
                        zbici[c+1][d]=t[c+1][d];
                        t[c+1][d]=0;
                    }
    if(c-2>0)       if(t[c-1][d]==o && t[c-2][d]==5){
                        zbici[c-1][d]=t[c-1][d];
                        t[c-1][d]=0;
                    }
                    if(t[c][d+1]==o && t[c][d+2]==5){
                        zbici[c][d+1]=t[c][d+1];
                        t[c][d+1]=0;
                    }
    if(d-2>0)       if(t[c][d-1]==o && t[c][d-2]==5){
                        zbici[c][d-1]=t[c][d-1];
                        t[c][d-1]=0;
                    }
    }
    if(winCondition=='corner' && (t[c][d]!=3 || weaponlessKing=='disable')){
                if(t[c+1][d]==o && t[c+2][d]==4){
                    zbici[c+1][d]=t[c+1][d];
                    t[c+1][d]=0;
                }
    if(c-2>0)   if(t[c-1][d]==o && t[c-2][d]==4){
                    zbici[c-1][d]=t[c-1][d];
                    t[c-1][d]=0;
                }
                if(t[c][d+1]==o && t[c][d+2]==4){
                    zbici[c][d+1]=t[c][d+1];
                    t[c][d+1]=0;
                }
    if(d-2>0)   if(t[c][d-1]==o && t[c][d-2]==4){
                    zbici[c][d-1]=t[c][d-1];
                    t[c][d-1]=0;
                }
    }
    if(weaponlessKing=='disable'&&p==2){
    
                     if(t[c+1][d]==o && t[c+2][d]==3){
                        zbici[c+1][d]=t[c+1][d];
                        t[c+1][d]=0;
                    }
        if(c-2>0)    if(t[c-1][d]==o && t[c-2][d]==3){
                        zbici[c-1][d]=t[c-1][d];
                        t[c-1][d]=0;
                    }
                     if(t[c][d+1]==o && t[c][d+2]==3){
                        zbici[c][d+1]=t[c][d+1];
                        t[c][d+1]=0;
                    }
        if(d-2>0)    if(t[c][d-1]==o && t[c][d-2]==3){
                        zbici[c][d-1]=t[c][d-1];
                        t[c][d-1]=0;
                    } //to jest że się zabija o króla
    
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
