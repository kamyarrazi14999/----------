const questionItems=document.querySelectorAll(".question-item");
const answerBoxs=document.querySelectorAll(".answer-box");

questionItems.forEach((item)=>{
item.addEventListener("click",()=>{
const answerBox = item.querySelector(".answer-box");
const answerText = item.querySelector(".answer-text");

//GET EACH HEIGHT ANSWER 
const answerHeight = answerText.getBoundingClientRect().height;
if(item.classList.contains('showAnswer')){
restAnswer();

}
else{
  restAnswer();

item.classList.toggle('showAnswer');
answerBox.style.height=`${answerHeight}px `;
}



});


});
//REST ANSWER
const restAnswer=()=>{
    answerBoxs.forEach((answer)=>{
        const questionItem = answer.parentElement;
        questionItem.classList.remove('showAnswer');
        answer.style.height=0;  
})}