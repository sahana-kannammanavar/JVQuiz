const questions=[
    {
        question:"Who invented Java Programming?",
        answers:[
            {text:"Guido van Rossum",correct:false},
            {text:"James Gosling",correct:true},
            {text:"Dennis Ritchie",correct:false},
            {text:" Bjarne Stroustrup",correct:false},
        ]
    },
    {
        question:"What is a correct syntax to output 'Hello World' in Java?",
        answers:[
            {text:"System.out.println('Hello World');",correct:true},
            {text:"echo('Hello World');",correct:false},
            {text:"print('Hello World');",correct:false},
            {text:"System.println('Hello World');",correct:false},
        ]
    },
    {
        question:"Java is short for 'JavaScript'.",
        answers:[
            {text:"True",correct:false},
            {text:"False",correct:true},
                     
        ]
    },
{
    question:"Which statement is true about Java?",
    answers:[
        {text:"Java is a sequence-dependent programming language",correct:false},
        {text:" Java is a code dependent programming language",correct:false},
        {text:"Java is a platform-dependent programming language",correct:false},
        {text:"Java is a platform-independent programming language",correct:true},
    ]
},
{
    question:"Which component is used to compile, debug and execute the java programs?",
    answers:[
        {text:"JRE",correct:false},
        {text:"JDK",correct:true},
        {text:"JIT",correct:false},
        {text:"JVM",correct:false},

    ]
},
{
    question:"Which one of the following is not a Java feature?",
    answers:[
        {text:"object-oriented",correct:false},
        {text:" Use of pointers",correct:true},
        {text:"portable",correct:false},
        {text:"Dynamic and Extensible",correct:false},

    ]
},
{
    question:" Which of these cannot be used for a variable name in Java?",
    answers:[
        {text:"identifier&keyword",correct:false},
        {text:"identifier",correct:true},
        {text:"keyword",correct:false},
        {text:"none of the above",correct:false},

    ]
},
{
    question:"What is the extension of java code files?",
    answers:[
        {text:".js",correct:false},
        {text:".txt",correct:false},
        {text:".class",correct:false},
        {text:".java",correct:true},

    ]
},
{
    question:"Which environment variable is used to set the java path?",
    answers:[
        {text:"MAVEN_Path",correct:false},
        {text:"javaPATH",correct:false},
        {text:"JAVA",correct:false},
        {text:"JAVA_HOME",correct:true},

    ]
},
{
    question:"Which of the following is not an OOPS concept in Java?",
    answers:[
        {text:"Polymorphism",correct:false},
        {text:"Inheritance",correct:true},
        {text:"Compilation",correct:false},
        {text:"Encapsulation",correct:false},

    ]
},
{
    question:"Which of these are selection statements in Java?",
    answers:[
        {text:"break",correct:false},
        {text:"continue",correct:true},
        {text:"for()",correct:false},
        {text:"if()",correct:false},

    ]
},
{
    question:"Which of these keywords is used to define interfaces in Java?",
    answers:[
        {text:"intf",correct:false},
        {text:"Intf",correct:false},
        {text:"interface",correct:true},
        {text:"Interface",correct:false},

    ]
},
{
    question:"Which of the following is a superclass of every class in Java?",
    answers:[
        {text:"ArrayList",correct:false},
        {text:"Abstract class",correct:false},
        {text:"Object class",correct:true},
        {text:"String",correct:false},

    ]
},
{
    question:" Which of these keywords are used for the block to be examined for exceptions?",
    answers:[
        {text:"check",correct:false},
        {text:"throw",correct:false},
        {text:"try",correct:true},
        {text:"catch",correct:false},

    ]
},
{
    question:"Which one of the following is not an access modifier?",
    answers:[
        {text:"Protected",correct:false},
        {text:"Void",correct:true},
        {text:"Public",correct:false},
        {text:"Private",correct:false},

    ]
},
{
    question:"What is the numerical range of a char data type in Java?",
    answers:[
        {text:"0 to 256",correct:false},
        {text:"-128 to 127",correct:false},
        {text:"0 to 65535",correct:true},
        {text:"0 to 32767",correct:false},

    ]
},
{
    question:"JRE stands for",
    answers:[
        {text:"Java Realtime Environment",correct:false},
        {text:"Java Rapid Enterprise",correct:false},
        {text:"Java Runtime Environment",correct:true},
        {text:"None of the above",correct:false},

    ]
},
{
    question:"Java source files are compiled and converted to",
    answers:[
        {text:"Object code",correct:false},
        {text:"machine code",correct:false},
        {text:"Bytecode",correct:true},
        {text:"excetuable file",correct:false},

    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();