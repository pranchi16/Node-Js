// Read data from file and sort that data in ascending order using .sort() .

var fs=require('fs')
fs.writeFileSync("num.txt","50 -1 99 100 20 0 56 78 59");
data=fs.readFileSync('num.txt','utf-8')
data=data.split(" ")
d=data.sort((a,b)=>a-b)
console.log(d)