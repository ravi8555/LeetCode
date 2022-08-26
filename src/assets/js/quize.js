// const { Value } = require("sass");

let questions = [
    {
        quotion: "What is the baby of a Moth known as? ",
        choices: ["baby", "infant", "kit", "larva"],
        correctAns: 3

    },{
        quotion: "What is the baby of a Moth known as? ",
        choices: ["baby", "infant", "kit", "larva"],
        correctAns: 3

    }, {
        question: "What is the adult of a kid called",
        choices: ["calf", "doe", "goat", "chick"],
        correctAnswer: 2
    }, {
        question: "What is the young of Bufallo called?",
        choices: ["calf", "baby", "pup","cow"],
        correctAnswer: 0
    }, {
        question: "What a baby Aligator called?",
        choices: ["baby", "gator", "hatchling", "calf"],
        correctAnswer: 2
    }, {
        question: "What is a baby Goose called?",
        choices: ["gooser", "gosling", "gup", "pup"],
        correctAnswer: 1
    }, {
        question: "What is a baby Hamster called?",
        choices: ["pup", "chick", "infant", "billy"],
        correctAnswer: 0	
        
    }, {
        question: "What is a baby Hawk called?",
        choices: ["hawklett", "pup", "larva", "eyas"],
        correctAnswer: 3	
    }, {
        question: "What is a baby grasshopper called?",
        choices: ["hopper", "nymph", "stick", "pup"],
        correctAnswer: 1
    }, {
        question: "What is a baby Kangaroo called?",
        choices: ["kinga", "joey", "calf", "baby"],
        correctAnswer: 1
    
    }, {
        question: "What is a baby Whale called?",
        choices: ["whala", "cub", "grub", "infant"],
        correctAnswer: 1
    
    }, {
        question: "What is a baby Monkey called?",
        choices: ["infant", "baby", "calf", "pup"],
        correctAnswer: 0
    
        }, {
        question: "What is a baby Bear Called?",
        choices: ["cub", "baby balu", "young bear", "bearlet"],
        correctAnswer: 0
    }
];
let currQst = 0;
let currAns = 0;
let quizEnd = false;

$(document).ready( function(){
    displayCurQstn();
    $(this).find('.quizMessage').hide();
    $(this).find('.nextButton').click( function(){
        if(!quizEnd){
            value = $('input[type="radio"].val()');
            // console.log(value);
            if(value == undefined){
                $(document).find(".quizMessage").text('Please Select Answer');
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if(value == questions[currQst].currAns){
                    currAns++
                }
                currQst++
                if(currQst < questions.length){
                    displayCurQstn();
                }else{
                    dispScore();
                    $(document).find(".nextButton").text("Play Again ?");
                    quizEnd = true;
                }
                console.log(currAns);
            }
        }else{
            quizEnd = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurQstn();
            hideScore();
        }

    });
});
function displayCurQstn(){
    console.log("In display current question");
    let questn = questions[currQst].question;
    let questClass = $(document).find('.quizContainer > .question');
    let choiceLst = $(document).find('quizContainer > choiceList');
    let numChoice = questions[currQst].choices.length;

    $(questClass).text(questn);

    $(choiceLst).find("li").remove();

    let chOice;
    for( i = 0; i < numChoice; i++){
        chOice = questions[currQst].choices[i];
        $('<li><input type="radio" value='+ i + ' name="dynradio"/>' + chOice + '</li').appendTo(choiceLst);
    }
}
function resetQuiz(){
    currQst = 0;
    currAns = 0;
    

}