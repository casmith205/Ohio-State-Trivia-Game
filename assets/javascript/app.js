$(document).ready(function() {

// DEFINING VARIABLES
var questions = [
    "What is the name of the OSU student section?",
    "What is the state tree of Ohio?",
    "What is the OSU mascot's name?",
    "Who was the OSU football coach who punched a Clemson player in the Gator Bowl in 1978?",
    "Who was the only two-time Heisman Trophy winner from Ohio State?",
    "What does TBDBITL stand for in regards to the OSU Marching Band?",
    "What famous comedian from Cleveland, Ohio dotted the 'I'?",
    "How do you respond to an OSU fan who yells 'O-H!'?",
    "What 1960s song by the McCoys became an Ohio State staple?"
];

var answers = [
    "Block-O",
    "Buckeye",
    "Brutus Buckeye",
    "Woody Hayes",
    "Archie Griffin",
    "The Best Damn Band in the Land",
    "Bob Hope",
    "I-O!",
    "Hang on Sloopy"
]

var choices = {
    q0 : ["Buckeye City", "Block-O", "The Brutus House", "The Angry Tree Nuts"],
    q1 : ["Buckeye", "Boxelder Maple", "Alder", "Blackhaw"],
    q2 : ["Betty Buckeye", "Bruce Buckeye", "Bill Buckeye", "Brutus Buckeye"],
    q3 : ["Urban Meyer","Woody Hayes","Jim Tressel", "Earle Bruce"],
    q4 : ["Archie Griffin", "Eddie George", "Troy Smith", "Braxton Miller"],
    q5 : ["The Baddest Damn Band in the Land","The Best Darn Bassists in the Land", "The Ballin-est Drummers Band in this Land","The Best Damn Band in the Land"],
    q6 : ["Dave Chappelle","Bob Hope", "Josh Radnor","Drew Carey"],
    q7 : ["Shut up!", "Go Bucks!", "I-O!", "Ohio! Ohio! The land that I love"],
    q8 : ["Hang on Sloopy", "Come on Let's Go", "Beat the Clock", "I Got to Go Back"]
}

var correctReactionImgs = ["assets/images/dance.gif","assets/images/thankyourfans.gif"];
var incorrectReactionImgs = ["assets/images/sadpizza.gif"];

var question= " ";
var answer=" ";
var questionsAsked = [];
var indexChosen;
var timeRemaining = 15;
var correct;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 9 - (correctAnswers+incorrectAnswers);
var timeInt;

// DEFINING FUNCTIONS
// Funtion resets the game
function reset (){
    $(".choices").fadeOut(10);
    $("#startBtn").fadeIn();
    correctAnswers = 0;
    incorrectAnswers = 0;
};

// Function starts the game
function start (){
    $("#startBtn").fadeOut();
    $(".choices").fadeIn();
    // Every second, run the time function
    timeInt = setInterval(time, 1000);
};

// Function reduces time remaining and prints the seconds remaining to HTML
function time(){
    if(questionsAsked.length< questions.length){
        if(timeRemaining>0){
            timeRemaining--;
        } else {
            show();
        }
        $(".time").html(timeRemaining + " seconds remaining!"); 
    } else {
        showResults();
    }
};

// Function shows the question and related choices
function show (){
    $(".time").html(timeRemaining + " seconds remaining!");
    $(".gameplay").fadeIn();
    $(".results").fadeOut(0);
        // Set time remaining to 15 and push to time div
        timeRemaining = 15;
        // Generate a random number between 0 and 8; Pull the question at the random number position and related choice array. Push to html
        indexChosen = Math.floor(Math.random()*questions.length);
        question = questions[indexChosen];
        answer = answers[indexChosen];
        choiceIndex = ("q"+ indexChosen);
        // If the question has not already been asked, then put it into the asked array and push to HTML
        if(questionsAsked.indexOf(question) == -1){
            questionsAsked.push(question);
            $(".question").html(question);
            $("#option0").html(choices[choiceIndex][0]);
            $("#option1").html(choices[choiceIndex][1]);
            $("#option2").html(choices[choiceIndex][2]);
            $("#option3").html(choices[choiceIndex][3]);
        } else {
            show();
        }
    };

function answerShow (){
    $(".gameplay").fadeOut(0);
    $(".results").fadeIn();
    if(correct == true){
        $(".results").html("That is correct! <br>");   
    } else {
        $(".results").html("Sorry, but that is not correct! <br> Are you sure you aren't a fake fan?");
    }
};

function showResults(){
    $(".results").html("Congrats! You're all done. <br> Here are your stats... <br> Correct answers: " + correctAnswers 
    + "<br> Incorrect Answers: "+ incorrectAnswers + "<br> Unanswered Questions: " + unanswered + "<br> Not too shabby!");
    $(".gameplay").fadeOut(0);
    $(".results").fadeIn();
    $(".time").html(" ");
    clearInterval(timeInt);
};

// ON-PAGE ACTIONS
// reset the page to start
reset();

// When the start button is clicked...
$("#startBtn").on("click", function(){
    start();
    show();
});

// When the choices are clicked...
$(".allChoices").on("click", ".choices", function(x){
        timeRemaining=3;
        console.log(answer);
        console.log(x.currentTarget.innerText);
        console.log(answer == x.currentTarget)
        if(x.currentTarget.innerText === answer){
            correctAnswers++;
            correct = true;
            answerShow();
        } else {
            incorrectAnswers++;
            correct = false;
            answerShow();
        };
        console.log(correct); 
});


});