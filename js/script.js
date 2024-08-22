
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinkscont = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          const href = link.getAttribute('href');

          // Check if the link is a bookmark link
          if (href.startsWith('#')) {
              event.preventDefault();

              // Remove 'active' class from currently active link
              const currentActive = document.querySelector('.nav-links a.active');
              if (currentActive) {
                  currentActive.classList.remove('active');
              }
              
              // Add 'active' class to clicked link
              link.classList.add('active');

              // Scroll to the target section with offset adjustment for the navbar
              const targetId = href.substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                  const navbarHeight = document.querySelector('.navbar').offsetHeight;

                  window.scrollTo({
                      top: targetElement.offsetTop - navbarHeight,
                      behavior: 'smooth'
                  });
              }

              // Optionally, close the menu if it's open
              navLinkscont.classList.remove('open');
              menuIcon.classList.remove('open');
          }
      });
  });

  menuIcon.addEventListener('click', () => {
      navLinkscont.classList.toggle('open');
      menuIcon.classList.toggle('open');
  });
});

  window.addEventListener("scroll", (event) => {
    event.preventDefault();
    const circle1 = document.querySelector(".circle1");
    const circle2 = document.querySelector(".circle2");
    const circle3 = document.querySelector(".circle3");
    const circle4 = document.querySelector(".circle4");
    const servicesec = document.querySelector(".services-section-slider-container");
    const herosec = document.querySelector(".hero-section");
    const footersec = document.querySelector(".footer-section");
    const scrollVal = window.scrollY + 1;
    
    const blurValue = Math.min(scrollVal / 15, 15);
    // Calculate positions and opacity
    circle2.style.opacity = (1 / scrollVal * 10);
   
   
    if (scrollVal < 80) {
      herosec.style.filter = 'blur(0)';
      if (scrollVal > 40) {
        herosec.style.filter = 'blur(0)';
        circle1.style.left = `${(scrollVal / 3.1) * 1.5}%`;
        circle1.style.top = "60%";
        circle3.style.top = "45%";
        circle3.style.right = `${(scrollVal / 3.1) * 1.5}%`;
        circle4.style.top = `${scrollVal * 1.08}%`;
        circle4.style.right = "7%";
      } else {
        circle1.style.top = "83%";
        circle1.style.left = "5%";
        circle3.style.top = "40%";
        circle3.style.right = "10%";
        circle4.style.top = "48%";
        circle4.style.right = "19%";
      }
    } else if(scrollVal >= 150) {
        herosec.style.filter = `blur(${blurValue}px)`;
    }
  
    if (scrollVal < 100) {
      herosec.style.filter = 'blur(0)'; // Remove blur filter if scroll value is < 100px
    }
  
    if (scrollVal >= 100) {
      herosec.style.position = "fixed";
      herosec.style.width = "100vw";
      herosec.style.top = "0";
      herosec.style.left = "0";
      servicesec.style.marginTop = "100vh";
      servicesec.style.zIndex = 100;
      footersec.style.zIndex = 1000;
    }
  });
  
  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Start with the first slide (index 0)
let interval;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Increment and wrap around using modulo
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement and wrap around using modulo
  goToSlide(currentIndex);
}

function startAutoSlide() {
  // interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Event listeners for manual navigation and auto-slide
prevButton.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide(); 
});

nextButton.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide(); 
});

// Initialize auto-slide
startAutoSlide();

// Adjust the slide configuration based on screen size
function adjustSlidesForScreenSize() {
  if (window.innerWidth <= 668) {
    slides.forEach((slide) => {
      slide.style.width = '100%';
    });
  } else {
    slides.forEach((slide) => {
      slide.style.width = '50%'; // Or your desired width for larger screens
    });
  }
}

// Initial adjustment and re-adjust on window resize
adjustSlidesForScreenSize();
window.addEventListener('resize', adjustSlidesForScreenSize);




document.addEventListener("DOMContentLoaded", function () {
  let intervaloftech;
    const techFigures = document.querySelectorAll(".tech-figure");
    const technologiesContainer = document.querySelector(".technologies-container");
    const techFigureContainers = document.querySelectorAll(".tech-figure-container");
    const leftButton = document.querySelector(".ctrl-btn.left");
    const rightButton = document.querySelector(".ctrl-btn.right");
    let currentSlide = 0;

    function updateSlider() {
        technologiesContainer.style.transform = `translateX(-${currentSlide * 105}%)`;
    }

    function handleResize() {
        if (window.innerWidth < 668) {
            // Execute the slider functionality here
            updateSlider();
            // Other functionalities specific to small screens go here
        }
    }

    // Initial setup
    handleResize(); // Initial check when the script loads

    // Setup event listeners for navigation buttons
 if(window.innerWidth <= 668 ){
    leftButton.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
            clearInterval(intervaloftech)
        }
    });

    rightButton.addEventListener("click", () => {
        if (currentSlide < techFigures.length - 1) {
            currentSlide++;
            updateSlider();
            clearInterval(intervaloftech);
        }
    });

    // Optional: Auto slide functionality
    intervaloftech=setInterval(() => {
        if (currentSlide < techFigures.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    }, 3000);
    
 }

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    const summaryPara = document.querySelector(".technology-section-summary-para p");

    techFigures.forEach((figure) => {
        const descriptionText = figure.getAttribute("data-description");

        figure.addEventListener("mouseenter", () => {
            // Update the paragraph text
            summaryPara.textContent = descriptionText;
            // Add active class for transition
            summaryPara.classList.add("active");
        });

        figure.addEventListener("mouseleave", () => {
            // Clear the paragraph text
            summaryPara.textContent = "Hover over a technology to see its description.";
            // Remove active class after transition
            summaryPara.classList.remove("active");
        });

        figure.addEventListener("mouseenter", () => {
            techFigures.forEach((f) => (f.style.opacity = f === figure ? "1" : "0.5"));
        });

        figure.addEventListener("mouseleave", () => {
            techFigures.forEach((f) => (f.style.opacity = "1"));
        });
    });
});
