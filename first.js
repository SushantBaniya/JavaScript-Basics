// let a= prompt("Enter your marks");
// if(a>95){
//     console.log("A+");
// }
// else if(a>85){
//     console.log("A");
// }
// else{
//     console.log("Failed");
// }

// let i=1;
// for(i=1;i<=111;i++){
//     if(i%2===0)
//         console.log("EVen numbers=",i);
    
// }

// let correctValue=11;

// let a = promt("Enter your number");

// while(correctValue!=a){
// a=prompt("Failed Enter the number again");
// }
// console.log("The required number is=",a,"You have found the number");

//Template literals

// let obj={
//     name:"Sushant",
//     age:21
// };
// let output=`The age of ${obj.name} is ${obj.age}`;
// console.log(output);

let a=prompt("Enter your name witout spaces");
for(let i of a){
    if(i===" ")
        console.log("Invalid input");
    else{
        let str="@"+a+a.length;
        console.log(str); 
    }
}
