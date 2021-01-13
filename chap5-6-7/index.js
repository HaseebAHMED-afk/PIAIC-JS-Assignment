var btnA = document.getElementById('varA-btn');
var btnB = document.getElementById('varB-btn');

var a = 5;

var b = a++ + ++a - --a - a--;


btnA.addEventListener('click', () => {
    alert('Value of A is: '+a)
})

btnB.addEventListener('click', () =>{
    alert('Value of B is: '+b)
})