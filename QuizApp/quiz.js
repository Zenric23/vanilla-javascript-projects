
const start = document.querySelector('.start');
const questionContainerElement = document.querySelector('.question-container');
const questionElement = document.querySelector('.questions');
const answerButtonsElement = document.querySelector('.answer-buttons');
let shuffledQuestion, currentQuestionIndex;


start.addEventListener('click',function(){
    const questionContainer = document.querySelector('.question-container');

    this.classList.add('hide')
    shuffledQuestion = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
})


function setNextQuestion(){
    showQuestion(shuffledQuestion[currentQuestionIndex])  
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = asnwer.text
        button.classList.add('btn')
        if (answer.correct) {
             button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e){
    
}

const question = [
    {
        question: 'What is 2 + 2',
        asnwers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]