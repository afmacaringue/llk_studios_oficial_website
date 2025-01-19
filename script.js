document.addEventListener("DOMContentLoaded", function() {
    // Efeito de fade-in para elementos
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show'); // Remove a classe 'show' quando o elemento sai da viewport
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-custom .nav-link");

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});


//roll up
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("animatedImage");
    image.classList.add("roll-up-animation");
});

//Botao
document.getElementById('scrollLeft').addEventListener('click', function() {
    document.querySelector('.services-container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    document.querySelector('.services-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});