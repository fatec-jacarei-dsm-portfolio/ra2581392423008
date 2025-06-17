
// Ativar modo escuro por padrão ao carregar
document.body.classList.add("dark-mode");
document.getElementById("toggle-theme").textContent = "☀️";

// Animação de entrada para seções
function animateOnScroll() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      section.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Alternar tema claro/escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("toggle-theme");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
