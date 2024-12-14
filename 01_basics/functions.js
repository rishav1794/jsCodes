function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    return num1+num2
}

let result = addTwoNumbers(3, 5)
// console.log(result);

function loginUserMessage(userName) {
    if(userName){
    console.log(`${userName} just logged in`)
}
else{
    console.log("Please enter a user name");
    
}
}

// console.log(loginUserMessage("Rishav"))

// loginUserMessage();

function calculateCartPrice(...nums){
    return nums
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username:"rishav",
    age: 18
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and age is ${anyobject.age}`)
}

// handleObject(user)

