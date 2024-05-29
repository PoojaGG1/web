const menuBtn = document.getElementById('menu-btn');
const navLink = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLink.style.display = navLink.style.display === 'none' ? 'flex' : 'none';
});

//contact us box

document.addEventListener('DOMContentLoaded', function() {
    const contactUsBox = document.getElementById('contact-us-box');
    const contactUsClose = document.getElementById('contact-us-close');
    const contactForm = document.getElementById('contact-form');
    const toggleArrow = document.getElementById('toggle-arrow');
    const contactUsContent = document.getElementById('contact-us-content');

    // Function to toggle the contact us box
    function toggleContactUsBox() {
        if (contactUsContent.style.display === 'none' || contactUsContent.style.display === '') {
            contactUsContent.style.display = 'block';
            toggleArrow.textContent = '▼';
        } else {
            contactUsContent.style.display = 'none';
            toggleArrow.textContent = '▲';
        }
    }

    // Event listener to toggle the contact us box
    toggleArrow.addEventListener('click', toggleContactUsBox);


    // Function to show the contact us box
    function showContactUsBox() {
        contactUsBox.style.display = 'block';
    }

    // Function to hide the contact us box
    function hideContactUsBox() {
        contactUsBox.style.display = 'none';
    }

    // Show the contact us box after 1.5 seconds
    setTimeout(showContactUsBox, 1500);

    // Event listener to close the contact us box
    contactUsClose.addEventListener('click', hideContactUsBox);

    // Event listener to handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userNumber = document.getElementById('user-number').value;
        const userEmail = document.getElementById('user-email').value;
        const userMessage = document.getElementById('user-message').value;

        const mailtoLink = `mailto:abhikora13@gmail.com?subject=Query from ${userEmail}&body=Phone Number: ${userNumber}%0D%0A%0D%0A${userMessage}`;
        window.location.href = mailtoLink;

        // Hide the contact us box after submission
        hideContactUsBox();
    });
});
