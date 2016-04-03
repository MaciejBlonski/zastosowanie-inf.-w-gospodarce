equation = function(){

	this.equat=[];	
	this.stats=[];
        this.x,this.sign,this.y,this.z,this.expectedAnswer;
}

equation.prototype.prepareData = function()
{
    mImgs.deleteImages();
    
    this.init();
    

      
}

equation.prototype.init = function()
{
    document.getElementById("answer").value="";
    var pos=Math.floor(Math.random()*3);
    var tab=["+","-","*",":"];
    var signid=Math.floor(Math.random()*4);
    
    this.x=Math.floor(Math.random()*9+1);
    this.y=Math.floor(Math.random()*9+1);
    this.sign=tab[signid];
    
    if(this.sign=="-" && this.x<this.y)
    {
        this.x+=this.y;
        this.y=this.x-this.y;
        this.x-=this.y;
    }
    
    var x1=Math.floor(Math.random()*10)+1;
    var y1=Math.floor(Math.random()*x1)+1;
    
    switch(this.sign)
    {
        case "+":
            this.x*=x1; this.y*=y1;
            this.z=this.x+this.y;
            break;
        case "-":
            this.x*=x1; this.y*=y1;
            this.z=this.x-this.y;
            break;
        case "*":
            this.z=this.x*this.y;
            break;
        case ":":
            if(this.y==0)
            {
                this.y=Math.floor(Math.random()*9)+1;
                this.z=this.x*this.y;
            }
            this.z=this.x;
            this.x*=this.y;
            break;
    }
    
    this.equat=[this.x,this.sign,this.y,"=",this.z];
    
    var q;
     
    switch(pos)
    {
        case 0:
            q=['?',this.sign,this.y,"=",this.z];
            this.expectedAnswer=this.x;
            break;
        case 1:
            q=[this.x,this.sign,'?',"=",this.z];
            this.expectedAnswer=this.y;
            break;
        case 2:
            q=[this.x,this.sign,this.y,"=",'?'];
            this.expectedAnswer=this.z;
            break;        
    }
   
   for(var i=0;i<5;++i)
   {
       typeof(q[i])==typeof(":)")  ?  mImgs.displaySign(q[i])   :    mImgs.printNumber(q[i]);
   }
    
}

equation.prototype.nextExercise= function ()
{
    //check condiotions
    this.answer=document.getElementById("answer").value;
        
        
	if(!(parseInt(document.getElementById("answer").value)>-1))
	{
		alert("Wprowadz poprawne dane!");
                document.getElementById("answer").value="";
		return false;
	}
        if(this.equat[1]==":" && document.getElementById("answer").value==0)
        {
            alert("Nie można dzielić przez 0!");
            return false;
        }
    this.stats.push({exercise:this.equat.join(""),
                expectedAnswer: this.expectedAnswer,
                answer: this.answer,
                correct: this.answer == this.expectedAnswer});
            
    /*for(var i = 0; i < this.stats.length; i++){
        console.log("# " + i + " exercise: " + this.stats[i].exercise + " expectedAnswer: " + this.stats[i].expectedAnswer + " answer: " + this.stats[i].answer + " correct: " + this.stats[i].correct);
    }*/

    mImgs.appendResultsToStats(this.stats[this.stats.length-1]);
    

    this.prepareData();
}



var exercise = new equation();
var mImgs = new imgsAndStats();


window.onload = function(){
   exercise.prepareData();
};
