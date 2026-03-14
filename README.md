<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Designer Nest | Interior Design</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

<style>

body{
margin:0;
font-family:'Poppins',sans-serif;
background:#111;
color:white;
}

/* NAVBAR */

nav{
display:flex;
justify-content:space-between;
padding:20px 60px;
background:black;
}

nav h2{
color:#d4af37;
font-family:'Playfair Display';
}

nav a{
color:white;
margin-left:20px;
text-decoration:none;
}

/* HERO */

.hero{
height:80vh;
background:url("https://images.unsplash.com/photo-1600210492493-0946911123ea") center/cover;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero h1{
font-size:50px;
background:rgba(0,0,0,0.6);
padding:20px;
border-radius:10px;
}

/* SECTION */

.section{
padding:70px 40px;
}

.section h2{
text-align:center;
color:#d4af37;
font-family:'Playfair Display';
font-size:40px;
margin-bottom:40px;
}

/* GRID GALLERY */

.grid-gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
grid-auto-rows:200px;
gap:20px;
}

.grid-gallery img{
width:100%;
height:100%;
object-fit:cover;
border-radius:10px;
transition:0.4s;
}

.grid-gallery img:hover{
transform:scale(1.05);
}

/* BIG IMAGE */

.big{
grid-row:span 2;
}

/* BHK */

.bhk{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:25px;
}

.bhk-card{
background:#1b1b1b;
padding:30px;
border-radius:10px;
width:220px;
text-align:center;
}

/* CONTACT */

.contact{
text-align:center;
padding:60px;
}

input,textarea{
width:80%;
padding:12px;
margin:10px;
border:none;
border-radius:6px;
}

button{
background:#d4af37;
border:none;
padding:12px 30px;
cursor:pointer;
}

footer{
text-align:center;
background:black;
padding:20px;
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

<h1>Luxury Interior Design in South Kolkata</h1>

</section>

<!-- KITCHEN -->

<section class="section" id="kitchen">

<h2>Kitchen Designs</h2>

<div class="grid-gallery">

<img class="big" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c">

<img src="https://images.unsplash.com/photo-1556911220-bff31c812dba">

<img src="https://images.unsplash.com/photo-1600607687644-c7f34a32d9a7">

<img class="big" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea">

<img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77">

<img src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7">

</div>

</section>

<!-- BEDROOM -->

<section class="section" id="bedroom">

<h2>Bedroom Designs</h2>

<div class="grid-gallery">

<img class="big" src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0">

<img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf">

<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2">

<img class="big" src="https://images.unsplash.com/photo-1600607687126-c8d6b2e8c4c5">

<img src="https://images.unsplash.com/photo-1616047006789-b7afc8c4b3c2">

<img src="https://images.unsplash.com/photo-1560448075-bb485b067938">

</div>

</section>

<!-- LIVING ROOM -->

<section class="section" id="living">

<h2>Living Room Designs</h2>

<div class="grid-gallery">

<img class="big" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6">

<img src="https://images.unsplash.com/photo-1615873968403-89e068629265">

<img src="https://images.unsplash.com/photo-1600210492493-0946911123ea">

<img class="big" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d">

<img src="https://images.unsplash.com/photo-1617806118233-18e1de247200">

<img src="https://images.unsplash.com/photo-1617806118242-50d6a6d8d2f1">

</div>

</section>

<!-- BHK -->

<section class="section">

<h2>BHK Interior Packages</h2>

<div class="bhk">

<div class="bhk-card">
<h3>1 BHK</h3>
<p>Compact luxury design</p>
</div>

<div class="bhk-card">
<h3>2 BHK</h3>
<p>Modern family interiors</p>
</div>

<div class="bhk-card">
<h3>3 BHK</h3>
<p>Premium luxury design</p>
</div>

<div class="bhk-card">
<h3>Villa</h3>
<p>Complete luxury interior</p>
</div>

</div>

</section>

<!-- CONTACT -->

<section class="contact" id="contact">

<h2>Book Appointment</h2>

<p>📞 9330682272</p>

<p>📍 South Kolkata, West Bengal</p>

<form>

<input type="text" placeholder="Your Name">

<br>

<input type="email" placeholder="Email">

<br>

<textarea rows="4" placeholder="Your Project Details"></textarea>

<br>

<button>Book Now</button>

</form>

</section>

<footer>

<p>© Designer Nest Interior Studio</p>

</footer>

</body>

</html>
