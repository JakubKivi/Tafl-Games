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

 	for(i=0; i<=size; i++){
        for(j=0; j<=size; j++){
        	nfield[i][j]=t[i][j];
        }
    }
    if(p==1)var bestMove = new ruch(0,0,0,0,-Infinity);
    else var bestMove = new ruch(0,0,0,0,Infinity);
	
	
	//przejrzyj wszystkie pola
	for(var i=1; i<=size; i++){
		for(var j=1; j<=size; j++){
			if(t[i][j]==p || (t[i][j]==3 && p==2)){  //jeśli jest twoje
				for(k=1; k<=size; k++){ //przejrzyj wszystkie pola na które może się ruszyć
					if(k!=i && canMove(nfield, i, j, k, j)){   //jeśli może się ruszyć poziomo
						move(nfield, i, j, k, j);
						var x=AIcount(nfield, t);
						if(p==1){
							if(x>bestMove.value){
								console.log("lul");
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=k;
								bestMove.ty=j;
								bestMove.value=x;
							}
						}else{
							if(x<bestMove.value){
								console.log("lel");
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=k;
								bestMove.ty=j;
								bestMove.value=x;
							}
						}
					}
					if(k!=j && canMove(nfield, i, j, i, k)){   //jeśli może się ruszyć poziomo
						move(nfield, i, j, i, k);
						var x=AIcount(nfield, t);
						if(p==1){
							if(x>bestMove.value){
								console.log("lel");
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=i;
								bestMove.ty=k;
								bestMove.value=x;
							}
						}else{
							if(x<bestMove.value){
								console.log("lel");
								bestMove.x=i;
								bestMove.y=j;
								bestMove.tx=i;
								bestMove.ty=k;
								bestMove.value=x;
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
	for(i=1; i<=size; i++){
    	for(j=1; j<=size; j++){
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
