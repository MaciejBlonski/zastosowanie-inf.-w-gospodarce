whatFigure = function(){
    this.imgs=[];
    this.expectedAnswer=[];
    this.answer;
    this.stats=[];
}

var exercise = new whatFigure();
var mImgs = new imgsAndStats();

whatFigure.prototype.prepareData = function()
{
    mImgs.deleteImages();
    this.init();
}

whatFigure.prototype.init= function(){
	document.getElementById("exerciseFrame").innerHTML="";
	var numFigures=8;
	var numImages=3;


	var figureId=Math.floor(Math.random()*numFigures);
	var figureName;
	switch(figureId)
	{
		case 0:
			this.expectedAnswer=["okrąg"];
			figureName="circle";
			break;
		case 1:
			this.expectedAnswer=figureName=["deltoid"];
			break;
		case 2:
			this.expectedAnswer=["równoległobok"];
			figureName="parallelogram";
			break;
		case 3:
			this.expectedAnswer=["prostokąt","równoległobok"];
			figureName="rectangle";
			break;
		case 4:
			this.expectedAnswer=["romb","równoległobok"];
			figureName="rhombus"
			break;
		case 5:
			this.expectedAnswer=["kwadrat","prostokąt","równoległobok","romb"];
			figureName="square";
			break;
		case 6:
			this.expectedAnswer=["trapez"];
			figureName="trapeze";
			break;
		case 7:
			this.expectedAnswer=["trójkąt"];
			figureName="triangle";	
			break;
		defaultkey: "value", 
			allert("error");
			break;	
	}

mImgs.getImg("../imgs/figures/"+figureName+"/"+figureName+(Math.floor(Math.random()*numImages)+1).toString()+".png");
document.getElementById("exerciseFrame").innerHTML+="Co to za figura?";
}

whatFigure.prototype.nextExercise= function(){

	if(document.getElementById("answer").value=="")
    {
        alert("Wprowadź poprawne dane!");
        return;
    }

   this.answer=document.getElementById("answer").value;

   
   this.stats.push({exercise:this.expectedAnswer[0], expectedAnswer:this.expectedAnswer[0], answer: this.answer, correct:(this.expectedAnswer.indexOf(this.answer) > -1)});
    
    mImgs.appendResultsToStats(this.stats[this.stats.length-1]);
    this.prepareData();
}

window.onload = function(){
   exercise.prepareData();
};