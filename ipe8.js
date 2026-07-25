// Create JSON object which contains array of objects. Calculate perimeter of square and
// perimeter of circle by using side value and diameter value respectively. Write object as well
// as perimeter values of square and circle in shape.txt file.
// const shape =
// [
// {
// name: "circle",
// diameter: 8
// },
// {
// name: "square",
// side: 10
// } ]

var fs=require("fs")
const shape=[
    {
    name:'circle',
    diameter:8
    },
    {
        name:'square',
        side:10
    }
]

fs.writeFileSync("shape.txt",JSON.stringify(shape))
data=fs.readFileSync("shape.txt","utf-8")
d=JSON.parse(data)
const peri=(d[0].diameter/2)*3.14*2
console.log("Perimeter of circle: ",peri)
const perimeter=(d[1].side)*4
console.log("Perimeter of square: ",perimeter)

fs.appendFileSync("shape.txt","\nPerimeter of circle is "+peri+".\nPerimeter of square is "+perimeter+".")