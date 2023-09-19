/* const students=[
    "Ram","Hari","suresh","Thor","Indra"
]
console.log(students.length);
students.push("Tek"); */
// console.log(students.length);

// ******at******

/* let index=2;
const arrayat=students.at(index);
console.log(arrayat);
console.log(students.at(1));
arr1.push(arr2);
console.log(arr1);
console.log(arr1[2][1]); */


// ############ concat()##############
/* const arr1=["ram","shym"];
const arr2=["hari","sita"];
const arr3=arr1.concat(arr2);
console.log(arr3);
console.log(arr3[2])
arr1.push(arr2);
console.log(arr1);
console.log(arr1[2][1]); */



// ****************entries**********************

/* const students=[
    "Ram","Hari","suresh","Thor","Indra"
]
let f =students.entries();
for(x of f){
    console.log(x);
} */

// ****************every**********************
/* const ages=[18,34,34,25,15,46,57,23,45,32]
function checkAge(age){
    if(age>18){
      return age;
    }
}

console.log(ages.every(checkAge)); */

// ****************fill**********************
/* 
const students=[
    "Ram","Hari","suresh","Thor","Indra"
]
console.log(students.fill("Tek")); */


// ****************filter**********************
/* const ages=[18,34,34,25,15,46,57,23,45,32];
let result = ages.filter(checkoutAdult);

function checkoutAdult(age){
    if(age>18){
        return age;
    }
}
console.log(result); */
// ****************flat**********************
/* const arr1=[1,24,42,[12,353,],53]
const result=arr1.flat();
console.log(result); */
// ****************slice**********************
/* const ages=[18,34,34,25,15,46,57,23,45,32];
const result= ages.slice(2,6);
console.log(result);
console.log(ages);
 */
// ****************splice**********************
/* const ages=[18,34,34,25,15,46,57,23,45,32];
const result= ages.splice(2,6);
console.log(result);
console.log(ages);
 */
// ****************shift**********************

/* const ages=[18,34,34,25,15,46,57,23,45,32];
const result= ages.shift();
console.log(result);
console.log(ages); */


// ****************unshift**********************
const ages=[18,34,34,25,15,46,57,23,45,32];
const result= ages.unshift(23);
console.log(result);
console.log(ages);

