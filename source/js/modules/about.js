const breakpoint = window.matchMedia('(max-width:767px)');
const section = document.querySelector('.about');
const toggle = document.querySelector('[data-about-toggle]');

const openMore = () => {
  if (section && toggle) {
    toggle.addEventListener('click', () => {
      let blocksText;

      if (breakpoint.matches) {
        blocksText = section.querySelectorAll('[data-about-text]');
      } else {
        blocksText = section.querySelectorAll('[data-about-text="close-desktop"]');
      }

      blocksText.forEach((item) => {
        if (item.classList.contains('is-close')) {
          item.classList.remove('is-close');
          toggle.innerHTML = 'Свернуть';
        } else {
          item.classList.add('is-close');
          toggle.innerHTML = 'Подробнее';
        }
      });
    });
  }
};

export {openMore};
