function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
}

function draw() {

  background(0);

  fill(255);
  textSize(30);
  text("Clock", 160, 400);


  translate(200, 200)
  rotate(-90)

  var hr = hour()
  var mn = minute()
  var sc = second()


  //Seconds
  strokeWeight(7);
  noFill()
  stroke(255, 0, 0);
  var scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle)

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  //Minutes
  stroke(0, 255, 0);
  var mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  line(0, 0, 75, 0);
  pop();

  //Hours
  stroke(0, 0, 255);
  var hrAngle = map(hr % 12, 0, 12, -0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  line(0, 0, 50, 0);
  pop();




  stroke("Black");
  point(0, 0);

}