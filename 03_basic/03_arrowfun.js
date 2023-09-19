const user={
    username:"Tek",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
     }
//  user.welcomeMessage();
//  user.username="Saud";
//  user.welcomeMessage();
// function chai(){
//     let username="Tek"
//     console.log(this.username)
// }
// chai();
// const chai=()=>{
//     let username="tek"
//     console.log(this.username)
// }
// chai();

// Arrow function
const addTwo=(num1,num2)=>{
    return num1+num2;
}
// console.log(addTwo(23,32));
// const addTwoo=(num1,num2)=>(num1+num2);
// console.log(addTwoo(12,12));


const addTwoo=()=>({username:"Tek"});
console.log(addTwoo());

