const slider = document.querySelector("#slider")
const button = document.querySelector("#knopp")
const speaker = document.querySelector("#speaker")
const aal1 = document.querySelector("#aal1")
const text = document.querySelector("#textcontainer")
const audiocontrol = document.querySelector("#audiocontrol")
var audio = new Audio('ogg/shota.ogg');




button.addEventListener('click', (event) => {
    audio.play();
    audiocontrol.style.opacity = (1);
    button.style.display = ("none");
    aal1.style.opacity = (0);
    aal1.className = ("animate");
    text.style.opacity = ("1")

});


slider.addEventListener('input', (event) => {
    audio.volume = slider.value / 100
});