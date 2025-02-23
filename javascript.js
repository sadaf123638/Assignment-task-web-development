document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    });

    fadeElements.forEach((element) => {
        observer.observe(element);
    });
});

//images animations 

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 300); 
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach((image) => {
        observer.observe(image);
    });
});

// images hover animation

document.addEventListener("mousemove", (event) => {
    let images = document.querySelectorAll(".image");
    images.forEach((img) => {
        let moveX = (event.clientX / window.innerWidth) * 30 - 10;
        let moveY = (event.clientY / window.innerHeight) * 30 - 10;
        img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
