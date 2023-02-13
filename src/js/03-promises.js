const form = document.querySelector('.form');
const nameDelay = document.querySelector('[name="delay"]');
const nameStep = document.querySelector('[name="step"]');
const nameAmount = document.querySelector('[name="amount"]');

form.addEventListener('submit', formSubmit)

function formSubmit(event) {
  event.preventDefault();

  const firstStep = Number(nameDelay.value);
  const step = Number(nameStep.value);
  const amount = Number(nameAmount.value);

  let delay = firstStep;

  for (let i = 1; i <= amount; i += 1){
    createPromise(i, delay)
      .then(({ position, delay }) => console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => console.log(`❌ Rejected promise ${position} in ${delay}ms`))
    delay+=step}
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    })
}

  
