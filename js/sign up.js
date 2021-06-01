let user=document.querySelector(".txtUser");
let password=document.querySelector(".txtPassword");
let submit=document.querySelector(".submit");
if(window.localStorage){
    console.log("Supported");
}
else{
    console.log("Not Supported");
}
