function preload() {
}

function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.position(500, 150)
  video = createCapture(VIDEO);
  video.hide()
}

function draw() {
  image(video, 110, 110, 680, 480);
  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(110, 90, 690, 20);
  rect(110, 590, 690, 20);
  rect(90, 90, 20, 520);
  rect(790, 90, 20, 520);

  fill(255, 0, 0)
  stroke(255, 0, 0)
  circle(100, 100, 100, 100)

  fill(255, 0, 0)
  stroke(255, 0, 0)
  circle(100, 600, 100, 100)

  fill(255, 0, 0)
  stroke(255, 0, 0)
  circle(800, 100, 100, 100)

  fill(255, 0, 0)
  stroke(255, 0, 0)
  circle(800, 600, 100, 100)
}

function take_snapshot(){
    save('Santhosh.png')
}