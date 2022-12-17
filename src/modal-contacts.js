(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-l]'),
    closeModalBtn: document.querySelector('[data-modal-close-l]'),
    modal: document.querySelector('[data-modal-l]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-f]'),
    closeModalBtn: document.querySelector('[data-modal-close-f]'),
    modal: document.querySelector('[data-modal-f]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
