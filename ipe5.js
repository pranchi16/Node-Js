// Write a node.js script to copy contents of one file to another file. Data should be fetched
// from Source.txt and insert to destination.txt. And read data from destination file in the
// end. Perform all these tasks asynchronously.

var fs = require("fs")
fs.writeFile("source.txt","Hello! I'm Pranchi",(err)=>{
    if (err) {throw err}
    console.log("Source file created")

    fs.readFile("source.txt","utf-8",(err,data)=>{
        if (err){ throw err}
        console.log("Data read from the file: ",data)

        fs.writeFile("destination.txt",data,(err)=>{
            if (err){ throw err;}
            console.log("Data copied to destination")

            fs.readFile("destination.txt","utf-8",(err,data)=>{
                if(err){ throw err;}
                console.log("Data from the destination file: ",data)
            });
        });
    });
});