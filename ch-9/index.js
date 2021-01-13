var btn = document.getElementById('submit');

btn.addEventListener('click' , () => {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var age = document.getElementById('age').value;

    if(fName === '' || lName==='' || age===''){
        alert('Form Incomplete')
        event.preventDefault()
    }else{
    alert('Hello '+fName+" "+lName+", you are "+age+" years old")
}
})