// Write node JS script to write an array of objects with properties name and age in a file
// named student.txt. Then read the file and display the object on console.

var fs=require("fs")

const student=[
    {
        name:"Pranchi",
        age:20
    },
    {
        name:"Vishwa",
        age:21
    }
]
fs.writeFileSync("student.txt",JSON.stringify(student))
data=fs.readFileSync("student.txt","utf-8")
d=JSON.parse(data)
console.log(d)