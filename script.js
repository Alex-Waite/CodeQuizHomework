//Variables
var timeLeft = 60;
var timeArea = $("#time")
var interval;
var timerButton = $("#startBtn")
var userScore = 0;
var wrongScore = 0;



//TIMER STUFF
function displayTime() {
    $("#time").text(timeLeft)
}



function startTimer() {

    interval = setInterval(function () {
        timeLeft--;
        console.log(timeLeft);

        if (timeLeft <= 0) {
            timeLeft = 0;
            displayTime();
            clearInterval(interval);
            alert("Times Up!")
            $("#questionRow1").addClass("hidden")
            $("#questionRow2").addClass("hidden")
            $("#questionRow3").addClass("hidden")
            $("#questionRow4").addClass("hidden")
            $("#questionRow5").addClass("hidden")
            $("#questionRow6").addClass("hidden")
            $("#startRow").addClass("hidden")
            $("#gameOverScreen").removeClass("hidden")
            $("#userSpan").text(username)
            $("#scoreSpan").text(userScore)
            $("#wrongScoreSpan").text(wrongScore)
            localStorage.setItem("lastScore", userScore)



        } else {
            displayTime();
        }
    }, 1000);
}

//When questions are answered the next questions will come up

$(".right").on("click", function () {
    userScore = userScore + 1;
})
$(".wrong").on("click", function () {
    timeLeft = timeLeft - 10;
    wrongScore = wrongScore + 1;
    displayTime()
})


$("#startBtn").on("click", startTimer)
$("#startBtn").on("click", function () {
    $("#startRow").addClass("hidden")
    $("#questionRow1").removeClass("hidden")
})
$(".q1Btn").on("click", function () {
    $("#questionRow1").addClass("hidden")
    $("#questionRow2").removeClass("hidden")
})
$(".q2Btn").on("click", function () {
    $("#questionRow2").addClass("hidden")
    $("#questionRow3").removeClass("hidden")
})
$(".q3Btn").on("click", function () {
    $("#questionRow3").addClass("hidden")
    $("#questionRow4").removeClass("hidden")
})
$(".q4Btn").on("click", function () {
    $("#questionRow4").addClass("hidden")
    $("#questionRow5").removeClass("hidden")
})
$(".q5Btn").on("click", function () {
    $("#questionRow5").addClass("hidden")
    $("#questionRow6").removeClass("hidden")
})

$(".q6Btn").on("click", function () {
    username = prompt("Set a Username to see your score!")
    while (username.length < 2 || username.length > 20) {
        username = prompt("Please pick a username between 2-20 characters")
    }
    $("#questionRow6").addClass("hidden")
    $("#gameOverScreen").removeClass("hidden")
    $("#userSpan").text(username)
    $("#scoreSpan").text(userScore)
    $("#wrongScoreSpan").text(wrongScore)
    localStorage.setItem("lastScore", userScore)
    clearInterval(interval)
})