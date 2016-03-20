MathExercise.prototype.randNewNumbers = function (range){
    this.number1 = Math.floor((Math.random() * this.range) + 1);
    this.number2 = Math.floor((Math.random() * this.number1) + 1);
}



MathExercise.prototype.getExpectedAnswer = function (){
    return this.number1 - this.number2;
}


var exercise = new MathExercise(10, "minus", "-");
window.onload = function(){
    exercise.prepareData();
};
