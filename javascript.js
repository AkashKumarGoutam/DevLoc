// script.js

// Define the fixed margin at the top (adjust as needed)
const fixedMargin = 90; // You can change this value to your desired margin

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - fixedMargin, // Subtract the fixed margin
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener("scroll" , () =>
{
    const navbar=document.getElementById("navbar")
    if(this.scrollY>100){
        navbar.style.backgroundColor="#2E2E2E"
        console.log("aasif")
    }
    else{
        navbar.style.backgroundColor="transparent"
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Add event listener for left and right scroll buttons if needed
    // Example for left scroll:
    const leftScrollButton = document.querySelector('.left-scroll-button');
    leftScrollButton.addEventListener('click', function() {
        galleryContainer.scrollLeft -= 300; // Adjust the scroll distance as needed
    });

    // Example for right scroll:
    const rightScrollButton = document.querySelector('.right-scroll-button');
    rightScrollButton.addEventListener('click', function() {
        galleryContainer.scrollLeft += 300; // Adjust the scroll distance as needed
    });
});

