function animate(x,y,tx,ty){
	if(x!=0){
		if(tx==x){
			if(ty>y){
				if((y*fieldSize+aii)<=ty*fieldSize){
					console.log("a");
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
			}
				
		}else{
			var i=x;
			while(i<=tx){

			}
		}
	}
}