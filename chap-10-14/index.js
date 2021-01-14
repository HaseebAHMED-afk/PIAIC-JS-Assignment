var btn = document.getElementById('cal');

btn.addEventListener('click' , () => {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var op = document.getElementById('sign').value;

    switch (op) {
        case '-':
            alert(num2-num1)
            break;
        case '+':
            alert(num2+num1)
            break

        case '*':
            alert(num1*num2)
            break
        
        case '/':
            alert(num2/num1)
            break
        default:
            alert('Error')
            break;
    }
})

var grade_btn = document.getElementById('grade_cal');


grade_btn.addEventListener('click' , () => {
    var course1 = Number(document.getElementById('course1').value)
    var course2 = Number(document.getElementById('course2').value)
    var course3 = Number(document.getElementById('course3').value)
    var course4 = Number(document.getElementById('course4').value)
    var course5 = Number(document.getElementById('course5').value)

    const total = 500;
    var result = ((course1+course2+course3+course4+course5) / total)*100

    alert('Your result is '+result+'%');
})