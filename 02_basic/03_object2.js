/* const tinderUser=new Object();this is singleton object 
                                     and this one is literals object=> const tinderUser={} 
// console.log(tinderUser)
tinderUser.Id="Manish12";
tinderUser.name="sammy"
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
    email:"@gamil.com",
    fullname:{
        fname:"Tek",
        lname:"saud"
    }

}
/* console.log(regularUser.fullname.fname)
console.log(regularUser.fullname)
 
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
// const obj3={...obj1,...obj2}
// console.log(obj3)



const users=[
    {
        id:1,
        email:"@gamil.com"
    }

]
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)) */

// destructuring of object

const bioData={
    name:"Tek",
    age:23,
    education:"master degree"
}
const {education:edu}=bioData;
const {name:n}=bioData;
const {name, age, education}=bioData;
console.log(name, age,education)
console.log(edu);
console.log(n)
