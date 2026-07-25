// Write node js script and json to perform below tasks.
// 1. Write below object in txt file named s2.txt
// {d:{a:10,b:20,c:[30,10]}}
// 2. Read data from the same file and perform the below tasks.
// a. addition of a and b.
// b. subtraction of 2nd element of c and b. (Must be positive value)
// c. multiplication of elements of c.
// 3. Add the Output of addition, subtraction and multiplication below the object in s2.txt
// file.

var fs=require("fs")
const data={d:{a:10,b:20,c:[30,10]}}
fs.writeFileSync("s2.txt",JSON.stringify(data))
data1=fs.readFileSync("s2.txt","utf-8")
console.log(data1)
data1=JSON.parse(data1)
addition=data1.d.a+data1.d.b
sub=Math.abs(data1.d.c[1]-data1.d.b)
mul=data1.d.c[0]*data1.d.c[1]
fs.appendFileSync("s2.txt","\nAddition:"+addition+"\nSubtraction:"+sub+"\nMultiplication:"+mul)
read_data=fs.readFileSync("s2.txt","utf-8")
console.log(read_data)