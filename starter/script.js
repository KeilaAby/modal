'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Hiding the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Show Modal
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Looping all the three buttons
for (let index = 0; index < btnsOpenModal.length; index++) {
  const element = btnsOpenModal[index];

  //Opening Modal
  element.addEventListener('click', showModal);
}

//closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
