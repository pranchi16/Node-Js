// Write node.js script to check whether the file extension is .txt or not.

var pm=require("path")
path=pm.dirname("D:\Node Js\destination.txt")
console.log(path)
path=pm.basename("D:\Node Js\destination.txt")
console.log(path)
ext=pm.extname("D:\Node Js\destination.txt")
console.log(ext)
path=pm.parse("D:\Node Js\ipe1.html")
console.log(path)
if (path.ext==".txt"){
    console.log("Text Document")
}
else{
    console.log("Not a text document")
}