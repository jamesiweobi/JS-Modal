// select modal-btn,modal-overlay,close-btn

const openModal = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal');
});
btnClose.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
});
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
