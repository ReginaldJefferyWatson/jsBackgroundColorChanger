const changeColorButton = document.querySelector('[data-change-color]');

function randColor() {
    options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    value = ['#'];
    for(let i = 0; i < 6; i++) {
        value.push(options[Math.floor(Math.random()*16)]);
    }
    return value.join('');
}

function changeColor() {
    value = randColor();
    document.body.style='background-color:'+value;
    document.getElementById('background-color-text').innerText = value;
}

changeColorButton.addEventListener('click', () => {
    console.log("Got here")
    changeColor();
})

