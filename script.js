const modal = document.querySelector('#modal');
const contactBtn = document.querySelector('#contactBtn');
const closeBtn = document.querySelector('#closeBtn');
const themeToggle = document.querySelector('#themeToggle');

function openModal() {
  modal.classList.add('is-open');
  modal.removeAttribute('hidden');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('hidden', '');
}

// 저장된 테마 불러오기 (없으면 시스템 설정 따름)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} else if (prefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// 다크모드 토글
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';

  if (next === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  localStorage.setItem('theme', next);
});

// 연락처 보기 → 모달 열기
contactBtn.addEventListener('click', openModal);

// 닫기 → 모달 닫기
closeBtn.addEventListener('click', closeModal);

// 어두운 배경 클릭 시에도 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Esc 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
