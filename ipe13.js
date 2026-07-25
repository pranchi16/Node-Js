// Write node js script to create two listeners for a common event. Print number of events
// associated with an emitter. Remove one of the listeners and call remaining listener again.
// Also, print number of remaining listeners.

var event=require("events")
var e=new event()

var lis1=function listener1(){
    console.log("Listener1 Executed")
}
var lis2=function listener2(){
    console.log("Listener2 executed")
}

e.on("conn",lis1)
e.on("conn",lis2)

let count=e.listenerCount("conn")
console.log("Count1:",count)
e.emit("conn")

e.removeListener("conn",lis1)
count=e.listenerCount("conn")
console.log("Count again:",count)
e.emit("conn")

e.removeAllListeners("conn")
count=e.listenerCount("conn")
console.log("Count:",count)
e.emit("conn")