let input=document.getElementById('amount');
let input1= document.getElementById('interest');
let span = document.querySelector('span');
let interestCalc=document.querySelector('button');

function calcInterest(value1,value2){
    answer= eval(`${(input.value*(input1.value)/100)} + ${input.value}`)
    span.innerHTML = "TOTAL AMOUNT:R" + answer
}
interestCalc.addEventListener('click',calcInterest)