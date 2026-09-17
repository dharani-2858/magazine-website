document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky masthead condenses on scroll ---------- */
  const masthead = document.getElementById('masthead');
  const onScroll = () => {
    masthead.classList.toggle('condensed', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  // close mobile nav after choosing a link
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Search panel ---------- */
  const searchToggle = document.getElementById('searchToggle');
  const searchPanel = document.getElementById('searchPanel');
  const searchForm = document.getElementById('searchForm');
  const searchHint = document.getElementById('searchHint');

  searchToggle.addEventListener('click', () => {
    const isOpen = searchPanel.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) searchForm.querySelector('input').focus();
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchForm.querySelector('input').value.trim();
    const cards = Array.from(document.querySelectorAll('.card h3'));
    const match = cards.find(h3 => h3.textContent.toLowerCase().includes(query.toLowerCase()));
    if (!query) {
      searchHint.textContent = '';
    } else if (match) {
      searchHint.textContent = `Found: “${match.textContent}” — jumping there now.`;
      match.closest('.card').scrollIntoView({ behavior: 'smooth', block: 'center' });
      match.closest('.card').style.outline = '2px solid var(--oxblood)';
      setTimeout(() => { match.closest('.card').style.outline = 'none'; }, 1600);
    } else {
      searchHint.textContent = `No results for “${query}” in this issue.`;
    }
  });

  /* ---------- Category filtering (nav links + chip row) ---------- */
  const cards = document.querySelectorAll('.card');
  const chips = document.querySelectorAll('.filter-chip');
  const navFilterLinks = document.querySelectorAll('.primary-nav a[data-filter]');
  const emptyState = document.getElementById('emptyState');
  const issueSection = document.getElementById('issue');

  function applyFilter(filter) {
    let visibleCount = 0;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hide', !show);
      if (show) visibleCount++;
    });
    emptyState.hidden = visibleCount !== 0;

    chips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.filter === filter);
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });

  navFilterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      applyFilter(link.dataset.filter);
      issueSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterStatus = document.getElementById('newsletterStatus');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail.value.trim();
    const validPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validPattern.test(email)) {
      newsletterStatus.textContent = 'That doesn\u2019t look like a valid email — mind checking it?';
      newsletterStatus.style.color = '#8B2E2E';
      return;
    }

    newsletterStatus.textContent = `Subscribed — issue No. 48 will land in ${email}.`;
    newsletterStatus.style.color = '#1C1B17';
    newsletterForm.reset();
  });

});
