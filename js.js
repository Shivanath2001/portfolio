const navImg=document.querySelector(" nav img")
const body=document.body
const nav=document.querySelector("h4")


// console.log(navImg);

function theam(){
   
body.classList.toggle("light")
if(body.classList.contains("light")){
    navImg.src="light4.png"
}
else{
    navImg.src="dark3.jpeg"
}
console.log(body);
}
navImg.addEventListener("click",theam)
