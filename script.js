const quizDB=[
    {
        question: "Q1: Inside which HTML element do we put the JavaScript?",
        a:"<script> ",
        b:"<javascript>",
        c:"<js>",
        d:"<scripting>",
        ans:"ans1"
    },
    {
        question: "Q2: What is the correct JavaScript syntax to change the content of the HTML element below?<br><p id='demo'>This is a demonstration.</p> ",
        a:" document.getElementById('demo').innerHTML = 'Hello World!; ",
        b:" document.getElement('p').innerHTML = 'Hello World!'; ",
        c:" #demo.innerHTML = 'Hello World!'; ",
        d:" document.getElementByName('p').innerHTML = 'Hello World!'; ",
        ans:" ans1"
    },
    {
        question: "Q3: How do you write 'Hello World' in an alert box? ",
        a:" alert('Hello World');  ",
        b:" msg('Hello World');",
        c:" msgBox('Hello World');",
        d:" alertBox('Hello World');",
        ans:"ans1"
    },
    {
        question: "Q4: How to write an IF statement in JavaScript?",
        a:" if (i == 5) ",
        b:" if i == 5 then",
        c:"if i = 5 then",
        d:" if i = 5",
        ans:"ans1"
    },
    {
        question: "Q5: How to write an IF statement for executing some code if 'i' is NOT equal to 5' ",
        a:"  if i <> 5 ",
        b:" if i =! 5 then",
        c:" if (i <> 5)",
        d:" if (i != 5) ",
        ans:"ans4 "
    },
    {
        question: "Q6: How does a FOR loop start?",
        a:" for (i <= 5; i++)",
        b:" for i = 1 to 5",
        c:" for (i = 0; i <= 5; i++)  ",
        d:" for (i = 0; i <= 5)",
        ans:"ans3"
    },
    {
        question: "Q7: What is the correct way to write a JavaScript array? ",
        a:" var colors = (1:'red', 2:'green', 3:'blue') ",
        b:" var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue') ",
        c:" var colors = 'red', 'green', 'blue' ",
        d:" var colors = ['red', 'green', 'blue']  ",
        ans:"ans4"
    },
    {
        question: "Q8: How do you round the number 7.25, to the nearest integer?",
        a:" Math.rnd(7.25)",
        b:"Math.round(7.25) ",
        c:" round(7.25)",
        d:" rnd(7.25)",
        ans:" ans2"
    },
    {
        question: "Q9: How do you find the number with the highest value of x and y?",
        a:" ceil(x, y)",
        b:" Math.ceil(x, y)",
        c:" top(x, y)",
        d:" Math.max(x, y)  ",
        ans:"ans4 "
    },
    {
        question: "Q10: Which event occurs when the user clicks on an HTML element?",
        a:" onmouseclick",
        b:" onclick   ",
        c:" onmouseover",
        d:" onchange",
        ans:"ans2"
    },
    {
        question: "Q11: Which operator is used to assign a value to a variable?",
        a:" +",
        b:" *",
        c:" -",
        d:"  =",
        ans:" ans4"
    },
 
];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElement) => {
        if(curAnsElement.checked){
            answer=curAnsElement.id;

        }
    });
    return answer;
};


const deselectAll=()=>{
    answers.forEach((curAnsElement)=>curAnsElement.checked=false);
}


submit.addEventListener("click", ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length)
    {
        loadQuestion();
    }
    else{

        showScore.innerHTML=`
        <h3>You Scored ${score}/${quizDB.length}✌</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`
    
        showScore.classList.remove('scoreArea');
    }
})













