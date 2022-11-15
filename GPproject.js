var grade1=document.getElementById("grade1")  ;
var grade2=document.getElementById("grade2");
var grade3=document.getElementById("grade3");
var grade4=document.getElementById("grade4") ;
var grade5=document.getElementById("grade5") ;
var grade6=document.getElementById("grade6") ;
var grade7=document.getElementById("grade7") ;
var grade8=document.getElementById("grade8" ) ;
var grade9=document.getElementById("grade9" ) ;
var credit1=document.getElementById('credit1');
var credit2=document.getElementById('credit2');
var credit3=document.getElementById('credit3');
var credit4=document.getElementById('credit4');
var credit5=document.getElementById('credit5');
var credit6=document.getElementById('credit6');
var credit7=document.getElementById('credit7');
var credit8=document.getElementById('credit8');
var credit9=document.getElementById('credit9');
 
 


 

function calculateGP( ){
    var totalCredit= Number(credit1.value)+Number(credit2.value)+Number(credit3.value)+
 Number(credit4.value)+Number(credit5.value)+Number(credit6.value)+Number(credit7.value)+
 Number(credit8.value)+Number(credit9.value);
 const currentCredit = [];
 const grades = [[grade1.value, credit1.value], [grade2.value, credit2.value], [grade3.value, credit3.value], [grade4.value, credit4.value], [grade5.value, credit5.value],[grade6.value, credit6.value], [grade7.value, credit7.value], [grade8.value, credit8.value], [grade9.value, credit9.value]];
for(let i = 0; i < grades.length; i++)
{
switch (grades[i][0])
{
    case "A":
        currentCredit.push([5, Number(grades[i][1])])
        break;
    case "B":
        currentCredit.push([4, Number(grades[i][1])])
        break;
    case "C":
        currentCredit.push([3, Number(grades[i][1])])
        break;
    case "D":
        currentCredit.push([2, Number(grades[i][1])])
        break;
    case "E":
        currentCredit.push([1, Number(grades[i][1])])
        break;
    case "F":
        currentCredit.push([0, Number(grades[i][1])])
        break;

    default:
        break;
} 
}
let ans = 0;
for (let j = 0; j < currentCredit.length; j++) {
    ans+= (currentCredit[j][0] * currentCredit[j][1])
}

document.getElementById("gpa").innerHTML = ans/totalCredit;

 if (ans/totalCredit<=4.5){
    document.getElementById("comment").innerHTML
 }

  
 
 
}
   
 //Cant seem to find a way to turn each grade into its individual numerical value

  
  