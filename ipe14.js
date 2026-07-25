// Write node js script to handle events as asked below.
// 1) Check the radius is negative or not. If negative then display message “Radius” must
// be positive” else calculate the perimeter of circle.
// 2) Check side is negative or not. If negative then display message “Side must be
// positive” else calculate the perimeter of square.

var event=require("events")
var e=new event()

e.on("negative_radius",()=>{
    console.log("Radius must be positive.")
})
e.on("negative_side",()=>{
    console.log("Side must be positive.")
})
e.on("findval",(r,s)=>{
    if (r<0){
        e.emit("negative_radius")
    }
    else{
        var rad_peri=2*3.14*r
        console.log("Perimeter of circle: ",rad_peri)
    }
    if (s<0){
        e.emit("negative_side")
    }
    else{
        var circle_peri=4*s
        console.log("Perimeter of square: ",circle_peri)
    }
})
e.emit("findval",10,5)