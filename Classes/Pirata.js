class Pirata{
    constructor(x,y,w,h){
        this.body = Matter.Bodies.rectangle(x,y,w,h)
        this.w = w
        this.h = h
        this.animation = pirataAndando
        this.speed = 0.05
       // this.image = loadImage("assets/boat.png")
        Matter.World.add(world,this.body)

 }
    display(){
        var p = this.body.position
        var angle = this.body.angle
        var index = floor(this.speed%this.animation.length)
        push()
        translate (p.x,p.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.animation[index], 0, 0,this.w,this.h)
        pop()
}

animate(){
    this.speed += 0.05
}
}