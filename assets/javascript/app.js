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
    q1 : ["Buckeye City", "Block-O", "The Brutus House", "The Angry Tree Nuts"],
    q2 : ["Buckeye", "Boxelder Maple", "Alder", "Blackhaw"],
    q3 : ["Betty Buckeye", "Bruce Buckeye", "Brutus Buckeye", "Bill Buckeye"],
    q4 : ["Urban Meyer","Woody Hayes","Jim Tressel", "Earle Bruce"],
    q5 : ["Archie Griffin", "Eddie George", "Troy Smith", "Braxton Miller"],
    q6 : ["The Baddest Damn Band in the Land","The Best Darn Bassists in the Land", "The Ballin-est Drummers Band in this Land","The Best Damn Band in the Land"],
    q7 : ["Dave Chappelle","Bob Hope", "Josh Radnor","Drew Carey"],
    q8 : ["Shut up!", "Go Bucks!", "I-O!", "Ohio! Ohio! The land that I love"],
    q9 : ["Hang on Sloopy", "Come on Let's Go", "Beat the Clock", "I Got to Go Back"],
}

var questionChosen= " ";
var answer=" ";
var questionsAsked = [];
var remainingQuestions = [];

// Determines a random question
questionChosen = questions[Math.floor(Math.random()*questions.length)]
console.log(questionChosen);

// Push chosen question to a Questions Asked array to avoid repeats
questionsAsked.push(questionChosen);
console.log(questionsAsked);

setInterval(show, 10000);

function show (){
    $(".question").html(questionChosen);
    $(".choices")
}


// Create a reset function
// Create a win/loss function

