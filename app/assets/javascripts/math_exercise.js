function MathExercise(range, operation, sign){
    this.operation = operation
    this.sign = sign
    this.range = range;
    this.number1, this.number2;
    this.imgs = [];
    this.stats = [];
}

MathExercise.prototype.prepareData = function (){
    this.deleteImages();
    this.randNewNumbers(this.range);
    this.printNumber(this.number1);
    this.printSign(this.operation);
    this.printNumber(this.number2);
    this.printSign("equal");
    this.printSign("question_mark");
}


MathExercise.prototype.deleteImages = function (){
    while (this.imgs.length > 0){
        var imgId = this.imgs.pop();
        var img = document.getElementById(imgId);
        img.parentNode.removeChild(img);
    }
}


MathExercise.prototype.randNewNumbers = function (range){
    this.number1 = Math.floor((Math.random() * this.range) + 1);
    this.number2 = Math.floor((Math.random() * this.range) + 1);
}


MathExercise.prototype.printNumber = function (number){
    var mf = document.getElementById("exerciseFrame");
    num = number.toString();
    for (var i = 0; i < num.length; i++){
        var img = new Image();
        mf.appendChild(img);
        img.src = "../images/numbers/" + num[i] + ".png";
        var id = "num" + i + this.imgs.length;
        img.id = id;
        this.imgs.push(id);
    }
}


MathExercise.prototype.printSign = function (sign){
    var mf = document.getElementById("exerciseFrame");
    var img = new Image();
    mf.appendChild(img);
    img.src = "../images/signs/" + sign + ".png";
    img.id = sign;
    this.imgs.push(sign);
}


MathExercise.prototype.nextExercise = function (){
    var answer = document.getElementById("answer");
    if (answer.value == ""){
        alert("Wprowadz odpowiedz");
        return false;
    }

    var answer_as_int  = parseInt(answer.value);
    if (answer_as_int || answer_as_int == 0){
        this.checkAndSaveAnswer(answer_as_int);
        this.prepareData();
        return true;
    } else {
        alert("Wprowadz poprawne dane");
        answer.value = "";
        return false;
    }
}


MathExercise.prototype.checkAndSaveAnswer = function (answer){
    var expectedAnswer = this.getExpectedAnswer();
    var stats = {exercise: this.number1 + " " + this.sign + " " + this.number2,
                expectedAnswer: expectedAnswer,
                answer: answer,
                correct: answer == expectedAnswer};
    this.stats.push(stats);
    this.appendResultsToStats(stats);
    document.getElementById("answer").value = "";
}


MathExercise.prototype.appendResultsToStats = function (stats){
    var tableRef = document.getElementById('statsTable')
    var newRow   = tableRef.insertRow(tableRef.rows.length);
    var newCell  = newRow.insertCell(0);
    newCell.appendChild(document.createTextNode(stats.expectedAnswer));
    newCell  = newRow.insertCell(0);
    newCell.appendChild(document.createTextNode(stats.answer));
    newCell  = newRow.insertCell(0);
    newCell.appendChild(document.createTextNode(stats.exercise));
    newCell  = newRow.insertCell(0);
    newCell.appendChild(document.createTextNode(tableRef.rows.length-1));
    newCell  = newRow.insertCell(0);
    var img = new Image();
    newCell.appendChild(img);
    img.src = "../images/signs/" + (stats.correct ? "good": "wrong") + ".png";
}


MathExercise.prototype.getStats = function (){
    for(var i = 0; i < this.stats.length; i++){
        console.log("# " + i + " " + this.stats[i].exercise + " " + this.stats[i].expectedAnswer + " " + this.stats[i].answer + " " + this.stats[i].correct);
    }
}


function toggle(sDivId){
    var oDiv = document.getElementById(sDivId);
    oDiv.style.display = (oDiv.style.display == "block") ? "none" : "block";
}
