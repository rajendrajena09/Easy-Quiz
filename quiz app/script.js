

const questions=[
    {
        question:"What is the name of our national animal?",
        answers: [
           
            {text:"Tiger", correct:true},
            {text:"Lion", correct:false},
            {text:"Elephant", correct:false},
            {text:"chetaah", correct:false}
        ]
    },
    {
        question:"What is the name of our national Bird?",
        answers: [
           
            {text:"Crow", correct:false},
            {text:"Eagle", correct:false},
            {text:"Peacock", correct:true},
            {text:"Parrot", correct:false}
        ]
    },
    {
        question:"What is the name of our national fruit?",
        answers: [
           
            {text:"Orange", correct:false},
            {text:"Apple", correct:false},
            {text:"Guava", correct:false},
            {text:"Mango", correct:true}
        ]
    },
    {
        question:"What is the name of our national Sport?",
        answers: [
           
            {text:"Cricket", correct:false},
            {text:"Hockey", correct:false},
            {text:"Football", correct:false},
            {text:"Nothing", correct:true}
        ]
    },
    
    
]

const question=document.querySelector("#question");
const answerButtons=document.querySelector("#answers");
const nextButton=document.querySelector("#next");

let currentIndex=0;
let score=0;

console.log("hello")


function startQuiz(){
    currentIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNo=currentIndex+1;
    question.innerHTML= questionNo+". "+ currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect= selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");

        }
       button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    question.innerHTML="you scored " +score +" out of " +questions.length+"!";
    nextButton.innerHTML="Reset";
    nextButton.style.display="block";
}

function handleNextButoon(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
if(currentIndex < questions.length){
    handleNextButoon();
}
else{
    startQuiz();
}
});
startQuiz();