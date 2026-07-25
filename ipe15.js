// Write node js script to handle event to write data in file, append data in file and then read
// the file and display data in console.

var event=require("events")
var e=new event()
var fs=require("fs")

e.on("write",function(){
    fs.writeFile("b.txt","Hello",function(err){
        if (err) throw err;
        console.log("Data written");
        e.emit("append");
    });
});

e.on("append",function(){
    fs.appendFile("b.txt"," Good Morning!",function(err){
        if (err) throw err;
        console.log("Data appended.");
        e.emit("read");
    });
});

e.on("read",function(){
    data=fs.readFile("b.txt","utf-8",function(err,data){
        if (err) throw err;
        console.log("Data in the file:",data);
    });
});

e.emit("write")