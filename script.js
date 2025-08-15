// Mobile nav + active link
const t = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
t?.addEventListener('click', ()=>{ const open = nav.classList.toggle('show'); t.setAttribute('aria-expanded', open?'true':'false'); });
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => { if(a.getAttribute('href')===page) a.classList.add('active'); });

// Smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); nav?.classList.remove('show'); t?.setAttribute('aria-expanded','false'); }
  });
});

// Contact mailto
function wireForm(id, noteId){
  const f=document.getElementById(id); const note=document.getElementById(noteId);
  if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const fd=new FormData(f);
    const name=encodeURIComponent(fd.get('name')||'');
    const email=encodeURIComponent(fd.get('email')||'');
    const msg=encodeURIComponent(fd.get('message')||'');
    const subj=encodeURIComponent(`Upit — ${decodeURIComponent(name)}`);
    const body=encodeURIComponent(`Ime: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0A${decodeURIComponent(msg)}`);
    window.location.href=`mailto:tsolutionsdev@outlook.com?subject=${subj}&body=${body}`;
    if(note) note.textContent="Otvara se e-mail klijent. Ako se ne otvori, piši na tsolutionsdev@outlook.com.";
  });
}
wireForm('contactForm','contactNote');
