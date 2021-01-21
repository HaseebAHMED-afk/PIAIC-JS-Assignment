var start = document.getElementById('start-btn')

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

start.addEventListener('click' , () => {


    var fullName = prompt('Enter your full name')
    var dob = prompt('Enter your date of birth')
    var month = prompt("Enter your month of birth")
    var mob = months.indexOf(month)
    var yob = prompt('Enter your year of birth')

    var d1 = new Date(yob , mob, dob)

    var d2 = new Date()
    var dateNow = d2.getDate();
    var monthNow = months[d2.getMonth()]
    var yearNow = d2.getFullYear()
    var hourNow = d2.getHours()

    if(hourNow > 0 && hourNow < 12){
        alert('Good Morning '+fullName)
    }else if(hourNow > 12 && hourNow < 4 ){
        alert('Good Afternoon '+fullName)
    }else{
        alert('Good Evening '+fullName)
    }

    alert('Your date of birth is '+d1)

    alert('You are '+(yearNow - yob)+' years, '+(mob > d2.getMonth() ? mob - d2.getMonth() : d2.getMonth() - mob)+' months, '+(dateNow > dob ? dateNow - dob : dob - dateNow)+' days old')

    alert('Your age in days is '+(yearNow - yob)*365)

    if(yearNow-yearNow===0 && dob-dateNow===0 && month - d2.getMonth()===0){
        alert('Happy Birthday '+fullName)
    }else{
        alert('Time until next birthday? '+(mob-d2.getMonth())+' months, '+(31 - dateNow)+' days'+(d1.getHours())+' hours')
    }
    
})