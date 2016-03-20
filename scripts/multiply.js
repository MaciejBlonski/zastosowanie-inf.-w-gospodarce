MathExercise.prototype.getExpectedAnswer = function (){
    return this.number1 * this.number2;
}


var exercise = new MathExercise(9, "multiply", "*");
window.onload = function(){
    exercise.prepareData();
};
