function repetition(x,y,tx,ty){
	var m = new ruch(x,y,tx,ty,0);
	if(m.x==rep[0].x && m.y==rep[0].y && m.tx==rep[0].tx && m.ty==rep[0].ty &&
	 				rep[2].tx==rep[0].x && rep[2].ty==rep[0].y &&
	 				rep[2].x==rep[0].tx && rep[2].y==rep[0].ty &&
	 				rep[3].tx==rep[1].x && rep[3].ty==rep[1].y &&
	 				rep[3].tx==rep[1].x && rep[3].y==rep[1].ty
	 												) return 1;

	rep[0]=rep[1];
	rep[1]=rep[2];
	rep[2]=rep[3];
	rep[3]=m;
	return 0;
}