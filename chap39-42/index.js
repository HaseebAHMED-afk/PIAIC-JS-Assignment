var submit = document.getElementById('submit')

function calculate(c1,c2,c3,c4,c5){
    const total = 500
    var percentage = ((c1+c2+c3+c4+c5)/total) * 100

    var grade;

    switch (true) {
        case percentage > 90 && percentage < 100:
            grade ='A+';
            break;
        
        case percentage > 75 && percentage < 90:
            grade ='A';
            break;

        case percentage > 75 && percentage < 60:
            grade ='B';
            break;

        case percentage > 60 && percentage < 45:
            grade ='C';
            break;

        case percentage > 30 && percentage < 45:
            grade = 'D';
            break;

        case percentage < 30:
            grade = 'F';
            break;
        default:
            grade = 'Error';
            break;
    }
}

submit.addEventListener('click' , () => {
    var course1 = Number(document.getElementById('c1').value)
    var course2 = Number(document.getElementById('c2').value)
    var course3 = Number(document.getElementById('c3').value)
    var course4 = Number(document.getElementById('c4').value)
    var course5 = Number(document.getElementById('c5').value)

    const total = 500
    var percentage = ((course1+course2+course3+course4+course5)/total) * 100

    console.log(percentage);

    var grade;

    switch (true) {
        case percentage > 90 && percentage < 100:
            grade ='A+';
            break;
        
        case percentage > 75 && percentage < 90:
            grade ='A';
            break;

        case percentage > 75 && percentage < 60:
            grade ='B';
            break;

        case percentage > 60 && percentage < 45:
            grade ='C';
            break;

        case percentage > 30 && percentage < 45:
            grade = 'D';
            break;

        case percentage < 30:
            grade = 'F';
            break;
        default:
            grade = 'Error';
            break;
    }
    
    alert('Your grade is '+grade)
})


