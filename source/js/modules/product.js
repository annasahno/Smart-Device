const breakpoint = window.matchMedia('(max-width:767px)');

const changeText = () => {
  if (breakpoint.matches) {
    document.querySelectorAll('[data-phone-text]').forEach((item) => {
      item.textContent = item.getAttribute('data-phone-text');
    });
  }
};

breakpoint.addListener(changeText);

export {changeText};
