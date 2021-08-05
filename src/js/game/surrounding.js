

function surrounding(t){
	
	for(var i=1; i<size; i++){
		for(var j=1; j<size; j++){
			isFree[i][j]=0;
		}
	}
	
	for(var i=1; i<size; i++){
		if(t[i][1]!=1)isFree[i][1]=1;
		if(t[1][i]!=1)isFree[1][i]=1;
		if(t[i][size]!=1)isFree[i][size]=1;
		if(t[size][i]!=1)isFree[size][i]=1;
	}

	for(var k=1; k<size; k++){
		for(var i=1; i<=size; i++){
			for(var j=1; j<=size; j++){
				if(isFree[i][j]){
					if(t[i+1][j]!=1)isFree[i+1][j]=1;
					if(t[i-1][j]!=1)isFree[i-1][j]=1;
					if(t[i][j+1]!=1)isFree[i][j+1]=1;
					if(t[i][j-1]!=1)isFree[i][j-1]=1;
				}
			}
		}
	}

	for(var i=1; i<=size; i++){
		for(var j=1; j<=size; j++){
			if(isFree[i][j]==1 && (t[i][j]==2 || t[i][j]==3))return 0;
		}
	}

	return 1;
}