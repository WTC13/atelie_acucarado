tailwind.config = {
    theme: {
        extend: {
            colors: {
                lavanda: '#D8B4F8',
                roxoDoce: '#A668FF',
                pascoaLavanda: '#E6D7FF',
                pascoaRosa: '#FFD1DC',
                chocolate: '#4B2E1E',
            }
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
});