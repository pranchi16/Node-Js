// Create a Node.js program using the events module to demonstrate:
// 1. Registering multiple event listeners for different events (myEvent1, myEvent2).
// 2. Removing a specific event listener (removeListener) for myEvent2.
// 3. Removing all listeners associated with myEvent1 (removeAllListeners).
// 4. Triggering events and observing which listeners execute.

var event=require("events")
var e=new event()

var fun1=(msg)=>{
    console.log("Message from fun1:",msg)
}

var fun2=(msg)=>{
    console.log("Message from fun2:",msg)
}

e.on('myevent1',fun1)
e.on('myevent1',fun2)
e.on('myevent2',fun1)
e.on('myevent2',fun2)

e.removeListener('myevent2',fun2)

e.removeAllListeners('myevent1')

e.emit("myevent2","L J University")
e.emit("myevent1","LJU")