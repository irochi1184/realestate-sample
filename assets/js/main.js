// 超軽いUI用：年号など（必要なら拡張）
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealItems.forEach((el) => obs.observe(el));
  }
});
