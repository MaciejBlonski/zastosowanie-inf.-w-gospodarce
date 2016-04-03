imgsAndStats = function(){
    this.imgs=[];
}

imgsAndStats.prototype.getImg = function(src){
	var mf = document.getElementById("exerciseFrame");
	var img = new Image();
	mf.appendChild(img);
	img.id=img.src=src;
	this.imgs.push(img.id);
}

imgsAndStats.prototype.deleteImages = function ()
{
    while (this.imgs.length > 0){
        var imgId = this.imgs.pop();
        var img = document.getElementById(imgId);
        img.parentNode.removeChild(img);
    }
}

imgsAndStats.prototype.printNumber = function (number){
    var num = number.toString();
    for (var i = 0; i < num.length; i++){
        this.getImg('../imgs/numbers/'+ num[i] + ".png");
    }
}

imgsAndStats.prototype.displaySign = function(sign){
    switch(sign){
        case "+":
            this.getImg('../imgs/signs/plus.png');
            return;
        case "-":
            this.getImg('../imgs/signs/minus.png');
            return;
        case "*":
            this.getImg('../imgs/signs/multiply.png');
            return;
        case "=":
            this.getImg('../imgs/signs/equal.png');
            return;
        case ":" : case "/":
            this.getImg('../imgs/signs/divide.png');
            return;
        default:
            this.getImg('../imgs/signs/question_mark.png');
    }
}


function toggle(sDivId){
    var oDiv = document.getElementById(sDivId);
    oDiv.style.display = (oDiv.style.display == "block") ? "none" : "block";
}

imgsAndStats.prototype.appendResultsToStats = function (stats){
    var tableRef = document.getElementById('statsTable')
    var newRow   = tableRef.insertRow(1);
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
    img.src = "../imgs/signs/" + (stats.correct ? "good": "wrong") + ".png";
}