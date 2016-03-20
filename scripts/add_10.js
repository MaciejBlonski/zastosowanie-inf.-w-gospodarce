MathExercise.prototype.getExpectedAnswer = function (){
    return this.number1 + this.number2;
}


var exercise = new MathExercise(10, "plus", "+");
window.onload = function(){
    exercise.prepareData();
};
