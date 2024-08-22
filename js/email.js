document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const budget = document.getElementById('budget').value;
    const form=document.getElementById("contact-form");
    const submissionLabel=document.querySelector(".submission-label");
    submissionLabel.style.display="block";
    form.classList.add("submission");
// console.log(fullName);
    // Prepare the email parameters
    const templateParams = {
        fullName: fullName,
        email: email,
        contact: contact,
        projectDescription: projectDescription,
        budget: budget
    };

    // Send the email
    emailjs.send('service_5ugbe28', 'template_dr1nk9h', templateParams)
        .then(function (response) {
form.classList.remove("submission");
submissionLabel.style.backgroundColor="green";
submissionLabel.innerHTML = "Email has been sent successfully😊";
setTimeout(() => {
    submissionLabel.style.display="none";
}, 3000);
        }, function (error) {
            console.error('FAILED...', error);
            alert('Failed to send email.');
        });
});
// document.addEventListener('DOMContentLoaded', () => {
//     const menuIcon = document.querySelector('.menu-icon');
//     const navLinkscont = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links a');
  
//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             const href = link.getAttribute('href');
  
//             // Only prevent default for same-page links
//             if (href.startsWith('#')) {
//                 event.preventDefault(); 
                
//                 const currentActive = document.querySelector('.nav-links a.active');
//                 if (currentActive) {
//                     currentActive.classList.remove('active');
//                 }
//                 link.classList.add('active');
                
//                 // Optionally, close the menu if it's open
//                 navLinkscont.classList.remove('open');
//                 menuIcon.classList.remove('open');
//             }
//         });
//     });
  
//     menuIcon.addEventListener('click', () => {
//         navLinkscont.classList.toggle('open');
//         menuIcon.classList.toggle('open');
//     });
//   });
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