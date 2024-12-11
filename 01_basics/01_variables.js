let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date("2024-12-06")

// console.log(myCreatedDate.toLocaleString());


const JsUSer = {
    name: "Rishav",
    "full name": "Rishav Singh",
    age: 18,
    location: "Las Vegas" 
}

JsUSer.gereeting = function(){
    console.log("Hello Js User")
}

JsUSer.greetingTwo = function(){
    console.log(`Hello Js User ${JsUSer.name}`);
}

// console.log(JsUSer.gereeting());
JsUSer.greetingTwo()
