<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Designer Nest | Luxury Interior Studio</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Poppins;
background:#111;
color:white;
overflow-x:hidden;
}

/* NAVBAR */

nav{
position:fixed;
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
animation:fadeDown 2s;
}

@keyframes fadeDown{

0%{
opacity:0;
transform:translateY(-40px);
}

100%{
opacity:1;
transform:translateY(0);
}

}

/* GLASS SECTIONS */

.glass{
margin:80px;
padding:60px;
background:rgba(255,255,255,0.05);
backdrop-filter:blur(20px);
border-radius:20px;
}

/* TITLES */

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
height:320px;
object-fit:cover;
border-radius:12px;
transition:0.5s;
}

.gallery img:hover{
transform:scale(1.1) rotate(1deg);
box-shadow:0 25px 60px rgba(212,175,55,0.6);
}

/* FLOATING BLOB */

.blob{
position:absolute;
width:400px;
height:400px;
background:linear-gradient(45deg,#d4af37,#ffcc66);
filter:blur(140px);
opacity:0.3;
animation:float 8s infinite ease-in-out;
}

@keyframes float{

0%{transform:translateY(0)}

50%{transform:translateY(-60px)}

100%{transform:translateY(0)}

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

/* SCROLL ANIMATION */

.fade{
opacity:0;
transform:translateY(50px);
transition:all 1s;
}

.fade.show{
opacity:1;
transform:translateY(0);
}

</style>

</head>

<body>

<div class="blob" style="top:-120px;left:-120px;"></div>

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

<h1>Luxury Interior Design</h1>

</section>

<div class="glass fade">

<h2 class="section-title">About Designer Nest</h2>

<p style="text-align:center">
15+ years experience delivering premium interior design across South Kolkata.
</p>

</div>

<div class="glass fade" id="kitchen">

<h2 class="section-title">Kitchen Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg">
<img src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg">
<img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg">

</div>

</div>

<div class="glass fade" id="bedroom">

<h2 class="section-title">Bedroom Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg">
<img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg">
<img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg">

</div>

</div>

<div class="glass fade" id="living">

<h2 class="section-title">Living Room Interiors</h2>

<div class="gallery">

<img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg">
<img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg">
<img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg">

</div>

</div>

<section class="contact fade" id="contact">

<h2 class="section-title">Book Consultation</h2>

<p>📞 9330682272</p>
<p>📍 South Kolkata, West Bengal</p>

<input type="text" placeholder="Your Name">

<br>

<input type="email" placeholder="Email">

<br>

<textarea rows="4" placeholder="Your Project"></textarea>

<br>

<button>Book Appointment</button>

</section>

<footer style="text-align:center;padding:30px;background:black;">

<p>© 2026 Designer Nest</p>

</footer>

<a class="whatsapp" href="https://wa.me/919330682272">💬</a>

<script>

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el)
})

</script>

</body>

</html>
