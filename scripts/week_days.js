var days = [1, 2, 3, 4, 5, 6 , 7];
var currentDay;
var stats = [];
var used = [];


function prepareData () {
    var day = randNewDay(this.range);
    setImage(day);
}


function randNewDay () {
    var day = days[Math.floor(Math.random() * days.length)];
    return day;
}


function removeDay (day) {
    days.splice(days.indexOf(day), 1);
}


function setImage (number){
    var img = document.getElementById("weekDayImage");
    img.src = "../imgs/week_days/" + number + ".png";
}


function nextDay (){
    var answer = document.getElementById("answer");
    if (answer.value == ""){
        alert("Wprowadz odpowiedz");
        return false;
    }

    var answer_as_int  = parseInt(answer.value);
    if (answer_as_int || answer_as_int == 0){
        // this.checkAndSaveAnswer(answer_as_int);
        alert("Dobra odpowiedz!");
        if (days.length == 0){
            alert("Koniec");
        }
        removeDay();
        this.prepareData();
        return true;
    } else {
        alert("Wprowadz poprawne dane");
        answer.value = "";
        return false;
    }
}


// MathExercise.prototype.checkAndSaveAnswer = function (answer){
//     var expectedAnswer = this.getExpectedAnswer();
//     var stats = {exercise: this.number1 + " " + this.sign + " " + this.number2,
//                 expectedAnswer: expectedAnswer,
//                 answer: answer,
//                 correct: answer == expectedAnswer};
//     this.stats.push(stats);
//     this.appendResultsToStats(stats);
//     document.getElementById("answer").value = "";
// }


// MathExercise.prototype.appendResultsToStats = function (stats){
//     var tableRef = document.getElementById('statsTable')
//     var newRow   = tableRef.insertRow(tableRef.rows.length);
//     var newCell  = newRow.insertCell(0);
//     newCell.appendChild(document.createTextNode(stats.expectedAnswer));
//     newCell  = newRow.insertCell(0);
//     newCell.appendChild(document.createTextNode(stats.answer));
//     newCell  = newRow.insertCell(0);
//     newCell.appendChild(document.createTextNode(stats.exercise));
//     newCell  = newRow.insertCell(0);
//     newCell.appendChild(document.createTextNode(tableRef.rows.length-1));
//     newCell  = newRow.insertCell(0);
//     var img = new Image();
//     newCell.appendChild(img);
//     img.src = "../imgs/signs/" + (stats.correct ? "good": "wrong") + ".png";
// }


// MathExercise.prototype.getStats = function (){
//     for(var i = 0; i < this.stats.length; i++){
//         console.log("# " + i + " " + this.stats[i].exercise + " " + this.stats[i].expectedAnswer + " " + this.stats[i].answer + " " + this.stats[i].correct);
//     }
// }


function toggle(sDivId){
    var oDiv = document.getElementById(sDivId);
    oDiv.style.display = (oDiv.style.display == "block") ? "none" : "block";
}


window.onload = function(){
    prepareData();
};
