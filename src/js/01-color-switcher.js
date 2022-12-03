
const body = document.querySelector("body");
const startSwitch = document.querySelector('[data-start]');
const stopSwitch = document.querySelector('[data-stop]');

// Додаємо слухача на кнопки старт та стопs
startSwitch.addEventListener("click", startRandomizer);

stopSwitch.addEventListener("click", stopRandomizer );

function startRandomizer(event){
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        body.style.backgroundColor = color;
        console.log(getRandomHexColor());
    }, 500);
    event.target.disabled = true;
    document.querySelector('[data-stop]').disabled = false;
    console.log(`Start RANDOMIZER`);
}

function stopRandomizer(event){
    clearInterval(timerId);
    event.target.disabled = true;
    document.querySelector('[data-start]').disabled = false;
console.log(`Stop RANDOMIZER`);

} 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
