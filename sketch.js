function setup() {
  createCanvas(850, 650);
}

function preload(){
  img=loadImage('https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
function draw() {
  background(0);
  circle(50,50,100);
  circle(790,580,100);
  circle(790,50,100);
  circle(50,580,100);
  fill(255,0,0,100);
  image(img,250,120,400,300);
  let s = 'Google chrome, the best browser on mobile!';
text(s, 200, 85, 700, 800); // Text wraps within text box
  textSize(28);
}