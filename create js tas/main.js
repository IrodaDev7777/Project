
//task1

const yoshingiz=prompt("How old are u? ");
console.log(yoshingiz);

if(yoshingiz>=17){
    console.log("U can get a passport!");
}
else if(yoshingiz<17){
    console.log(`U are still baby and need to wait  ${17 - yoshingiz} year`);
}
else if(yoshingiz>100 || yoshingiz<-1 ) {
    console.log("U are not a real person");
}

//task2 chunmadim

//task3
 const a = prompt("istalgan son kiriting");
if(a%2==0){
    alert("Bu juft son");
}
else{
    alert("Bu toq son");
}

//task4

const num1=prompt("please enter the first number");
const num2=prompt("please enter the second number");

if(num1>num2){
    console.log("num1 is greater than num2");
}
else if(num2>num1){
    console.log("num2 is greater than num1");
}
else if (num1===num2){
    console.log("num1 is equal to num2");
    
}








