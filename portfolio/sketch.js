function setup() { 
	var canvas = createCanvas(windowWidth,windowHeight); 
	background(249,214,201);
	canvas.parent("sketch");
}

/* draw ellipse on background */ 
function draw() {
	if(mouseIsPressed) {
		var size = random(10, 30);
		stroke(0,0,0,80);
		var cnt=0;
		while(cnt<3) {
			var a = random(-10,10);
			var b = random(-10,10);
			var x = random(0,255);
			var y = random(150,200);
			var z = random(150,200);
			fill(x,y,z)
			ellipse(mouseX+a, mouseY+b, size, size);
			cnt++;
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight); 
	background(249, 214, 201);
}