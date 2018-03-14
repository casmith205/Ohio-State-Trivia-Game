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
    "Buckeye Tree",
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
    q2 : ["Betty Buckeye", "Bruce Buckeye", "Brutus Buckeye", "Bill Buckeye"],
    q3 : ["Urban Meyer","Woody Hayes","Jim Tressel", "Earle Bruce"],
    q4 : ["Archie Griffin", "Eddie George", "Troy Smith", "Braxton Miller"],
    q5 : ["The Baddest Damn Band in the Land","The Best Darn Bassists in the Land", "The Ballin-est Drummers Band in this Land","The Best Damn Band in the Land"],
    q6 : ["Dave Chappelle","Bob Hope", "Josh Radnor","Drew Carey"],
    q7 : ["Shut up!", "Go Bucks!", "I-O!", "Ohio! Ohio! The land that I love"],
    q8 : ["Hang on Sloopy", "Come on Let's Go", "Beat the Clock", "I Got to Go Back"]
}

var question= " ";
var answer=" ";
var questionsAsked = [];
var remainingQuestions = [];
var indexChosen;
var timeRemaining = 16;

// Determines a random question
indexChosen = Math.floor(Math.random()*questions.length);
question = questions[indexChosen];
choiceIndex = ("q"+ indexChosen);


// Push chosen question to a Questions Asked array to avoid repeats
questionsAsked.push(question);
console.log(questionsAsked);

setInterval(time, 1000);
setInterval(show, 10000);

function time(){
    timeRemaining--;
    $(".time").html(timeRemaining + " seconds remaining!");
};

function show (){
    timeRemaining = 15;
    $(".time").html(timeRemaining + " seconds remaining!");
    $(".question").html(question);
    $("#q0").html(choices[choiceIndex][0]);
    $("#q1").html(choices[choiceIndex][1]);
    $("#q2").html(choices[choiceIndex][2]);
    $("#q3").html(choices[choiceIndex][3]);
    indexChosen = Math.floor(Math.random()*questions.length);
    question = questions[indexChosen];
    questionsAsked.push(question);
    choiceIndex = ("q"+ indexChosen);
}


// Create a reset function
// Create a win/loss function

