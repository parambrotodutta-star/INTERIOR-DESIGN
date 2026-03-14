<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Designer Nest — Luxury Interiors (South Kolkata)</title>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<style>
  :root{
    --accent1: #06b6d4; /* teal */
    --accent2: #7c3aed; /* purple */
    --glass: rgba(255,255,255,0.06);
    --glass-2: rgba(255,255,255,0.08);
    --text-dark: #0b1220;
  }

  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    margin:0;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(135deg,#071426 0%, #0f172a 40%, #071122 100%);
    color:#fff;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  /* NAVBAR (glass) */
  nav{
    position:fixed;
    left:0;right:0;top:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:18px 40px;
    gap:12px;
    z-index:1005;
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(8px) saturate(120%);
    border-bottom: 1px solid rgba(255,255,255,0.03);
  }
  .brand{ display:flex; gap:14px; align-items:center; }
  .logo{
    width:44px;height:44px;border-radius:10px;
    background: linear-gradient(135deg,var(--accent1),var(--accent2));
    display:flex;align-items:center;justify-content:center;font-weight:700;
    font-family: "Playfair Display"; color:#02101a;
    box-shadow: 0 6px 22px rgba(124,58,237,0.12);
  }
  nav .links{ display:flex; gap:18px; align-items:center; }
  nav a{ color:rgba(255,255,255,0.95); text-decoration:none; font-weight:500; font-size:15px; opacity:0.95 }
  nav .controls{ display:flex; gap:12px; align-items:center; }
  .mode-btn{
    padding:8px 12px;border-radius:10px;border:none;background:transparent;color:#fff;cursor:pointer;
    backdrop-filter: blur(4px);
  }

  /* HERO: video background */
  .hero{
    position:relative;
    height:92vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    overflow:hidden;
  }
  /* video fills */
  .hero video{
    position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;
    filter: saturate(0.95) contrast(.95) brightness(.75);
    transform: scale(1.03);
  }
  .hero .overlay{
    position:absolute; inset:0; background:linear-gradient(180deg, rgba(3,10,20,0.35), rgba(3,10,20,0.55)); z-index:1;
  }
  .hero .content{
    position:relative; z-index:2; max-width:1100px; padding:40px;
    color:#fff;
  }
  .eyebrow{ font-weight:600; color:rgba(255,255,255,0.9); opacity:0.95; letter-spacing:1px; margin-bottom:10px; }
  .hero h1{
    font-family:"Playfair Display"; font-size:54px; line-height:1.02; margin:0 0 12px 0;
    text-shadow: 0 10px 30px rgba(2,6,10,0.6);
    transform-origin:center;
    animation: heroIn .9s ease both;
  }
  .hero p{ opacity:0.9; font-size:18px; max-width:900px; margin:12px auto 20px; color:rgba(255,255,255,0.92) }

  .cta{
    display:inline-block; padding:14px 28px; border-radius:999px; border:none; font-weight:600;
    background: linear-gradient(90deg,var(--accent1),var(--accent2));
    color:#02101a; cursor:pointer; box-shadow: 0 12px 36px rgba(7,22,50,0.35);
    transform:translateZ(0);
  }

  @keyframes heroIn{
    from{ opacity:0; transform: translateY(-22px) scale(.98); }
    to{ opacity:1; transform: translateY(0) scale(1); }
  }

  /* floating blobs */
  .blob{
    position:absolute; width:420px; height:420px; border-radius:50%;
    filter: blur(120px); opacity:0.35; z-index:0;
    background: radial-gradient(circle at 30% 30%, rgba(6,182,212,0.95), rgba(124,58,237,0.9) 55%, rgba(124,58,237,0.7) 100%);
    animation: floaty 9s ease-in-out infinite;
  }
  .blob.b2{ right:-120px; top:8vh; animation-delay:2s; width:380px; height:380px; }
  .blob.b1{ left:-140px; top:-120px; animation-delay:0s; }
  @keyframes floaty{ 0%{ transform:translateY(0) } 50%{ transform:translateY(-48px) } 100%{ transform:translateY(0) } }

  /* glass section wrapper */
  .glass{
    margin:40px auto; max-width:1200px; border-radius:16px;
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
    backdrop-filter: blur(14px) saturate(120%);
    padding:34px;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: 0 14px 40px rgba(2,6,10,0.6);
    transform-style:preserve-3d;
  }

  .section-title{ font-family:"Playfair Display"; font-size:30px; color: #e6f9ff; text-align:center; margin-bottom:22px; }

  /* portfolio filters */
  .filters{ display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:18px; }
  .filters button{
    border:none; padding:8px 16px; border-radius:999px; cursor:pointer; background: rgba(255,255,255,0.03); color: #eaf6fb;
  }
  .filters button.active{ background: linear-gradient(90deg,var(--accent1),var(--accent2)); color: #02101a; box-shadow: 0 10px 30px rgba(6,182,212,0.12); transform:scale(1.03) }

  /* portfolio grid (masonry-like) */
  .portfolio-grid{
    display:grid; grid-template-columns: repeat(3, 1fr); gap:18px;
  }
  @media (max-width:980px){ .portfolio-grid{ grid-template-columns:repeat(2,1fr) } }
  @media (max-width:640px){ .portfolio-grid{ grid-template-columns:1fr } }

  .proj{
    position:relative; overflow:hidden; border-radius:12px; cursor:pointer;
    transform: translateZ(0);
    transition: transform .45s cubic-bezier(.2,.9,.3,1), box-shadow .45s;
    will-change: transform;
  }
  .proj img{ width:100%; height:340px; object-fit:cover; display:block; transition: transform .8s ease; }
  .proj .meta{
    position:absolute; left:16px; bottom:16px; z-index:3; color:#02101a;
    background: linear-gradient(90deg, rgba(255,255,255,0.98), rgba(255,255,255,0.96));
    padding:8px 12px; border-radius:10px; font-weight:600; font-size:14px; box-shadow: 0 6px 22px rgba(2,6,10,0.15);
    transform: translateY(6px);
  }
  .proj .label{
    position:absolute; right:12px; top:12px; z-index:3; background: rgba(0,0,0,0.45); color:#fff; padding:8px 10px; border-radius:10px; font-weight:600; font-size:13px;
  }

  /* 3D tilt on hover: combine transform with mouse tracking via JS */
  .proj.tilt{ transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02); box-shadow: 0 30px 60px rgba(2,6,10,0.6); }
  .proj.tilt img{ transform: scale(1.05) rotate(0.6deg) }

  /* modal */
  .modal{
    position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background: rgba(0,0,0,0.7); z-index:2000; padding:20px;
    opacity:0; pointer-events:none; transition:opacity .25s;
  }
  .modal.open{ opacity:1; pointer-events:auto; }
  .modal .card{
    width:min(1100px,96%); max-height:90vh; overflow:auto; border-radius:12px; background:#031021; padding:22px;
    display:grid; grid-template-columns: 1fr 380px; gap:18px;
  }
  @media (max-width:900px){ .modal .card{ grid-template-columns:1fr } }
  .modal img{ width:100%; border-radius:8px; height:auto; display:block; }
  .modal .info{ color:#fff; }
  .close-btn{ position:absolute; right:26px; top:20px; background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:8px; cursor:pointer; }

  /* contact area */
  .contact-grid{ display:grid; grid-template-columns:1fr 360px; gap:24px; align-items:start; }
  @media (max-width:980px){ .contact-grid{ grid-template-columns:1fr } }
  .input{ width:100%; padding:12px 14px; border-radius:10px; border:1px solid rgba(255,255,255,0.06); background:rgba(255,255,255,0.02); color:inherit; margin-bottom:12px; }

  /* footer */
  footer{ text-align:center; padding:28px 20px; opacity:0.9; font-size:14px }

  /* light mode adjustments */
  body.light{
    color:var(--text-dark);
    background: linear-gradient(135deg,#f6f8fb 0%, #eef2ff 60%, #fff 100%);
  }
  body.light nav{ background: rgba(255,255,255,0.7); color:var(--text-dark); }
  body.light .glass{ background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.95)); color:var(--text-dark); border:1px solid rgba(3,7,18,0.03) }

  /* small helpers */
  .muted{ opacity:0.85; font-size:14px; }
  .kicker{ font-size:13px; opacity:0.85; letter-spacing:1px; text-transform:uppercase }
</style>
</head>

<body>

<!-- floating gradient blobs -->
<div class="blob b1" aria-hidden="true"></div>
<div class="blob b2" aria-hidden="true"></div>

<!-- NAV -->
<nav>
  <div class="brand">
    <div class="logo">DN</div>
    <div>
      <div style="font-weight:700">Designer Nest</div>
      <div class="muted" style="font-size:12px">South Kolkata • 15+ years</div>
    </div>
  </div>

  <div class="links">
    <div class="controls">
      <a href="#portfolio">Portfolio</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button class="mode-btn" id="modeToggle">Light</button>
    </div>
  </div>
</nav>

<!-- HERO (video background with graceful fallback) -->
<section class="hero" id="top">
  <!-- Video: autoplay, muted, loop. fallback poster and <picture> if video unavailable -->
  <video id="bgVideo" autoplay muted loop playsinline poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg">
    <!-- primary: interior-like sample MP4 (public sample). If hosting your own agency video, replace the src with your file. -->
    <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4">
    <!-- fallback: image via CSS overlay -->
  </video>

  <div class="overlay" aria-hidden="true"></div>

  <div class="content hero-content" data-anim>
    <div class="eyebrow">Premium interior design studio</div>
    <h1>Spaces that feel like home — crafted beautifully</h1>
    <p class="muted">Designer Nest — South Kolkata. 15+ years creating elegant kitchens, bedrooms, living rooms and full-house BHK packages.</p>
    <div style="margin-top:18px">
      <a class="cta" href="#contact">Book Consultation</a>
    </div>
  </div>
</section>

<!-- PORTFOLIO (interactive filters) -->
<section id="portfolio" class="glass" style="margin-top:12px">
  <div style="text-align:center; margin-bottom:8px" class="kicker">Projects</div>
  <h2 class="section-title">Interactive Project Portfolio</h2>

  <div class="filters" id="filters" aria-hidden="false">
    <button data-filter="all" class="active">All</button>
    <button data-filter="kitchen">Kitchen</button>
    <button data-filter="bedroom">Bedroom</button>
    <button data-filter="living">Living</button>
    <button data-filter="bhk">BHK</button>
  </div>

  <div class="portfolio-grid" id="grid">

    <!-- Project item pattern: data-category attributes used for filtering -->
    <div class="proj" data-category="kitchen" data-title="Modern Marble Kitchen" data-desc="Custom marble countertop, concealed storage, ambient under-cabinet lighting." data-img="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg">
      <img src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg" loading="lazy" alt="Kitchen project">
      <div class="label">Kitchen</div>
      <div class="meta">Modern Marble Kitchen</div>
    </div>

    <div class="proj" data-category="kitchen" data-title="Compact Contemporary Kitchen" data-desc="Space-optimised layout for compact apartments." data-img="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg">
      <img src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg" loading="lazy" alt="Kitchen project">
      <div class="label">Kitchen</div>
      <div class="meta">Compact Contemporary</div>
    </div>

    <div class="proj" data-category="bedroom" data-title="Serene Master Bedroom" data-desc="Neutral palette, layered textures, ambient lighting." data-img="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg">
      <img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg" loading="lazy" alt="Bedroom project">
      <div class="label">Bedroom</div>
      <div class="meta">Serene Master</div>
    </div>

    <div class="proj" data-category="living" data-title="Contemporary Living Room" data-desc="Open plan living with statement lighting and warm textures." data-img="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg">
      <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg" loading="lazy" alt="Living project">
      <div class="label">Living</div>
      <div class="meta">Contemporary Living</div>
    </div>

    <div class="proj" data-category="bedroom" data-title="Minimal Guest Bedroom" data-desc="Crisp lines, soft linen, and integrated wardrobes." data-img="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg">
      <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" loading="lazy" alt="Bedroom project">
      <div class="label">Bedroom</div>
      <div class="meta">Guest Bedroom</div>
    </div>

    <div class="proj" data-category="bhk" data-title="2 BHK Family Makeover" data-desc="Optimised flow, elegant finishes and smart storage." data-img="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg">
      <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" loading="lazy" alt="BHK project">
      <div class="label">BHK</div>
      <div class="meta">2 BHK Makeover</div>
    </div>

    <div class="proj" data-category="living" data-title="Luxury Lounge" data-desc="Textured walls, layered seating and curated decor." data-img="https://images.pexels.com/photos/1617911/pexels-photo-1617911.jpeg">
      <img src="https://images.pexels.com/photos/1617911/pexels-photo-1617911.jpeg" loading="lazy" alt="Living project">
      <div class="label">Living</div>
      <div class="meta">Luxury Lounge</div>
    </div>

    <div class="proj" data-category="kitchen" data-title="Open-plan Kitchen" data-desc="Island cooking, matte cabinetry and brass accents." data-img="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg">
      <img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg" loading="lazy" alt="Kitchen project">
      <div class="label">Kitchen</div>
      <div class="meta">Open-plan Kitchen</div>
    </div>

    <div class="proj" data-category="bhk" data-title="3 BHK Signature" data-desc="Premium materials and custom joinery for a refined finish." data-img="https://images.pexels.com/photos/1179757/pexels-photo-1179757.jpeg">
      <img src="https://images.pexels.com/photos/1179757/pexels-photo-1179757.jpeg" loading="lazy" alt="BHK project">
      <div class="label">BHK</div>
      <div class="meta">3 BHK Signature</div>
    </div>

  </div>
</section>

<!-- Projects: 3D card showcase -->
<section id="projects" class="glass" style="margin-top:18px">
  <h2 class="section-title">Featured Projects (3D cards)</h2>

  <div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap">
    <div class="proj" data-tilt data-title="Luxury Living Room" data-desc="Living room with volumetric lighting" data-img="https://images.pexels.com/photos/1618227/pexels-photo-1618227.jpeg" style="width:340px">
      <img src="https://images.pexels.com/photos/1618227/pexels-photo-1618227.jpeg" alt="">
      <div class="meta">Luxury Living Room</div>
    </div>

    <div class="proj" data-tilt data-title="Designer Kitchen" data-desc="Island-layout with concealed pullouts" data-img="https://images.pexels.com/photos/37347/modern-kitchen-interior-design.jpg" style="width:340px">
      <img src="https://images.pexels.com/photos/37347/modern-kitchen-interior-design.jpg" alt="">
      <div class="meta">Designer Kitchen</div>
    </div>

    <div class="proj" data-tilt data-title="Cozy Bedroom" data-desc="Soft textiles and integrated lighting" data-img="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" style="width:340px">
      <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" alt="">
      <div class="meta">Cozy Bedroom</div>
    </div>
  </div>
</section>

<!-- Contact / Book -->
<section id="contact" class="glass" style="margin-top:18px">
  <h2 class="section-title">Book Appointment</h2>
  <div class="contact-grid" style="gap:20px; align-items:start">
    <div>
      <p class="kicker">Call or WhatsApp</p>
      <h3 style="margin:6px 0">📞 9330682272</h3>
      <p class="muted">Location: South Kolkata, West Bengal</p>
      <p class="muted">Office visits by appointment. We design from concept to delivery.</p>

      <div style="margin-top:18px">
        <a class="cta" href="https://wa.me/919330682272" target="_blank" rel="noreferrer">Message on WhatsApp</a>
      </div>
    </div>

    <div>
      <form id="contactForm" onsubmit="return submitForm(event)">
        <input class="input input-text input-name input" name="name" placeholder="Your name" required>
        <input class="input input-email input" name="email" type="email" placeholder="Email" required>
        <input class="input input-phone input" name="phone" placeholder="Phone" required>
        <textarea class="input" name="note" rows="5" placeholder="Brief project details"></textarea>
        <button class="cta" type="submit">Request Consultation</button>
      </form>
    </div>
  </div>
</section>

<footer>
  <div class="muted">© 2026 Designer Nest • South Kolkata • All rights reserved</div>
</footer>

<!-- Modal structure (closed by default) -->
<div id="modal" class="modal" aria-hidden="true" role="dialog">
  <div class="card" role="document">
    <div style="position:relative">
      <img id="modalImg" src="" alt="Project" style="max-height:80vh; width:100%; object-fit:cover; border-radius:8px" />
    </div>
    <div class="info" style="padding:6px 4px">
      <h3 id="modalTitle" style="margin-top:0"></h3>
      <p id="modalDesc" class="muted"></p>
      <p style="margin-top:12px"><strong>Phone:</strong> 9330682272</p>
      <p style="margin-top:6px"><strong>Location:</strong> South Kolkata, West Bengal</p>
      <div style="margin-top:20px">
        <a class="cta" href="https://wa.me/919330682272" target="_blank" rel="noreferrer">Contact on WhatsApp</a>
      </div>
    </div>
    <button class="close-btn" onclick="closeModal()">Close</button>
  </div>
</div>

<!-- WhatsApp floating -->
<a class="whatsapp" href="https://wa.me/919330682272" aria-label="WhatsApp">💬</a>

<script>
/* ---------------------
  Progressive JS: no libs
   - Filtering portfolio
   - Modal open/close + populate
   - 3D tilt mouse movement
   - Scroll reveal using IntersectionObserver
   - Contact form (simple client-side stub)
----------------------*/

document.addEventListener('DOMContentLoaded', ()=>{

  // FILTERS
  const filterButtons = document.querySelectorAll('#filters button');
  const grid = document.getElementById('grid');
  const items = Array.from(grid.querySelectorAll('.proj'));

  filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(it=>{
        if(f === 'all' || it.dataset.category === f){
          it.style.display = '';
          // small reveal
          setTimeout(()=> it.classList.add('show'), 100);
        } else {
          it.style.display = 'none';
          it.classList.remove('show');
        }
      });
    });
  });

  // MODAL (click item)
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  function openModalFrom(el){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    const img = el.dataset.img || el.querySelector('img').src;
    modalImg.src = img;
    modalTitle.innerText = el.dataset.title || el.querySelector('.meta').innerText;
    modalDesc.innerText = el.dataset.desc || 'Full project details will be provided on consultation.';
  }

  window.openModalFrom = openModalFrom; // expose for debug

  items.concat(Array.from(document.querySelectorAll('.proj[data-tilt]'))).forEach(it=>{
    it.addEventListener('click', (e)=>{
      openModalFrom(it);
    });

    // mouse-based 3D tilt
    it.addEventListener('mousemove', (ev)=>{
      const rect = it.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const dx = (ev.clientX - cx) / rect.width;
      const dy = (ev.clientY - cy) / rect.height;
      const tiltX = (dy * 12).toFixed(2);
      const tiltY = (dx * -12).toFixed(2);
      it.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      it.style.transition = 'transform 0.08s linear';
    });
    it.addEventListener('mouseleave', ()=>{
      it.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
      it.style.transition = 'transform .5s cubic-bezier(.2,.9,.3,1)';
    });
  });

  // close modal when clicking outside
  modal.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });

  // ESC to close modal
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  // SCROLL REVEAL: fade elements with [data-anim] or .proj
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold:0.12 });

  document.querySelectorAll('[data-anim], .proj, .glass, .section-title').forEach(el=> observer.observe(el));

  // ensure initial tiny stagger
  items.forEach((it,i)=> setTimeout(()=> observer.observe(it), i*50));

  // MODE toggle
  const modeBtn = document.getElementById('modeToggle');
  modeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('light');
    modeBtn.innerText = document.body.classList.contains('light') ? 'Dark' : 'Light';
  });

  // contact form (demo only)
  window.submitForm = function(evt){
    evt.preventDefault();
    const f = evt.target;
    alert('Thanks! We received your request. Designer Nest will contact you on 9330682272.');
    f.reset();
    return false;
  };

});

// modal helpers
function closeModal(){
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

/* safety: if video cannot autoplay (mobile), show fallback poster by pausing */
const bgVid = document.getElementById('bgVideo');
bgVid.addEventListener('error', ()=>{ bgVid.style.display='none'; });
bgVid.addEventListener('play', ()=>{/* ok */});
</script>
</body>
</html>
