window.onload = () => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 800);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.classList.contains('counter')) startCounter(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .graphic-container, .counter').forEach(el => observer.observe(el));

function startCounter(el) {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const interval = setInterval(() => {
        count += target / 50;
        if (count >= target) { el.innerText = target + "+"; clearInterval(interval); }
        else { el.innerText = Math.ceil(count); }
    }, 30);
}
