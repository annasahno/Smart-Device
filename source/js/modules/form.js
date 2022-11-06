let phoneInputs = document.querySelectorAll('input[type="tel"]');

const getInputNumbers = (input) => {
  return input.value.replace(/\D/g, '');
};

const onInput = (e) => {
  let input = e.target;
  let inputNumbers = getInputNumbers(input);
  let formattedInputNumber = '';

  formattedInputNumber = '+7';

  if (!inputNumbers) {
    formattedInputNumber = '';
  }

  if (inputNumbers.length === 1) {
    inputNumbers = '7' + inputNumbers;
  }

  if (inputNumbers.length > 1) {
    formattedInputNumber += ' (' + inputNumbers.substring(1, 4);
  }
  if (inputNumbers.length >= 5) {
    formattedInputNumber += ') ' + inputNumbers.substring(4, 7);
  }
  if (inputNumbers.length >= 8) {
    formattedInputNumber += '-' + inputNumbers.substring(7, 9);
  }
  if (inputNumbers.length >= 10) {
    formattedInputNumber += '-' + inputNumbers.substring(9, 11);
  }

  input.value = formattedInputNumber;
};

const onInputKeyDown = (e) => {
  const input = e.target;
  if (e.keyCode === 8 && getInputNumbers(input).length <= 2) {
    input.value = '';
  }
};

const validateForm = () => {
  phoneInputs.forEach((phoneInput) => {
    phoneInput.addEventListener('input', onInput);
    phoneInput.addEventListener('keydown', onInputKeyDown);
  });
};

export {validateForm};
