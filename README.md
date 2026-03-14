<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Designer Nest | Interior Design Studio</title>

<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

<style>

body{
margin:0;
font-family:'Poppins',sans-serif;
background:#0f0f0f;
color:white;
}

/* NAVBAR */

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 70px;
background:black;
position:sticky;
top:0;
z-index:100;
}

nav h2{
font-family:'Playfair Display';
color:#d4af37;
}

nav a{
color:white;
margin-left:20px;
text-decoration:none;
}

/* HERO */

.hero{
height:100vh;
background:url("https://images.unsplash.com/photo-1600210492493-0946911123ea") center/cover;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
}

.hero::after{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
}

.hero h1{
position:relative;
font-size:60px;
font-family:'Playfair Display';
color:#d4af37;
}

/* FLOATING 3D SHAPES */

.shape{
position:absolute;
width:120px;
height:120px;
background:linear-gradient(135deg,#d4af37,#b8962e);
border-radius:50%;
filter:blur(40px);
animation:float 8s infinite ease-in-out;
}

.shape2{
top:200px;
right:100px;
animation-delay:3s;
}

.shape1{
top:120px;
left:80px;
}

@keyframes float{

0%{transform:translateY(0)}
50%{transform:translateY(-40px)}
100%{transform:translateY(0)}

}

/* ABOUT */

.about{
padding:80px;
text-align:center;
}

.about h2{
color:#d4af37;
font-family:'Playfair Display';
}

/* STATS */

.stats{
display:flex;
justify-content:center;
gap:60px;
padding:40px;
}

.stat{
text-align:center;
}

.stat h3{
font-size:40px;
color:#d4af37;
}

/* SERVICES */

.services{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
padding:80px;
}

.card{
background:#1b1b1b;
padding:25px;
border-radius:12px;
transition:0.4s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 10px 30px rgba(212,175,55,0.3);
}

/* GALLERY */

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
padding:80px;
}

.gallery img{
width:100%;
border-radius:10px;
transition:0.4s;
}

.gallery img:hover{
transform:scale(1.05);
}

/* ACCORDION */

.accordion{
max-width:700px;
margin:auto;
padding:40px;
}

.accordion button{
width:100%;
padding:15px;
background:#d4af37;
border:none;
color:black;
font-size:18px;
margin-top:10px;
cursor:pointer;
}

.panel{
display:none;
background:#222;
padding:15px;
}

/* CONTACT */

.contact{
background:#111;
padding:80px;
text-align:center;
}

input,textarea{
width:80%;
padding:12px;
margin:10px;
border:none;
border-radius:6px;
}

.submit{
background:#d4af37;
color:black;
padding:12px 30px;
border:none;
cursor:pointer;
}

/* FOOTER */

footer{
background:black;
text-align:center;
padding:20px;
color:#999;
}

</style>

</head>

<body>

<nav>

<h2>Designer Nest</h2>

<div>
<a href="#">Home</a>
<a href="#about">About</a>
<a href="#portfolio">Projects</a>
<a href="#contact">Book Now</a>
</div>

</nav>

<section class="hero">

<div class="shape shape1"></div>
<div class="shape shape2"></div>

<h1 data-aos="fade-up">Luxury Interior Design in Kolkata</h1>

</section>

<section class="about" id="about" data-aos="fade-up">

<h2>About Designer Nest</h2>

<p>
Designer Nest is a premium interior design studio in Kolkata with
<strong>15+ years experience</strong> delivering elegant residential
and commercial interiors.
</p>

</section>

<div class="stats">

<div class="stat">
<h3>15+</h3>
<p>Years Experience</p>
</div>

<div class="stat">
<h3>250+</h3>
<p>Projects Completed</p>
</div>

<div class="stat">
<h3>120+</h3>
<p>Happy Clients</p>
</div>

</div>

<section class="services">

<div class="card" data-aos="zoom-in">
<h3>Luxury Home Interiors</h3>
<p>Modern elegant home designs.</p>
</div>

<div class="card" data-aos="zoom-in">
<h3>Office Interiors</h3>
<p>Creative workspace environments.</p>
</div>

<div class="card" data-aos="zoom-in">
<h3>Renovation</h3>
<p>Transform old spaces into modern ones.</p>
</div>

</section>

<section id="portfolio">

<h2 style="text-align:center;color:#d4af37">Our Projects</h2>

<div class="gallery">

<img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6">
<img src="https://images.unsplash.com/photo-1615873968403-89e068629265">
<img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0">
<img src="https://images.unsplash.com/photo-1616047006789-b7afc8c4b3c2">
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">
<img src="https://images.unsplash.com/photo-1600210492493-0946911123ea">

</div>

</section>

<section class="accordion">

<button>Why Choose Designer Nest?</button>
<div class="panel">We provide premium customized interior solutions.</div>

<button>What type of projects do you handle?</button>
<div class="panel">Residential homes, offices, and luxury renovations.</div>

<button>How to start a project?</button>
<div class="panel">Book a consultation below to discuss your project.</div>

</section>

<section class="contact" id="contact">

<h2 style="color:#d4af37">Book Consultation</h2>

<form>

<input type="text" placeholder="Your Name">

<input type="email" placeholder="Email">

<input type="tel" placeholder="Phone Number">

<textarea rows="4" placeholder="Tell us about your project"></textarea>

<br>

<button class="submit">Book Appointment</button>

</form>

</section>

<footer>

<p>© 2026 Designer Nest | Interior Design Studio</p>

</footer>

<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>

AOS.init();

var acc=document.getElementsByTagName("button");

for(let i=0;i<acc.length;i++){

acc[i].onclick=function(){

var panel=this.nextElementSibling;

panel.style.display=panel.style.display==="block"?"none":"block";

}

}

</script>

</body>

</html>
