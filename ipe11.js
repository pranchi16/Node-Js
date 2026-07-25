// Write a Node.js program using the events module to simulate a sequence of events:
// 1. When a "connection" event occurs, print "Connection successfully" and trigger a
// "data-received" event.
// 2. When the "data-received" event occurs, print "Data received successfully".
// 3. Finally, print "Thanks" at the end of execution.

var event=require("events")
var e=new event()

e.on("connection",function(){
    console.log("Connection successful.")
    e.emit("data_received")
})

e.on("data_received",function(){
    console.log('data received successfully.')
})

e.emit("connection")
console.log("thanks")
