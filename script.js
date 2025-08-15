// Mobile nav + active link highlight
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle?.addEventListener('click', ()=>{
  const open = nav.classList.toggle('show');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  const href = a.getAttribute('href');
  if(href === path) a.classList.add('active');
});

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); nav?.classList.remove('show'); }
  });
});

// Footer year
document.querySelectorAll('.year').forEach(el=> el.textContent = new Date().getFullYear());

// Contact: mailto fallback + copy-to-clipboard
function setupContactForm(formId, noteId){
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = encodeURIComponent(fd.get('name')||'');
    const email = encodeURIComponent(fd.get('email')||'');
    const msg = encodeURIComponent(fd.get('message')||'');
    const subject = encodeURIComponent(`Upit sa sajta — ${decodeURIComponent(name)}`);
    const body = encodeURIComponent(
      `Ime i prezime: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0APoruka:%0A${decodeURIComponent(msg)}`
    );
    window.location.href = `mailto:tsolutionsdev@outlook.com?subject=${subject}&body=${body}`;
    if(note) note.textContent = "Otvara se tvoj e-mail klijent. Ako se ne otvori, pošalji na tsolutionsdev@outlook.com.";
  });
}
setupContactForm('contactForm','contactNote');
