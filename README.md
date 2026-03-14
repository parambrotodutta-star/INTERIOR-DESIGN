<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Designer Nest | Interior Design</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Poppins;
transition:0.4s;
background:#0f172a;
color:white;
}

/* LIGHT MODE */

body.light{
background:#f5f7fb;
color:#111;
}

/* NAVBAR */

nav{
display:flex;
justify-content:space-between;
padding:20px 60px;
position:fixed;
width:100%;
background:rgba(0,0,0,0.4);
backdrop-filter:blur(10px);
z-index:1000;
}

body.light nav{
background:white;
}

nav h2{
font-weight:600;
}

nav button{
padding:8px 14px;
border:none;
border-radius:20px;
cursor:pointer;
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
font-size:60px;
animation:fade 2s;
}

/* GLASS SECTION */

.section{
margin:80px;
padding:60px;
background:rgba(255,255,255,0.08);
backdrop-filter:blur(10px);
border-radius:16px;
}

body.light .section{
background:white;
}

/* TITLE */

.title{
text-align:center;
margin-bottom:40px;
font-size:36px;
}

/* GALLERY */

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:20px;
}

.gallery img{
width:100%;
height:300px;
object-fit:cover;
border-radius:10px;
transition:0.5s;
}

.gallery img:hover{
transform:scale(1.08);
}

/* CONTACT */

.contact{
text-align:center;
}

.contact input,
.contact textarea{
width:80%;
padding:12px;
margin:10px;
border:none;
border-radius:6px;
}

.contact button{
padding:12px 30px;
border:none;
background:linear-gradient(45deg,#6366f1,#06b6d4);
color:white;
border-radius:20px;
cursor:pointer;
}

/* ANIMATION */

@keyframes fade{

0%{
opacity:0;
transform:translateY(-40px);
}

100%{
opacity:1;
transform:translateY(0);
}

}

/* WHATSAPP */

.whatsapp{
position:fixed;
bottom:25px;
right:25px;
background:#25D366;
color:white;
padding:14px;
border-radius:50%;
text-decoration:none;
}

</style>

</head>

<body>

<nav>

<h2>Designer Nest</h2>

<button onclick="toggleMode()">🌙</button>

</nav>

<section class="hero">

<h1>Modern Interior Design Studio</h1>

</section>

<div class="section">

<h2 class="title">Kitchen Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg">

<img src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg">

<img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg">

</div>

</div>

<div class="section">

<h2 class="title">Bedroom Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg">

<img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg">

<img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg">

</div>

</div>

<div class="section">

<h2 class="title">Living Room Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg">

<img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg">

<img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg">

</div>

</div>

<div class="section contact">

<h2 class="title">Book Consultation</h2>

<p>📞 9330682272</p>

<p>📍 South Kolkata, West Bengal</p>

<input type="text" placeholder="Name">

<br>

<input type="email" placeholder="Email">

<br>

<textarea rows="4" placeholder="Your project details"></textarea>

<br>

<button>Book Appointment</button>

</div>

<footer style="text-align:center;padding:30px">

© 2026 Designer Nest

</footer>

<a class="whatsapp" href="https://wa.me/919330682272">💬</a>

<script>

function toggleMode(){

document.body.classList.toggle("light")

}

</script>

</body>

</html>
