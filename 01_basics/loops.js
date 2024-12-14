const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }


const map = new Map()

map.set('IN', "India")
map.set('USA', "United States")
map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(val){
//     console.log(val);
    
// } )

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        laguageFileName: "js"
    },
    {
        languageName: "java",
        laguageFileName: "java"
    },
    {
        languageName: "python",
        laguageFileName: "py"
    },
]

// myCoding.forEach( (item)=>{
//     console.log(item.languageName);
// } )

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newVal = myNums.filter( (num) => {
//     return (num>4 && num<10)
// })

// console.log(newVal);

const newNums = []

myNums.forEach( (num)  => {
    if(num>4 && num<8){
        newNums.push(num)
    }
})

// console.log(newNums);


