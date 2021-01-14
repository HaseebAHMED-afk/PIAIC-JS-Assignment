var text = document.getElementById('text').innerHTML;

var btn = document.getElementById('submit')

btn.addEventListener('click' , () => {
    var slice = Math.ceil(Number(document.getElementById('slice').value));
    var slicedText = text.slice(0,slice)
    var reverseText = '';

    for (let index = slicedText.length -1; index >= 0; index--) {
        reverseText += slicedText[index]
    }
    alert(reverseText);
})

var capitalize = document.getElementById('capitalize');

capitalize.addEventListener('click' , () => {
    var sampleText = document.getElementById('sample').value;
    var split = sampleText.toLowerCase().split(' ')
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);     
    }
   var finalText = split.join(' ')
    console.log(finalText);

})
