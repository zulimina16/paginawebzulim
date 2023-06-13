let moverX=10;
function setup() {
  createCanvas(400, 400);
  background(220);
  
}
function mousePressed(){
   moverX=10;                   
                       }
function draw() {
//background(220);
circle(moverX,mouseX,40);
circle(mouseY,moverX,40);
circle(20,moverX,40);
rect(moverX, 20, 55, 55);
rect(moverX, 60, 55, 55);
rect(moverX,moverX, 55, 55);
rect(mouseY,100, mouseX, 40);
rect(40,mouseY, 55, 55);

moverX+=5;

  
}