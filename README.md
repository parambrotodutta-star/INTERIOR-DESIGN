<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designer Nest | Architectural Excellence</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Syne:wght@700;800&family=Playfair+Display:italic,wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --accent: #d4af37;
            --glass: rgba(0, 0, 0, 0.75);
            --border: rgba(255, 255, 255, 0.12);
        }

        /* --- PRELOADER --- */
        #loader {
            position: fixed; inset: 0; background: #000; z-index: 9999;
            display: flex; align-items: center; justify-content: center;
            transition: opacity 1s ease;
        }
        #loader .load-logo { 
            font-family: 'Syne'; font-size: 2rem; color: var(--accent); 
            letter-spacing: 10px; animation: pulse 2s infinite; 
        }
        @keyframes pulse { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; background: #000; color: #fff; overflow-x: hidden; opacity: 0; transition: opacity 1s ease; }
        body.loaded { opacity: 1; }

        /* --- IMMERSIVE BACKGROUND & GLASS --- */
        .master-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), 
                        url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000');
            background-size: cover; background-position: center; z-index: -2;
            transform: scale(1.4); transition: transform 3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        body.loaded .master-bg { transform: scale(1); }

        nav {
            position: fixed; width: 100%; padding: 30px 6%; display: flex;
            justify-content: space-between; align-items: center; z-index: 1000;
            transform: translateY(-100%); transition: transform 1s ease 0.8s;
        }
        body.loaded nav { transform: translateY(0); }
        .logo { font-family: 'Syne'; font-size: 1.5rem; color: var(--accent); letter-spacing: 5px; font-weight: 800; }

        /* --- ANIMATION ENGINE --- */
        .reveal { 
            opacity: 0; transform: translateY(60px) scale(0.95); 
            transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1); 
        }
        .reveal.active { opacity: 1; transform: translateY(0) scale(1); }

        .img-reveal { overflow: hidden; border-radius: 30px; position: relative; }
        .img-reveal img { 
            width: 100%; height: 100%; object-fit: cover; 
            transition: 2.5s cubic-bezier(0.19, 1, 0.22, 1);
            transform: scale(1.5); opacity: 0;
        }
        .reveal.active img { transform: scale(1); opacity: 0.7; }
        .bento-card:hover img { opacity: 1; transform: scale(1.05); }

        /* --- LAYOUT --- */
        .section { padding: 80px 8%; position: relative; }
        .s-label { color: var(--accent); font-family: 'Syne'; letter-spacing: 5px; font-size: 0.7rem; margin-bottom: 20px; display: block; }
        
        .bento { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
        .bento-card { 
            background: var(--glass); border: 1px solid var(--border); 
            border-radius: 35px; overflow: hidden; backdrop-filter: blur(20px);
            transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .w-12 { grid-column: span 12; padding: 60px; }
        .w-8 { grid-column: span 8; height: 500px; }
        .w-4 { grid-column: span 4; height: 500px; }
        .w-6 { grid-column: span 6; padding: 60px; text-align: center; }

        .stat-huge { font-family: 'Syne'; font-size: 5rem; color: var(--accent); line-height: 1; display: block; }

        /* --- REVIEWS --- */
        .review-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 40px; }
        .review-item { 
            padding: 35px; border: 1px solid var(--border); border-radius: 30px; 
            background: rgba(255,255,255,0.02); transition: 0.5s;
        }
        .review-item:hover { border-color: var(--accent); background: rgba(212, 175, 55, 0.05); }
        .stars { color: var(--accent); margin-bottom: 10px; display: block; letter-spacing: 2px; }

        /* --- MATERIAL STYLING --- */
        .material-palette { margin-top: 50px; border-top: 1px solid var(--border); padding-top: 50px; text-align: left; }
        .material-name { font-family: 'Playfair Display', serif; font-style: italic; font-size: 2rem; color: var(--accent); margin-bottom: 5px; display: block; }
        .material-desc { font-size: 0.9rem; line-height: 1.8; opacity: 0.6; margin-bottom: 30px; max-width: 700px; }

        .marquee { width: 100%; overflow: hidden; background: rgba(0,0,0,0.3); padding: 25px 0; margin-top: 30px; }
        .marquee-track { display: flex; width: 200%; animation: scroll 30s linear infinite; }
        .marquee-track span { font-family: 'Syne'; font-size: 0.8rem; opacity: 0.3; margin: 0 40px; letter-spacing: 4px; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* --- FORM STYLING --- */
        .form-input {
            width: 100%; padding: 18px; background: rgba(255,255,255,0.05); 
            border: 1px solid var(--border); border-radius: 15px; color: #fff; 
            font-family: 'Montserrat'; outline: none; transition: 0.3s;
        }
        .form-input:focus { border-color: var(--accent); background: rgba(212, 175, 55, 0.05); }
        
        select.form-input {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23d4af37' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat; background-position: calc(100% - 20px) center;
        }

        .cta-gold {
            padding: 22px 60px; border-radius: 100px; background: var(--accent);
            color: #000; font-family: 'Syne'; font-weight: 800; border: none;
            text-transform: uppercase; cursor: pointer; transition: 0.4s; letter-spacing: 2px;
        }
        .cta-gold:hover { transform: scale(1.05); box-shadow: 0 15px 30px rgba(212,175,55,0.3); }

    </style>
</head>
<body>

<div id="loader"><div class="load-logo">DESIGNER NEST</div></div>
<div class="master-bg"></div>

<nav>
    <div class="logo">DESIGNER NEST</div>
    <div style="font-size: 10px; letter-spacing: 4px; opacity: 0.8;">KOLKATA • EST. 2009</div>
</nav>

<section style="height: 100vh; display: flex; align-items: center; padding: 0 10%;">
    <div class="reveal hero-reveal">
        <p style="letter-spacing: 12px; color: var(--accent); margin-bottom: 20px;">ESTABLISHED 2009</p>
        <h1 style="font-family: 'Syne'; font-size: clamp(3rem, 10vw, 8rem); line-height: 0.85; text-transform: uppercase;">Defining<br>The Standard.</h1>
    </div>
</section>

<section class="section">
    <div class="bento">
        <div class="bento-card w-6 reveal">
            <span class="stat-huge counter" data-target="500">0</span>
            <p style="letter-spacing: 5px; opacity: 0.5;">PROJECTS DELIVERED</p>
        </div>
        <div class="bento-card w-6 reveal">
            <span class="stat-huge counter" data-target="15">0</span>
            <p style="letter-spacing: 5px; opacity: 0.5;">YEARS OF LEGACY</p>
        </div>
    </div>
</section>

<section class="section">
    <span class="s-label">GALLERY OF WORK</span>
    <div class="bento">
        <div class="bento-card w-8 reveal img-reveal">
            <img src="1000148427.jpg">
            <div style="position:absolute; bottom:30px; left:30px; font-family:'Syne'; font-size: 0.8rem; letter-spacing: 3px;">RESIDENTIAL MASTERY</div>
        </div>
        <div class="bento-card w-4 reveal img-reveal">
            <img src="1000148428.jpg">
            <div style="position:absolute; bottom:30px; left:30px; font-family:'Syne'; font-size: 0.8rem; letter-spacing: 3px;">THE SANCTUARY</div>
        </div>
        <div class="bento-card w-4 reveal img-reveal">
            <img src="https://images.unsplash.com/photo-1556912177-88200e57fe96">
            <div style="position:absolute; bottom:30px; left:30px; font-family:'Syne'; font-size: 0.8rem; letter-spacing: 3px;">CULINARY STUDIO</div>
        </div>
        <div class="bento-card w-8 reveal img-reveal">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e">
            <div style="position:absolute; bottom:30px; left:30px; font-family:'Syne'; font-size: 0.8rem; letter-spacing: 3px;">CYBER LOUNGE</div>
        </div>
    </div>
</section>

<section class="section">
    <span class="s-label">TESTIMONIALS</span>
    <div class="review-grid">
        <div class="review-item reveal">
            <span class="stars">★★★★★</span>
            <p>"Designer Nest transformed our home with absolute precision. Their 15-year legacy is visible in every detail."</p>
            <br><strong>— Singhania Family</strong>
        </div>
        <div class="review-item reveal">
            <span class="stars">★★★★★</span>
            <p>"Exceptional use of Italian finishes. They truly understand the Alipore luxury aesthetic."</p>
            <br><strong>— Dr. Amitav Roy</strong>
        </div>
        <div class="review-item reveal">
            <span class="stars">★★★★★</span>
            <p>"The best high-end firm in Kolkata. Professional, creative, and extremely reliable."</p>
            <br><strong>— Mrs. Chatterjee</strong>
        </div>
        <div class="review-item reveal">
            <span class="stars">★★★★★</span>
            <p>"My gaming room is a masterpiece of technology and design. Truly world-class."</p>
            <br><strong>— Rohan Mehta</strong>
        </div>
    </div>
</section>

<section class="section">
    <div class="bento-card w-12 reveal" style="background: rgba(212, 175, 55, 0.03);">
        <h2 style="font-family: 'Syne'; font-size: 3rem; color: var(--accent); margin-bottom: 20px;">The Legacy</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; opacity: 0.8; max-width: 800px;">
            Designer Nest has been the gold standard for bespoke interiors in Kolkata since 2009. We harmonize artistic vision with high-performance engineering.
        </p>

        <div class="material-palette">
            <div class="material-item reveal">
                <span class="material-name">European Systems</span>
                <p class="material-desc">Utilizing Häfele and Hettich hardware for effortless, silent functionality.</p>
            </div>
            <div class="material-item reveal">
                <span class="material-name">Architectural Timber</span>
                <p class="material-desc">Sourcing Greenply Gold borer-proof veneers for lifetime structural integrity.</p>
            </div>
            <div class="material-item reveal">
                <span class="material-name">Premium Finishes</span>
                <p class="material-desc">Hand-selected Statuario marble and PVD-coated metal accents.</p>
            </div>
        </div>

        <div class="marquee">
            <div class="marquee-track">
                <span>HÄFELE</span><span>GREENPLY</span><span>HETTICH</span><span>ASIAN PAINTS</span><span>ITALIAN MARBLE</span>
                <span>HÄFELE</span><span>GREENPLY</span><span>HETTICH</span><span>ASIAN PAINTS</span><span>ITALIAN MARBLE</span>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="bento-card w-12 reveal" style="background: rgba(0,0,0,0.85); border: 1px solid var(--accent);">
        <div style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2 style="font-family: 'Syne'; font-size: 2.5rem; color: var(--accent); margin-bottom: 30px;">Initialize Project</h2>
            <form style="display: grid; gap: 20px; text-align: left;">
                <input type="text" placeholder="Full Name" class="form-input" required>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <input type="tel" placeholder="Phone Number" class="form-input" required>
                    <input type="text" placeholder="Location" class="form-input" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <select class="form-input" required>
                        <option value="" disabled selected>Design Type</option>
                        <option>Modern Luxury</option>
                        <option>Classic Heritage</option>
                        <option>Cyber/Tech Lounge</option>
                    </select>
                    <select class="form-input" required>
                        <option value="" disabled selected>BHK Size</option>
                        <option>2 BHK</option>
                        <option>3 BHK</option>
                        <option>4 BHK+</option>
                        <option>Villa/Duplex</option>
                    </select>
                </div>
                <button type="submit" class="cta-gold">Submit Consultation Request</button>
            </form>
        </div>
    </div>
</section>

<script>
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            document.body.classList.add('loaded');
            document.querySelector('.hero-reveal').classList.add('active');
            setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 1000);
        }, 1500);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.classList.contains('counter')) startCounter(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .counter').forEach(el => observer.observe(el));

    function startCounter(el) {
        const target = +el.getAttribute('data-target');
        let current = 0;
        const timer = setInterval(() => {
            current += target / 50;
            if (current >= target) { el.innerText = target + "+"; clearInterval(timer); }
            else { el.innerText = Math.ceil(current); }
        }, 30);
    }
</script>

</body>
</html>
