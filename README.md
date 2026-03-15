<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designer Nest | Architectural Excellence</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --accent: #d4af37;
            --glass: rgba(0, 0, 0, 0.7);
            --border: rgba(255, 255, 255, 0.15);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; background: #000; color: #fff; overflow-x: hidden; }

        /* --- IMMERSIVE BACKGROUND --- */
        .master-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), 
                        url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000');
            background-size: cover; background-position: center; z-index: -2;
        }

        /* --- THE GLASS SHINE EFFECT --- */
        .glass-pane {
            position: fixed; inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
            pointer-events: none; z-index: -1;
        }

        nav {
            position: fixed; width: 100%; padding: 30px 6%; display: flex;
            justify-content: space-between; align-items: center; z-index: 1000;
        }
        .logo { font-family: 'Syne'; font-size: 1.5rem; color: var(--accent); letter-spacing: 5px; font-weight: 800; }

        /* --- ANIMATIONS --- */
        .reveal { 
            opacity: 0; transform: translateY(50px); 
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); 
        }
        .reveal.active { opacity: 1; transform: translateY(0); }

        /* --- BENTO GRID --- */
        .section { padding: 100px 8%; position: relative; }
        .s-title { font-family: 'Syne'; font-size: 3rem; text-transform: uppercase; margin-bottom: 50px; color: var(--accent); letter-spacing: 8px; }
        
        .bento { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
        .bento-card { 
            background: var(--glass); border: 1px solid var(--border); 
            border-radius: 35px; overflow: hidden; backdrop-filter: blur(20px);
            transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .bento-card:hover { border-color: var(--accent); transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }

        .w-12 { grid-column: span 12; padding: 60px; }
        .w-8 { grid-column: span 8; height: 500px; }
        .w-4 { grid-column: span 4; height: 500px; }
        .w-6 { grid-column: span 6; padding: 60px; text-align: center; }

        .bento-card img { width: 100%; height: 100%; object-fit: cover; transition: 1.5s; opacity: 0.7; }
        .bento-card:hover img { transform: scale(1.1); opacity: 1; }

        .stat-huge { font-family: 'Syne'; font-size: 5.5rem; color: var(--accent); line-height: 1; }

        /* --- REVIEWS --- */
        .review-item { border-left: 2px solid var(--accent); padding: 25px; margin-bottom: 25px; background: rgba(255,255,255,0.03); border-radius: 0 30px 30px 0; }

        /* --- MATERIAL MARQUEE --- */
        .marquee {
            width: 100%; overflow: hidden; background: rgba(0,0,0,0.5);
            padding: 40px 0; border-y: 1px solid var(--border); margin-top: 40px;
        }
        .marquee-track { display: flex; width: 200%; animation: scroll 25s linear infinite; }
        .marquee-track span { 
            font-family: 'Syne'; font-size: 1.2rem; color: #fff; opacity: 0.4; 
            margin: 0 50px; white-space: nowrap; letter-spacing: 5px;
        }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .cta-gold {
            padding: 25px 70px; border-radius: 100px; background: var(--accent);
            color: #000; font-family: 'Syne'; font-weight: 800; border: none;
            text-transform: uppercase; cursor: pointer; transition: 0.4s; font-size: 1rem;
        }
    </style>
</head>
<body>

<div class="master-bg"></div>
<div class="glass-pane"></div>

<nav>
    <div class="logo">DESIGNER NEST</div>
    <div style="font-size: 10px; letter-spacing: 4px; opacity: 0.8;">KOLKATA • EST. 2009</div>
</nav>

<section style="height: 100vh; display: flex; align-items: center; padding: 0 10%;">
    <div class="reveal">
        <p style="letter-spacing: 10px; color: var(--accent); margin-bottom: 20px; font-weight: 200;">CRAFTING LUXURY SINCE 2009</p>
        <h1 style="font-family: 'Syne'; font-size: clamp(3rem, 10vw, 7.5rem); line-height: 0.9; text-transform: uppercase;">A Legacy<br>In Every Inch.</h1>
    </div>
</section>

<section class="section">
    <div class="bento">
        <div class="bento-card w-6 reveal">
            <span class="stat-huge counter" data-target="500">0</span>
            <p style="letter-spacing: 5px; opacity: 0.6; margin-top: 15px;">PROJECTS DELIVERED</p>
        </div>
        <div class="bento-card w-6 reveal">
            <span class="stat-huge counter" data-target="15">0</span>
            <p style="letter-spacing: 5px; opacity: 0.6; margin-top: 15px;">YEARS OF EXCELLENCE</p>
        </div>
    </div>
</section>

<section class="section">
    <h2 class="s-title reveal">The Portfolio</h2>
    <div class="bento">
        <div class="bento-card w-8 reveal"><img src="1000148427.jpg" alt="Luxury Living"></div>
        <div class="bento-card w-4 reveal"><img src="1000148428.jpg" alt="Modern Detail"></div>
        <div class="bento-card w-4 reveal"><img src="https://images.unsplash.com/photo-1542751371-adc38448a05e" alt="Gaming"></div>
        <div class="bento-card w-8 reveal"><img src="https://images.unsplash.com/photo-1556912177-88200e57fe96" alt="Kitchen"></div>
    </div>
</section>

<section class="section">
    <h2 class="s-title reveal">Testimonials</h2>
    <div class="bento">
        <div class="w-12 reveal">
            <div class="review-item">
                <p>"Designer Nest turned my house into a masterpiece. 15 years of experience truly shows in their attention to detail."</p>
                <br><strong>— Rajat Sharma</strong>
            </div>
            <div class="review-item">
                <p>"The best high-end interior firm in Kolkata. Their work with Italian marble and Häfele fittings is world-class."</p>
                <br><strong>— Ananya Dasgupta</strong>
            </div>
            <div class="review-item">
                <p>"They designed my gaming room exactly how I wanted. Futuristic and clean!"</p>
                <br><strong>— Vikram S.</strong>
            </div>
            <div class="review-item">
                <p>"Professional, timely delivery, and very transparent pricing. Highly recommended."</p>
                <br><strong>— Mrs. Kapoor</strong>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="bento-card w-12 reveal" style="background: rgba(212, 175, 55, 0.05); border: 1px solid var(--accent);">
        <h2 style="font-family: 'Syne'; font-size: 2.5rem; color: var(--accent); margin-bottom: 20px;">The Legacy</h2>
        <p style="max-width: 900px; margin: 0 auto; line-height: 1.8; opacity: 0.8; font-size: 1.1rem;">
            From Alipore to Salt Lake, <strong>Designer Nest</strong> has been the gold standard for luxury interiors since 2009. We believe that your home is your sanctuary, and our 15-year journey is a testament to the trust of over 500 families.
        </p>
        
        <div class="marquee">
            <div class="marquee-track">
                <span>HÄFELE</span><span>GREENPLY</span><span>HETTICH</span><span>ASIAN PAINTS</span><span>ITALIAN MARBLE</span>
                <span>HÄFELE</span><span>GREENPLY</span><span>HETTICH</span><span>ASIAN PAINTS</span><span>ITALIAN MARBLE</span>
            </div>
        </div>
    </div>
</section>

<section style="padding: 80px 0; text-align: center;">
    <div class="reveal">
        <button class="cta-gold">Book a Consultation</button>
    </div>
</section>

<script>
    // Robust Animation Trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .counter').forEach(el => observer.observe(el));

    function startCounter(el) {
        const target = +el.getAttribute('data-target');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = target + "+";
                clearInterval(timer);
            } else {
                el.innerText = Math.ceil(current);
            }
        }, 30);
    }
</script>

</body>
</html>
