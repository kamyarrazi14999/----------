//elements

const countertext = document.querySelector(".counter-text");
const counterbuttons = document.querySelectorAll(".btn");
let counts=0
//ENITLAL ACTION
countertext.textContent=counts;
counterbuttons.forEach((btn) =>{
btn.addEventListener("click",(e)=>{
    const currentbutton= e.target.dataset.btn;
  if(currentbutton==="decrease"){
counts--;

}
else if(currentbutton==="increase"){
    counts++;
}
else{
    counts=0;
}
if(counts>0){
countertext.style.color="green";


}

else if(counts<0){
countertext.style.color="red";
}

else{{


countertext.style.color="#0ff";
}}

countertext.textContent=counts; 
})
})








