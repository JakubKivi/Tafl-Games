function animate(x,y,tx,ty){
	if(x!=0){
		for(i=1; i<=size; i++){
        	for(j=1; j<=size; j++){
        		if(zbici[i][j]==1)s.ctx.drawImage(blackPawnClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(zbici[i][j]==2)s.ctx.drawImage(whitePawnClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
                else if(zbici[i][j]==3)s.ctx.drawImage(kingClicked, startCord.x+((i-1)*fieldSize), startCord.y+((j-1)*fieldSize), fieldSize, fieldSize);
        	}
        }

		if(tx==x){
			if(ty>y){
				if((y*fieldSize+aii)<=ty*fieldSize){
					if(ap==1)s.ctx.drawImage(blackPawn, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)+aii, fieldSize, fieldSize);
		            else if(ap==2)s.ctx.drawImage(whitePawn, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)+aii, fieldSize, fieldSize);
		            else if(ap==3)s.ctx.drawImage(king, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)+aii, fieldSize, fieldSize);
				}else{
					aii=0;
					ax=0;
					ay=0;
					atarx=0;
					atary=0;
				}
			}else{
				if(ty*fieldSize<=y*fieldSize-aii){
					if(ap==1)s.ctx.drawImage(blackPawn, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)-aii, fieldSize, fieldSize);
		            else if(ap==2)s.ctx.drawImage(whitePawn, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)-aii, fieldSize, fieldSize);
		            else if(ap==3)s.ctx.drawImage(king, startCord.x+((x-1)*fieldSize), startCord.y+((y-1)*fieldSize)-aii, fieldSize, fieldSize);
				}else{
					aii=0;
					ax=0;
					ay=0;
					atarx=0;
					atary=0;
				}
			}
				
		}else{
			if(tx>x){
				if((x*fieldSize+aii)<=tx*fieldSize){
					if(ap==1)s.ctx.drawImage(blackPawn, startCord.x+((x-1)*fieldSize)+aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
		            else if(ap==2)s.ctx.drawImage(whitePawn, startCord.x+((x-1)*fieldSize)+aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
		            else if(ap==3)s.ctx.drawImage(king, startCord.x+((x-1)*fieldSize)+aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
				}else{
					aii=0;
					ax=0;
					ay=0;
					atarx=0;
					atary=0;
				}
			}else{
				if(tx*fieldSize<=x*fieldSize-aii){
					if(ap==1)s.ctx.drawImage(blackPawn, startCord.x+((x-1)*fieldSize)-aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
		            else if(ap==2)s.ctx.drawImage(whitePawn, startCord.x+((x-1)*fieldSize)-aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
		            else if(ap==3)s.ctx.drawImage(king, startCord.x+((x-1)*fieldSize)-aii, startCord.y+((y-1)*fieldSize), fieldSize, fieldSize);
				}else{
					aii=0;
					ax=0;
					ay=0;
					atarx=0;
					atary=0;
				}
			}
		}
	}else{
		clearFigures(zbici);
	}
}

function aiiIncrease(){
	
	aii<15?aii=1+Math.pow(aii, 1.1):aii=aii+15;

}