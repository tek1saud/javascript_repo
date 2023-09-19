// singleton=a one kind of object what we declare as literal it is not a singleton but when it is with constructor as it is singleton


//object literals=both are object declare method  *object.create is construcoter method]
const mySym=Symbol("key1");
const jsUser={
    name:"Tek",
    "age":23,
    location:"mahendranager",
    email:"google@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["monday","saturday"],
   [ mySym]:"mykey1",
} 
/* console.log(jsUser.name);
console.log(jsUser["age"]);
console.log(typeof(jsUser[mySym]));
console.log(jsUser[mySym]); */
jsUser.email="tek@gmail.com";
// Object.freeze(jsUser);
jsUser.name="Ram";
// console.log(jsUser);

// 8888888888888888*function*999999999999999999999999999
jsUser.greeting=function(){
    console.log("Hello js User");
}
// console.log(jsUser);
// console.log(jsUser.greeting());
jsUser.greetingtwo=function(){
    console.log(`Hello js User ,${this.name}`);
}
console.log(jsUser.greetingtwo());