(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-i]"),
    closeModalBtn: document.querySelector("[data-modal-close-i]"),
    modal: document.querySelector("[data-modal-i]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-c]"),
    closeModalBtn: document.querySelector("[data-modal-close-c]"),
    modal: document.querySelector("[data-modal-c]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-m]"),
    closeModalBtn: document.querySelector("[data-modal-close-m]"),
    modal: document.querySelector("[data-modal-m]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();