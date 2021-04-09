class Mango{
	constructor(x,y,r){
		
	this.image=loadImage("mango.png");
	var options={
        'isStatic':true,
		'restitution' :0,
		'friction':1
	}
    // assign options to the mangoes
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}
	
	display()
	{
			var mangopos=this.body.position;		
			push()
			translate(mangopos.x, mangopos.y);
			strokeWeight(4);
			image(this.image,0,0,this.r,this.r);
			pop()
	}

}