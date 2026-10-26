const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  if (themeButton) {
    const light = theme === 'light';
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
  }
};
setTheme(root.dataset.theme || 'dark');
themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.section,.project,.closing');
if (reduceMotion) {
  revealItems.forEach((element) => { element.classList.add('in-view'); });
} else {
  const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  }), { threshold: 0.12 });
  revealItems.forEach((element) => {
    element.classList.add('reveal');
    io.observe(element);
  });
}
