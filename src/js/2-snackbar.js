import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const makePromise = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

const onSubmit = (event) => {
  event.preventDefault();
  const delay = Number(event.target.delay.value);
  const shouldResolve = event.target.state.value === 'fulfilled';

  makePromise({ delay, shouldResolve })
    .then(() => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
      });
    });
};

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);