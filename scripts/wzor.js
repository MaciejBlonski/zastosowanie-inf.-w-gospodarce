function Suma(){
var f=document.forms["formularz"];
var l1=parseInt(f.l1.value);
var l2=parseInt(f.l2.value);

f.wynik.value=Math.floor((Math.random() * 10) + 1);
return false;
}
function Iloczyn(){
var f=document.forms["formularz"];
var l1=parseInt(f.l1.value);
var l2=parseInt(f.l2.value);
f.wynik.value=l1*l2;
return false;
}
function Iloraz(){
var f=document.forms["formularz"];
var l1=parseInt(f.l1.value);
var l2=parseInt(f.l2.value);
var wynik;
f.wynik.value=l1/l2;
wynik=Number(wynik).toFixed(2)
if (L2=0){
alert("Nie dziel przez 0!");}
return false;
}

