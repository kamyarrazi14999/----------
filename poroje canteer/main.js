//ELEMENT
const openButton = document.querySelector(".open-btn")
const closeButton = document.querySelector(".close-btn")
const modalBackdrop = document.querySelector(".modal-backdrop ")

//OPEN MODEL BOX
openButton.addEventListener("click", ()=> {

togglemodal();
});
//CLOSE MODEL BOX
closeButton.addEventListener("click", ()=> {
togglemodal();
   
});
//close modal bax when click out box connten
modalBackdrop.addEventListener("click", (e)=>{
    const currentElemnt = e.target;

if(currentElemnt.classList.contains("modal-backdrop"))
togglemodal()

});


const togglemodal=()=>{

modalBackdrop.classList.toggle("show-modal")

};
