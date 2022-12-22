(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-a]'),
    closeModalBtn: document.querySelector('[data-modal-close-a]'),
    modal: document.querySelector('[data-modal-a]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
