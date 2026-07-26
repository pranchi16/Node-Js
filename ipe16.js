// Write a node.js script using Event handling to perform following tasks in sequence:
// 1) Create a folder named abc.
// 2) Create a file in it named xyz.txt and enter data into it.
// 3) Append data to that file xyz.txt and print message “Data Appended Successfully”.
// 4) Read the content of the file xyz.txt and print the content on console.
// 5) Copy content from xyz.txt to pqr.txt file.
// 6) Delete the file xyz.txt. And Lastly print the message “All operations performed
// successfully” on console.
// Do all the operations of File using synchronous file system module.

var fs=require("fs")
var event=require("events")
var e=new event()

e.on("create_folder",function(){
    if (!fs.existsSync("abc")){
        fs.mkdirSync("abc")
        console.log("Folder created")
    }
    else{
        console.log("Folder already exists")
    }
    e.emit("create_file")
})

e.on("create_file",function(){
    fs.writeFileSync("abc/xyz.txt","This is first line.\n")
    console.log("File created.")
    e.emit("append_file")
})

e.on("append_file",function(){
    fs.appendFileSync("abc/xyz.txt","This is appended data.");
    console.log("Data appended");
    e.emit("read_file");
})

e.on("read_file",function(){
    data=fs.readFileSync("abc/xyz.txt","utf-8");
    console.log("File content: ",data);
    e.emit("copy_file");
})

e.on("copy_file",function(){
    fs.copyFileSync("abc/xyz.txt","abc/pqr.txt");
    console.log("Data cpoied.");
    e.emit("delete_file");
});

e.on("delete_file",function(){
    fs.unlinkSync("abc/xyz.txt");
    console.log("xyz.txt deleted.")
    console.log("All opertaions performed successfully.")
});
e.emit("create_folder")