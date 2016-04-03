circumferences = function(){
    this.figure;
    this.numSides;
    this.sideLength=[];
    this.expectedAnswer=0;
    this.stats=[];
}

circumferences.prototype.prepareData = function()
{
    mImgs.deleteImages();
    this.init();
}

circumferences.prototype.init= function(){
    document.getElementById("answer").value="";
    document.getElementById("exerciseFrame").innerHTML="";
    var figures=["kwadratu", "trójkąta", "prostokąta"];
    this.figure=Math.floor(Math.random()*3);
    this.numSides=3+this.figure%2;
    
    
    var range=20;
    var x,y=0;
            
    switch(this.figure)
    {
        case 0:
            this.sideLength=[x=Math.floor(Math.random()*(range-1))+1,x,x,x]; 
            mImgs.getImg("../imgs/figures/square.png");
            break;
        case 1:
            this.sideLength=[x=Math.floor(Math.random()*(range-1))+1,y=Math.floor(Math.random()*(range-1))+1,Math.floor(Math.random()*((x+y-1)-(x>y?x:y)))+(x>y?x:y)]; 
            mImgs.getImg("../imgs/figures/triangle.png");
            break;
        case 2:
            this.sideLength=[x=Math.floor(Math.random()*(range-1))+1,x,x=Math.floor(Math.random()*(range-1))+1,x]; 
            mImgs.getImg("../imgs/figures/rectangle.png");
            break;
    }
    
    for(var i=0;i<this.numSides;++i)
        this.expectedAnswer+=this.sideLength[i];
    

    var sides=this.figure!=1?(this.figure==0?[this.sideLength[0]]:[this.sideLength[0],this.sideLength[2]]):this.sideLength;

    document.getElementById("exerciseFrame").innerHTML+="Podaj obwód "+figures[this.figure]+" o bokach o dlugości: "+sides.join(",");


    
}

circumferences.prototype.nextExercise= function(){
    this.answer=document.getElementById("answer").value;

    i

if(!(parseInt(document.getElementById("answer").value)>-1))
    {
        alert("Wprowadź poprawne dane!");
                document.getElementById("answer").value="";
        return false;
    }

    
    this.expectedAnswer=this.sideLength.reduce(function(pv, cv) { return pv + cv; }, 0);

    this.stats.push({exercise:this.sideLength.join(","), expectedAnswer:this.expectedAnswer, answer: this.answer, correct:this.expectedAnswer==this.answer});

    for(var i = 0; i < this.stats.length; i++){
        console.log("# " + i + " exercise: " + this.stats[i].exercise + " expectedAnswer: " + this.stats[i].expectedAnswer + " answer: " + this.stats[i].answer + " correct: " + this.stats[i].correct);
    }
    mImgs.appendResultsToStats(this.stats[this.stats.length-1]);
    

    this.prepareData();
}



var exercise = new circumferences();
var mImgs = new imgsAndStats();


window.onload = function(){
   exercise.prepareData();
};