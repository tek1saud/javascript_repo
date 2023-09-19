// immediately Invoked function exressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();
((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("Tek");