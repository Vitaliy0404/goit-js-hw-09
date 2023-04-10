const refs = {
    changeBodyColor: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop'),
}

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    refs.btnStop.removeAttribute('disabled');

    intervalId = setInterval(() => {
    refs.changeBodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

refs.btnStop.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    refs.btnStart.removeAttribute('disabled');

    clearInterval(intervalId);
});
