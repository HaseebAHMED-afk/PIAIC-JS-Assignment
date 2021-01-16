var start = document.getElementById('start-btn')

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

start.addEventListener('click' , () => {

    var name = prompt('Ener your name')
    // var date = prompt('Enter your date of birth')
    // var month = prompt('Enter your month of birth')
    // var year = prompt('Enter your year of birth')

    
    var d = new Date()
    var dateNow = d.getDate()
    var monthNow =d.getMonth()
    var yearNow = d.getFullYear()
    var timeNow = d.getHours()

    alert(`Hello ${name}. You are  `)
})