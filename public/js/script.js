tailwind.config = {
    theme: {
        extend: {
            colors: {
                lavanda: '#D8B4F8',
                roxoDoce: '#A668FF',
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