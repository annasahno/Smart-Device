const toggleAccordion = () => {
  document.querySelectorAll('[data-accordion-toggle]').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      if (parent.classList.contains('is-open')) {
        parent.classList.remove('is-open');
      } else {
        document.querySelectorAll('.is-open').forEach((child) => {
          child.classList.remove('is-open');
        });
        parent.classList.add('is-open');

      }
    });
  });
};

export {toggleAccordion};
