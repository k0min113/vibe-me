const modal = document.querySelector('#modal');
const contactBtn = document.querySelector('#contactBtn');
const closeBtn = document.querySelector('#closeBtn');

// 연락처 보기 → 모달 열기
contactBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

// 닫기 → 모달 닫기
closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// 어두운 배경 클릭 시에도 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('is-open');
  }
});
