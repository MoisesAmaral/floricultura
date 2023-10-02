document.addEventListener('DOMContentLoaded', function () {
    const imageCarousel = document.querySelector('.image-carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let scrollLeft = 0;
    
    prevButton.addEventListener('click', function () {
        scrollLeft -= 300; // Ajuste a quantidade de deslocamento desejada
        if (scrollLeft < 0) {
            scrollLeft = 0;
        }
        imageCarousel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function () {
        scrollLeft += 300; // Ajuste a quantidade de deslocamento desejada
        if (scrollLeft > imageCarousel.scrollWidth - imageCarousel.clientWidth) {
            scrollLeft = imageCarousel.scrollWidth - imageCarousel.clientWidth;
        }
        imageCarousel.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
