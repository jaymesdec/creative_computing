

function preload() {
  listOfJobs = loadStrings('test.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
  textFont("Helvetica");
}

function draw() {
  background(220);
  textSize(80);
  text("Computational ", 25, 200);
  let profession = floor(random(listOfJobs.length));
  text(listOfJobs[profession], 25, 280);
}
