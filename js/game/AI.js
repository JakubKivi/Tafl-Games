function AImove(t){
 	//INTELIGENT MOVES... almost xd
 	var bestBoard=0;
 	var bestMove={
 		x: 0,
 		y: 0,
 		tx: 0,
 		ty: 0
 	};

	var nfield= createArray(100, 100);
	clearFigures(nfield);

 	for(i=0; i<=size; i++){
        for(j=0; j<=size; j++){
        	nfield[i][j]=t[i][j];
        }
    }

 	for(a=1; a<=size; a++){
 		for(b=1; b<=size; b++){
 			for(c=1; c<=size; c++){
	 			if((nfield[a][b]==AI || (nfield[a][b]==AI+1 && AI==2)) && canMove(nfield,a,b,c,b) && a!=c){
	 				console.log('a');
					move(nfield,a,b,c,b);

				}
				if((nfield[a][b]==AI || (nfield[a][b]==AI+1 && AI==2)) && canMove(nfield,a,b,a,c) && b!=c){
					console.log('a');
					move(nfield,a,b,a,c);

				}
		 	}
 		}
 	}
 	if(bestMove.x!=0 && bestMove.y!=0 && bestMove.tx!=0 && bestMove.ty!=0){
 		move(field,bestMove.x, bestMove.y, bestMove.tx, bestMove.ty);
 		console.log("ruch z: " + bestMove.x + ", " + bestMove.y + " do: " + bestMove.tx + ", " + bestMove.ty);
 	}
 	else{
		//RANDOM MOVES//
		var AImoved=false;
		while(!AImoved){
				
			var a = randomInt(1, size+1);
			var b = randomInt(1, size+1);
			var c = randomInt(1, size+1);
			var d = randomInt(1, size+1);
			if((field[a][b]==AI || (field[a][b]==AI+1 && AI==2)) && canMove(field,a,b,c,d) && (a!=c || b!=d)){
				move(field,a,b,c,d);
				console.log('wale randoma');
				AImoved=true;
			}
	 	}	
 	}
}

function AIcount(t){
	var value=0;
	for(i=1; i<=size; i++){
    	for(j=1; j<=size; j++){
    		if(t[i][j]==1)value+=10;
    		if(t[i][j]==2)value-=10;
    	}
    }
	return value;
}