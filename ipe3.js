// <!-- Write node Example with File system sync methods. (CRUD Operations)
// 1. To create folder
// 2. Create one file inside that folder
// 3. Append some data to that file.
// 4. Read data from the file
// 5. Rename that file
// 6. Delete File -->


var fs=require("fs")
// fs.mkdirSync("node")
fs.writeFileSync('node/hello.txt',"Hello EveryOne ! ")
fs.appendFileSync('node/hello.txt',"\n Good Morning")
data=fs.readFileSync('node/hello.txt','utf-8')
console.log(data)
fs.renameSync('node/hello.txt','node/data.txt')
fs.unlinkSync('node/data.txt')
