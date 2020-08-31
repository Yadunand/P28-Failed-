class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Box.scale=10;
    this.image = loadImage("sprites/wood1.png");
  }

};
