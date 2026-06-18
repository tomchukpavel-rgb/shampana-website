// ── WAITLIST FORM ──
function handleWaitlist(btn) {
  const input = btn.previousElementSibling;
  const val = input.value.trim();
  if (!val) {
    input.style.borderColor = 'var(--teal)';
    input.placeholder = 'Введіть Instagram або телефон';
    return;
  }
  btn.textContent = '✓ Додано';
  btn.style.background = 'var(--gold)';
  input.value = '';
  input.placeholder = 'Дякуємо! Ми повідомимо вас першими.';
  input.disabled = true;
  btn.disabled = true;
}

// ── NAV ACTIVE STATE ON SCROLL ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.opacity = a.getAttribute('href') === '#' + current ? '1' : '0.75';
  });
});
