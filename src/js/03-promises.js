
import Notiflix from 'notiflix';

const formInput = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector("button[type='submit'");

// amountInput.classList.add("amount-promises");
// submitBtn.addEventListener('submit',createPromise);
formInput.addEventListener('submit', evt => {
  evt.preventDefault();
  let delay = Number(delayInput.value);
  let step = Number(stepInput.value);
  let amount = Number(amountInput.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise({ position: i, delay: delay })
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    delay += step;
  }
});

const createPromise = ({ position, delay }) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};