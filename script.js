const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const whatsappPhone = '5511945197063';
const whatsappMessages = {
  'outra-composicao': 'Olá, conheci a RYUJIN e gostei da proposta KARV, mas gostaria de conversar sobre outra composição de revestimentos.',
  ryujin: 'Olá, conheci a RYUJIN e gostaria de conversar com a KARV sobre esta edição.'
};

const whatsappLinks = document.querySelectorAll('.js-whatsapp');

whatsappLinks.forEach((link) => {
  const context = link.dataset.context;
  const message = whatsappMessages[context] || whatsappMessages.ryujin;
  const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});
