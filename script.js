// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      nav.classList.remove('show');
      toggle.setAttribute('aria-expanded','false');
    }
  });
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Contact form -> mailto (radi bez backenda)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = encodeURIComponent(data.get('name') || '');
  const email = encodeURIComponent(data.get('email') || '');
  const message = encodeURIComponent(data.get('message') || '');
  const subject = encodeURIComponent(`Upit sa sajta — ${decodeURIComponent(name)}`);
  const body = encodeURIComponent(
    `Ime i prezime: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0APoruka:%0A${decodeURIComponent(message)}`
  );
  window.location.href = `mailto:tsolutionsdev@outlook.com?subject=${subject}&body=${body}`;
  note.textContent = "Otvara se e‑mail klijent. Ako se ne otvori, pošalji direktno na tsolutionsdev@outlook.com.";
});
