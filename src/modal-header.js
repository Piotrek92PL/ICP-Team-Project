(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open-h1]'),
    openModalBtn2: document.querySelector('[data-modal-open-h2]'),
    closeModalBtn: document.querySelector('[data-modal-close-h]'),
    modal: document.querySelector('[data-modal-h]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
