const removeNoJsClass = () => {
  document.querySelectorAll('.no-js').forEach((element) => element.classList.remove('no-js'));
};

export {removeNoJsClass};
