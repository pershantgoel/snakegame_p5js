function Snake(){  //it is a class or constructor function (class--> thats why name in capital)
                    //this function is working like a contructor of a class
this.x=0;
this.y=0;
this.xspeed=1;
this.yspeed=0;
this.total=0;   //length of snake(saanp) , initially zero bcoz bydefault it contains its initial position
this.tail=[];

this.eat=(pos)=>{
    var d=dist(this.x , this.y , pos.x ,pos.y);  //pos.x&y is position of food n this.x&y is of snake(saanp)
    if(d<1){
        this.total++;
        return true;
    }
    else{ return false;}
}

this.dir=(x,y)=>{
    this.xspeed=x;
    this.yspeed=y;
}

this.update= ()=>{
    for(let i=0 ; i<this.tail.length-1 ; i++){  //in this loop the tail of the snake will move with snake
        this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x , this.y);

// for (let i=0; i<this.total-1 ;i++){    //this loop will add an element(snake body part at the end)
//     this.tail[i] = this.tail[i+1]; 
// }
// this.tail[this.total-1] = createVector(this.x , this.y);    //????????????what is this doing
this.x += (this.xspeed*scl);
this.y += (this.yspeed*scl);

this.x=constrain(this.x, 0, width-scl);    //constrain is a predefine fn used to constrain(limit) our coordinates
this.y=constrain(this.y, 0, height-scl);   // it is taking height n width automatically(can be tested on console)
}

this.show=()=>{
fill(255);  //makes rect white
for(let i=0; i<this.total; i++){
    rect(this.tail[i].x, this.tail[i].y, scl, scl);
}

rect(this.x, this.y, scl,scl);   //rect of 10x10 size and this.x&y showing coordinates of x&y //snake(saanp)
}


}