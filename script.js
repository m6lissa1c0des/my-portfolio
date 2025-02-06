//zooming as we scroll down the first page
document.addEventListener("scroll", function() {
    let page1 = document.querySelector(".page1");
    let scrollPosition = window.scrollY;
    
  
    let zoom = 100 + (scrollPosition * 0.05);  

    
    zoom = Math.min(zoom, 105);  

    page1.style.backgroundSize = zoom + "%";
});


//header fades as we scroll
let lastScrollY = window.scrollY;
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down → Hide header
        header.classList.add("header-hidden");
    } else {
        // Scrolling up
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.about-me h1');
    const paragraph = document.querySelector('.p-style p');
    const headerPosition = header.getBoundingClientRect().top;
    const paragraphPosition = paragraph.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    // Check if the header is in view
    if (headerPosition < screenPosition) {
        header.style.visibility = 'visible'; // Make header visible
        header.classList.add('typing-start'); // Start typing animation for header
    }

    // Check if the paragraph is in view and trigger animation
    if (paragraphPosition < screenPosition) {
        paragraph.style.visibility = 'visible'; // Make paragraph visible
        paragraph.classList.add('typing-start'); // Start typing animation for paragraph
    }
});






