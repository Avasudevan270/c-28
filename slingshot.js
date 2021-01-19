class Slingshot{
constructor(bodyA,pointB){
var options = {
    bodyA:bodyA, 
    pointB:pointB,
    stiffness:0.1,
    length: 20,
}
this.slingshot= Matter.Constraint.create(options)
World.add(world,this.slingshot)
}
fly(){
    this.slingshot.bodyA = null
}
display(){
    if (this.slingshot.bodyA){
        
    
var pointA = this.slingshot.bodyA.position;
var pointB = this.slingshot.pointB;
strokeWeight(3)
line (pointA.x,pointA.y, pointB.x, pointB.y)
    }

}



}