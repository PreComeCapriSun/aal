const slider = document.querySelector('#slider');
const aal = document.querySelector('#aal');
const sakko = document.querySelector('#sakko');
const body = document.querySelector('body')

slider.addEventListener('input', (event) => {
    sakko.style.filter = " saturate(" + slider.value * 3 + "%)";
    aal.style.width = (slider.value + 'vw');
});