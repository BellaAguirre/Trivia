document.getElementById('sectionQuestion').style.visibility='hidden';
document.getElementById('sectionQuiz').style.visibility='hidden';
function myFunction(){
   var name = document.getElementById('name').value;
   document.getElementById('sectionLogin').style.display='none';
    document.getElementById('nameUser').innerHTML='Bienvenida ' + name;
    document.getElementById('sectionQuestion').style.visibility='visible';
}
function aceptar()
{
    document.getElementById('sectionQuiz').style.visibility='visible';
    document.getElementById('sectionQuestion').style.display='none';
}
function cancelar()
{
    document.getElementById('cancel').innerHTML = 'Jugaremos luego :(';
    document.getElementById('sectionQuestion').style.display = 'none';
}
function evaluar()
{
    var correct=0;
    var questionOne=document.forms.quiz.answerOne.value;
    var questionTwo=document.forms.quiz.answerTwo.value;
    var questionThird=document.forms.quiz.answerThird.value;

    if(questionOne === 'Una sentencia')
    {
        document.getElementById('a1').style.color='green';
        correct++;
    }else{
        document.getElementById('a2').style.color='red';
        document.getElementById('a1').style.color='green';
    }
    if (questionTwo === 'marcado') {
        document.getElementById('a4').style.color='green';
        correct++;
    }else{
        document.getElementById('a3').style.color='red';
        document.getElementById('a4').style.color='green';
    }
    if (questionThird === 'number') {
        document.getElementById('a6').style.color='green';
        correct++;
    }else{
        document.getElementById('a5').style.color='red';
        document.getElementById('a6').style.color='green';
    }
    
    document.getElementById('eval').style.display='none';
    document.getElementById('score').innerHTML='tu puntaje es ' + correct + ' de 3 preguntas';
}

