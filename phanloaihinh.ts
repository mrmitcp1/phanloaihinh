class Shape {
    color;
    filled
    constructor(color,filled) {
        this.color=color;
        this.filled=filled
    }
}
class Circle{
    color ;
    filled;
    radius;
    constructor(color,filled,radius) {
        this.color=color;
        this.filled=filled;
        this.radius=radius
    }
    getArea () {
    return this.radius * this.radius * 3.14
}
    getPerimeter(){
        return this.radius*2*3.14
    }

}
class Rectangle {
    color;
    filled;
    width;
    length;
constructor(color,filled,width,length) {
    this.color=color;
    this.filled=filled;
    this.width=width;
    this.length=length
}
getArea(){
    return this.width*this.length
}
    getPerimeter(){
    return (this.length+this.width) *2
    }
}
class Square {
    color;
    filled;
    side;
    constructor(color,filled,side) {
        this.color=color
        this.filled=filled
        this.side=side
    }
}
let cirle =new Circle('red',false,4)
console.log(cirle.getArea())
console.log(cirle)
let rectanle = new Rectangle('blue',true,10,5)
console.log(rectanle)
console.log(rectanle.getPerimeter())
