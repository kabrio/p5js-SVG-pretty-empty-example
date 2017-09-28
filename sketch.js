function setup() {
	// i like my canvas like my browser window 
	// SVG renderer (requires p5.svg.js)
	createCanvas(windowWidth, windowHeight, SVG);
	//some practical settings i like to use as default
	colorMode(HSB, 360, 100, 100, 1)
	ellipseMode(CENTER);
	rectMode(CENTER);
	angleMode(DEGREES);

	//put your setup code here
}

function draw() {
	//put draw code here

	//hello p5 world
	strokeWeight(width/3);
	point(width/2, height/2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}