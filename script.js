// array for questions
var questions = [
    {
        question: "What does HTML stand for?",
        answer1: "Hypertext Markup Language",
        answer2: "Hot Tamale Meetup League"
    },
    {
        question: "What does CSS stand for?",
        answer1: "Cascading Stylesheet",
        answer2: "Cat Sitter Socialclub"
    },
    {
        question: "What form of language makes a script interactive?",
        answer1: "Javascript",
        answer2: "Movie Script"
    }
]
// used to hide the info when the start button is clicked
var startButton=document.querySelector(".start_btn")
function displayQuestion(){
    console.log(questions)
  var questions=document.querySelector(".questions")
    questions.style.display="shown"
}
// supposed to make the array visible upon clicking start but having issues with that :/
startButton.addEventListener("click",function(){
    var quizRules=document.querySelector(".info_title")
    quizRules.style.display="none"
displayQuestion()
}) 