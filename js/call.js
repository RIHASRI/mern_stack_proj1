/*console.log("first")
setTimeout(()=>{
    console.log("this run after");
},5000)
console.log("end");

setTimeout(()=>{
    console.log("1.made tea");
    setTimeout(()=>{
        console.log("2.taosted bread");
        setTimeout(()=>{
            console.log("3. fried egg");
            
        
},5000);
    },3000);
},2000);

//Promise

let p=new Promise((resolve,reject)=>{
    let p=false;//change to false to see reject
    if(p){
        resolve("promise resolved");
    }
    else{
        reject("promise rejected");
    }});
    p.then((message)=>{
        console.log("yay! "+ message);})
    .catch((error)=>{
        console.log("nay! "+ error);
    });
        
    const [a,b,c]=[10,20,30];
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30

    const [first,...rest]=[1,2,3,4,5];
    console.log(first);//1
    console.log(rest);//[2,3,4,5]*/

    const user={name:"john",age:30};
    
    const{name,age}=user;
    console.log(name);
    console.log(age);

    function greet({name,age}){
        console.log(`hello,${name}! you are ${age} years old`);
    }
    greet({name:"alice",age:25});