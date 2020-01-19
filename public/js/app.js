var hintButton = document.querySelector('#content button')
var hint = document.getElementsByClassName('hint')[0];
hint.style.display = 'none'

hintButton.addEventListener('click', () => {
    hintButton.style.display = 'none';
    hint.style.display = 'block'
});
