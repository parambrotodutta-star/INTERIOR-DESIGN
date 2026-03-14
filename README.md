<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Designer Nest | Luxury Interior Studio</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css"/>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
font-family:Poppins;
color:white;
background:url("https://www.transparenttextures.com/patterns/wood-pattern.png");
}

/* NAVBAR */

nav{
position:fixed;
top:0;
width:100%;
display:flex;
justify-content:space-between;
padding:20px 60px;
background:rgba(0,0,0,0.6);
backdrop-filter:blur(10px);
z-index:1000;
}

nav h2{
font-family:"Playfair Display";
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
background:url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg") center/cover;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero h1{
font-size:70px;
font-family:"Playfair Display";
color:#d4af37;
}

.hero button{
margin-top:20px;
padding:15px 35px;
border:none;
background:#d4af37;
border-radius:30px;
cursor:pointer;
}

/* GLASS SECTIONS */

.glass{
margin:80px;
padding:60px;
background:rgba(0,0,0,0.6);
border-radius:20px;
}

/* TITLE */

.section-title{
text-align:center;
font-family:"Playfair Display";
font-size:40px;
color:#d4af37;
margin-bottom:40px;
}

/* GALLERY */

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:25px;
}

.gallery img{
width:100%;
height:300px;
object-fit:cover;
border-radius:12px;
transition:0.5s;
}

.gallery img:hover{
transform:scale(1.1);
box-shadow:0 20px 40px rgba(212,175,55,0.7);
}

/* PARALLAX */

.showcase{
height:70vh;
background:url("https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg") center/cover fixed;
display:flex;
align-items:center;
justify-content:center;
}

.showcase h2{
font-size:50px;
background:rgba(0,0,0,0.7);
padding:20px 40px;
border-radius:10px;
}

/* BHK */

.bhk{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:30px;
}

.bhk-card{
width:220px;
padding:30px;
background:#222;
border-radius:12px;
text-align:center;
transition:0.4s;
}

.bhk-card:hover{
transform:translateY(-10px);
background:#333;
}

/* CONTACT */

.contact{
text-align:center;
padding:80px 20px;
}

.contact input,
.contact textarea{
width:80%;
padding:14px;
margin:10px;
border:none;
border-radius:8px;
}

.contact button{
padding:14px 40px;
border:none;
background:#d4af37;
cursor:pointer;
}

/* WHATSAPP */

.whatsapp{
position:fixed;
bottom:25px;
right:25px;
background:#25D366;
color:white;
padding:15px 18px;
border-radius:50%;
text-decoration:none;
}

/* FOOTER */

footer{
text-align:center;
padding:30px;
background:black;
}

</style>

</head>

<body>

<nav>

<h2>Designer Nest</h2>

<div>
<a href="#kitchen">Kitchen</a>
<a href="#bedroom">Bedroom</a>
<a href="#living">Living</a>
<a href="#contact">Book</a>
</div>

</nav>

<section class="hero">

<div data-aos="fade-up">

<h1>Luxury Interior Design</h1>

<button>Book Consultation</button>

</div>

</section>

<div class="glass">

<h2 class="section-title">About Designer Nest</h2>

<p style="text-align:center">
15+ years of experience creating premium interiors across South Kolkata and West Bengal.
</p>

</div>

<div class="glass" id="kitchen">

<h2 class="section-title">Kitchen Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg" data-aos="zoom-in">
<img src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg" data-aos="zoom-in">
<img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg" data-aos="zoom-in">

</div>

</div>

<div class="glass" id="bedroom">

<h2 class="section-title">Bedroom Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg" data-aos="fade-right">
<img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg" data-aos="fade-right">
<img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" data-aos="fade-right">

</div>

</div>

<div class="glass" id="living">

<h2 class="section-title">Living Room Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg" data-aos="zoom-in">
<img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg" data-aos="zoom-in">
<img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" data-aos="zoom-in">

</div>

</div>

<section class="showcase">

<h2 data-aos="fade-up">Elegant Living Spaces</h2>

</section>

<div class="glass">

<h2 class="section-title">BHK Packages</h2>

<div class="bhk">

<div class="bhk-card" data-aos="flip-left">
<h3>1 BHK</h3>
</div>

<div class="bhk-card" data-aos="flip-left">
<h3>2 BHK</h3>
</div>

<div class="bhk-card" data-aos="flip-left">
<h3>3 BHK</h3>
</div>

<div class="bhk-card" data-aos="flip-left">
<h3>Villa</h3>
</div>

</div>

</div>

<section class="contact" id="contact">

<h2 class="section-title">Book Consultation</h2>

<p>📞 9330682272</p>
<p>📍 South Kolkata, West Bengal</p>

<input type="text" placeholder="Your Name">

<br>

<input type="email" placeholder="Email">

<br>

<textarea rows="4" placeholder="Your Project Details"></textarea>

<br>

<button>Book Appointment</button>

</section>

<footer>

<p>© 2026 Designer Nest Interior Studio</p>

</footer>

<a class="whatsapp" href="https://wa.me/919330682272">WhatsApp</a>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
AOS.init({
duration:1200,
once:true
});
</script>

</body>

</html>
