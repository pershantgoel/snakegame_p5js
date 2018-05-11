var s;
var scl=20; //var which is size of a grid
var food;

function setup() {
    createCanvas(600,600);
    s= new Snake();  //making an object of Snake constructor fn
    frameRate(10);
    pickLocation();      
}

function pickLocation(){
    var cols = floor(width/scl);    //floor is for whole number
    var rows = floor(height/scl);
    food= createVector( floor(random(cols)) , floor(random(rows)) );     //createVector([x], [y], [z]) will create random x n y
    food.mult(scl); //contains predefine mult fn
}

function draw(){
    background(51); //makes background black
    s.update();
    s.show();
    fill(255,0,100);    //coloring the food
    rect(food.x, food.y, scl,scl);  // making food shape same block(rect) of snake  //scl is jst like a block in the grid 
    if(s.eat(food)){
        pickLocation();    //sets new location for food
    }
}

function keyPressed(){
    if(keyCode==UP_ARROW){  // keyCode is inbuilt var in p5
        s.dir(0 , -1);      // 0 along x axis and -1 is up along y axis
    } 
    else if (keyCode==DOWN_ARROW){
        s.dir(0,1);
    }
    else if (keyCode==RIGHT_ARROW){
        s.dir(1,0);
    }
    else if (keyCode==LEFT_ARROW){
        s.dir(-1,0);
    }
}

