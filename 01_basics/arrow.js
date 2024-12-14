const user = {
    username: "rishav",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to the website`);
    }
}

// user.welcomemessage()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,5));
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({name:"Rishav"})
console.log(addTwo(3,5))