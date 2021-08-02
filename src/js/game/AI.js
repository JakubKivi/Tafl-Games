class ruch {
	constructor(x, y, tx, ty, value) {
    	this.x = x;
    	this.y= y;
    	this.tx = tx;
    	this.ty= ty;
    	this.value=value;
  	}
}

function AImove(t, p, depth, alpha, beta){
	var nfield= createArray(100, 100);
	clearFigures(nfield);

 	for(var iii=0; iii<=size; iii++){
        for(var jjj=0; jjj<=size; jjj++){
        	nfield[iii][jjj]=t[iii][jjj];
        }
    }
    if(p==1)var bestMove = new ruch(0,0,0,0,-Infinity);
    else var bestMove = new ruch(0,0,0,0,Infinity);
    var op;
    p==1? op=2: op=1;
	
	
	//przejrzyj wszystkie pola
	for(var i=1; i<=size; i++){
		for(var j=1; j<=size; j++){
			if(nfield[i][j]==p || (nfield[i][j]==3 && p==2)){  //jeśli jest twoje
				for(var k=1; k<=size; k++){ //przejrzyj wszystkie pola na które może się ruszyć
					if(canMove(nfield, i, j, k, j)){   //poziomo
						move(nfield, i, j, k, j, p);
						if(!((AIcount(nfield)>1000&&p==1)||(AIcount(nfield)<-1000&&p==2))){
							if(depth>1){
								var res=AImove(nfield, op, depth-1, alpha, beta);
								move(nfield, res.x, res.y, res.tx, res.ty, op);
							}
						}
						var x=AIcount(nfield);
						AIresume(nfield, t);

						

						if((p==1&&x>bestMove.value)||(p==2&&x<bestMove.value)){
							bestMove.x=i;
							bestMove.y=j;
							bestMove.tx=k;
							bestMove.ty=j;
							bestMove.value=x;
						}
						// if(p==2){
						//  	beta=min(beta, x);
						// 	if(beta<=alpha){
						// 		console.log("cut");
						// 	}
						// }else{
						// 	alpha=max(alpha, x);
						// 	if(beta<=alpha){
						// 		console.log("cut");
						// 	}
						// }
					}
					if(canMove(nfield, i, j, i, k)){   //pionowo
						move(nfield, i, j, i, k, p);
						if(!((AIcount(nfield)>1000&&p==1)||(AIcount(nfield)<-1000&&p==2))){
							if(depth>1){
								var res=AImove(nfield, op, depth-1, alpha, beta);
								move(nfield, res.x, res.y, res.tx, res.ty, op);
							}
						}
						var x=AIcount(nfield);
						AIresume(nfield, t);
						if((p==1 && x>bestMove.value) ||(p==2 && x<bestMove.value)){
							bestMove.x=i;
							bestMove.y=j;
							bestMove.tx=i;
							bestMove.ty=k;
							bestMove.value=x;
						}
						// if(p==2){
						//  	beta=min(beta, x);
						// 	if(beta<=alpha){
						// 		console.log("cut");
						// 	}
						// }else{
						// 	alpha=max(alpha, x);
						// 	if(beta<=alpha){
						// 		console.log("cut");
						// 	}
						// }
					}
				}
			}
		}
	}
 	return bestMove;
 	
}

function AIresume(t, tt){

    for(var ii=0; ii<=size; ii++){
        for(var jj=0; jj<=size; jj++){
        	t[ii][jj]=tt[ii][jj];
        }
    }
    win=0;

}

function AIcount(t){
	var value=0;
	for(var i=1; i<=size; i++){
    	for(var j=1; j<=size; j++){
    		if(t[i][j]==1)value+=10;  //czarne chcą dużo, białe chcą mało
    		if(t[i][j]==2)value-=10;  //przyda się-> 1 - black, 2 - white, 3 - king, 4 - obstacle

    	}
    }
    if(win==1){
    	value=10000;
    }
    if(win==2){
    	value=-10000;
    }
	return value;
}
