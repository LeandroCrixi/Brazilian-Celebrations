const initModal = () => {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  const toggleModal = (e) => {
    e.preventDefault();
    containerModal.classList.toggle("active");
  };

  const outClickModal = (e) => {
    if (e.target === containerModal) {
      toggleModal(e);
    }
  };

  btnOpen.addEventListener("click", toggleModal);
  btnClose.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", outClickModal);
};

export default initModal();
