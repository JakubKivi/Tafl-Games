class ruch {
	constructor(x, y, tx, ty, value) {
    	this.x = x;
    	this.y= y;
    	this.tx = tx;
    	this.ty= ty;
    	this.value=value;
  	}
}

function AImove(t, p, depth){
	var nfield= createArray(100, 100);
	clearFigures(nfield);

 	for(var iii=0; iii<=size; iii++){
        for(var jjj=0; jjj<=size; jjj++){
        	nfield[iii][jjj]=t[iii][jjj];
        }
    }
    if(p==1)var bestMove = new ruch(0,0,0,0,-Infinity);
    else var bestMove = new ruch(0,0,0,0,Infinity);
	
	
	//przejrzyj wszystkie pola
	for(var i=1; i<=size; i++){
		for(var j=1; j<=size; j++){
			if(t[i][j]==p || (t[i][j]==3 && p==2)){  //jeśli jest twoje
				for(var k=1; k<=size; k++){ //przejrzyj wszystkie pola na które może się ruszyć
					if(k!=i && t[k][j]==0 && canMove(nfield, i, j, k, j)){   //poziomo
						move(nfield, i, j, k, j, p);
						if(depth>1){
							var pp;
							p==1?pp=2:pp=1;
							var aa = new ruch();
							aa=AImove(nfield, pp, depth-1);
				            if(aa.x!=0){
				                move(nfield, aa.x, aa.y, aa.tx, aa.ty);
				            }else console.log('ai ma totalny problem w głebi');
						}
						var x=AIcount(nfield, t);
						if(p==1){
							if(x>bestMove.value){
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=k;
								bestMove.ty=j;
								bestMove.value=x;
								
								//
							}
						}else{
							if(x<bestMove.value){
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=k;
								bestMove.ty=j;
								bestMove.value=x;
								console.log("my new best move "+ bestMove.value, bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
								console.log("response "+ aa.value, aa.x, aa.y, aa.tx, aa.ty);
								//console.log("my new best response "+ bestMove.value, bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
							}
						}
					}
					if(k!=j && t[i][k]==0 && canMove(nfield, i, j, i, k)){   //pionowo
						move(nfield, i, j, i, k, p);
						if(depth>1){
							var pp;
							p==1?pp=2:pp=1;
							var aa = new ruch();
							aa=AImove(nfield, pp, depth-1);
				            if(aa.x!=0){
				                move(nfield, aa.x, aa.y, aa.tx, aa.ty);
				            }else console.log('ai ma totalny problem głebi');
						}
						var x=AIcount(nfield, t);
						if(p==1){
							if(x>bestMove.value){
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=i;
								bestMove.ty=k;
								bestMove.value=x;
								
								
							}
						}else{
							if(x<bestMove.value){
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=i;
								bestMove.ty=k;
								bestMove.value=x;
								console.log("my new best move "+ bestMove.value, bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
								console.log("response "+ aa.value, aa.x, aa.y, aa.tx, aa.ty);
								//console.log("my new best response "+ bestMove.value, bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
							}
						}
						
					}
				}
			}
		}
	}
 	return bestMove;
}

function AIcount(t, tt){
	var value=0;
	for(var i=1; i<=size; i++){
    	for(var j=1; j<=size; j++){
    		if(t[i][j]==1)value+=10;  //czarne chcą dużo, białe chcą mało
    		if(t[i][j]==2)value-=10;  //przyda się-> 1 - black, 2 - white, 3 - king, 4 - obstacle

    	}
    }
    if(win==1){
    	value+=Infinity;
    }
    if(win==2){
    	value-=Infinity;
    }
    
    for(var ii=0; ii<=size; ii++){
        for(var jj=0; jj<=size; jj++){
        	t[ii][jj]=tt[ii][jj];
        }
    }
    win=0;

	return value;
}
