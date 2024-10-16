document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const navbarDiv = document.getElementById("navbar-div");
            navbarDiv.innerHTML = data;

            // Get the current page URL
            const currentPage = window.location.pathname.split('/').pop(); // Get the last part of the URL

            // Select all navbar links
            const navLinks = navbarDiv.querySelectorAll('.nav-link');

            // Loop through the links and set the active class
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href').split('/').pop();

                // Check if the link matches the current page
                if (linkHref === currentPage) {
                    link.classList.add('active'); // Add active class
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});