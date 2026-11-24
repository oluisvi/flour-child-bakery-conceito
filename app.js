const chips = [...document.querySelectorAll('.filter-chip')];
const cards = [...document.querySelectorAll('.bake-card')];
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const selected = chip.dataset.filter;
    chips.forEach((item) => {
      const active = item === chip;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  });
});
