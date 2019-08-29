

function preload() {
  listOfJobs = loadStrings('test.txt');
}

function setup() {
  createCanvas(600, 600);
  frameRate(3);
  textFont("Helvetica");
}

function draw() {
  background(220);
  textSize(80);
  text("computational ", 25, 200);
  let profession = floor(random(listOfJobs.length));
  text(listOfJobs[profession], 25, 280);
}