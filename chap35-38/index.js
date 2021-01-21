var submit = document.getElementById('submit')
var factorialize = document.getElementById('factorize')

function capitalize(sample){
    var split = sample.toLowerCase().split(' ')
    for(var i = 0; i < split.length ;i++ ){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1)
    }
    var finalText = split.join(' ')
    
    return finalText
}

function factorial(num){
    if(num < 0){
        return 'Negative number does not have a factorial'
    }else if(num === 0){
        return 1
    }else{
        let fact =1 
        for(var i=1 ; i<=num ; i++){
            fact *=i
        }
        return fact
    }
}

submit.addEventListener('click' , () => {
    var input = document.getElementById('sample').value;
    
    console.log(capitalize(input));
})

factorialize.addEventListener('click',() => {
    var num =Number(document.getElementById('num').value);

    console.log(factorial(num));
})