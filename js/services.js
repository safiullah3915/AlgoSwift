
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
//   smooth scroll
  document.querySelectorAll('.service-page-left-section a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Adjust this value to match your navbar height
        const navbarHeight = 50;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

