'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//querySelector은 여러개의 요소를 선택했을 때, 첫번째것만 선택이 됨.

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  //classtList로 class 추가 및 삭제 등 제어 가능
  overlay.classList.remove('hidden');
  //hidden class를 지정함으로써 다양한 요소 제어 가능
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//키보드 이벤트에 반응하게 하기
//키보드 이벤트는 글로벌 이벤트임
document.addEventListener('keydown', function (e) {
  console.log(e.key); //.key로 원하는 property name지정
  //어떤 키가 눌렸는지 알려면 인수(e)를 설정해라

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
