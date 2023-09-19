/* let a=10;
const b=20;
var c =233;
console.log(a)
console.log(b)
console.log(c)   **8 This is global scope*/
{
    // This is block scope 
}

if(true){
    let a=10;
    const b=20;
    var c =233; /*  */
}
// console.log(a)
// console.log(b)
// console.log(c)/* here c is accessible outside the block so there is a problem with var in scoping */


// function one(){
//     const username="Tek";
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
//     // console.log(website)
//     two()
// }
// one();


// ****************************** Interesting  *************************


function addone(num){
    return num+1;
}
let number=addone(5);
console.log(number);

const addTwo=function(num){
    return num+2;
}
