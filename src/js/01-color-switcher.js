
const bodyStyle = document.querySelector("body");
const startSwitch = document.querySelector('[data-start]');
const stopSwitch = document.querySelector('[data-stop]');
let timer = null;
// Додаємо слухача на кнопки старт та стоп
startSwitch.addEventListener('click', startRandomizer);

stopSwitch.addEventListener('click', stopRandomizer );

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
console.log(bodyStyle.style.backgroundColor);
function startRandomizer() {
    startSwitch.setAttribute('disabled', 'true');
    stopSwitch.removeAttribute('disabled');
    timer = setInterval(() => {
    bodyStyle.style.backgroundColor = getRandomHexColor();
    }, 350);
}
function stopRandomizer() {
    startSwitch.removeAttribute('disabled');
    stopSwitch.setAttribute('disabled', 'true');
    clearInterval(timer);
}