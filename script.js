const reveals = document.querySelectorAll('.card, .hero__content, .hero__card, .footer');
const pdfDownloadButton = document.getElementById('pdf-download');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

for (const element of reveals) {
  element.classList.add('reveal');
  observer.observe(element);
}

if (pdfDownloadButton) {
  pdfDownloadButton.addEventListener('click', () => {
    window.print();
  });
}
