
const body = document.querySelector("body");
const startSwitch = document.querySelector('[data-start]');
const stopSwitch = document.querySelector('[data-stop]');
let timer = null;
// Додаємо слухача на кнопки старт та стоп
startSwitch.addEventListener("click", startRandomizer);

stopSwitch.addEventListener("click", stopRandomizer );

console.log(bodyEll.style.backgroundColor);
function startRandomizer() {
    startSwitch.setAttribute('disabled', 'true');
    stopSwitch.removeAttribute('disabled');
    timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 350);
}
function stopRandomizer() {
    startSwitch.removeAttribute('disabled');
    stopSwitch.setAttribute('disabled', 'true');
    clearInterval(timer);
}
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }