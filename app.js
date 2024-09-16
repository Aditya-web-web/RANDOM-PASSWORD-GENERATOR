let button = document.querySelector("button");
let length = 10;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@#$%^&*()_+-=<>?,./{}[]";
let all = uppercase + lowerCase + numbers + specialChars;


function random(){
    let pass = "";
    while(length>pass.length){
        pass += all[Math.floor(Math.random()*all.length)];
    }
    let input = document.querySelector("input");
    input.value = pass;
}


function doCopy(){
    let input = document.querySelector("input");
    input.select();
    document.execCommand("copy");
}


let copy = document.querySelector("i");
copy.addEventListener("click",()=>{
    doCopy();
})



button.addEventListener("click",()=>{
    random();
})