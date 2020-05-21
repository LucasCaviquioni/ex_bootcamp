function changeColor() {
   coloredSquare.style.backgroundColor = 'rgb(' + redText.value + ',' + greenText.value + ',' +  blueText.value + ')'
    // coloredSquare.style.backgroundColor = 'rgb(250,0,45)'
}

let coloredSquare = document.getElementById('coloredSquare');

let redText = document.getElementById('redText');
let greenText = document.getElementById('greenText');
let blueText = document.getElementById('blueText');


let redRange = document.getElementById('redRange');
let greenRange = document.getElementById('greenRange');
let blueRange = document.getElementById('blueRange');

redRange.addEventListener('input', function () {
    redText.value = redRange.value;
    changeColor();
    console.log(coloredSquare);
});

greenRange.addEventListener('input', function () {
    greenText.value = greenRange.value;
    changeColor();
});

blueRange.addEventListener('input', function () {
    blueText.value = blueRange.value;
    changeColor();
});


