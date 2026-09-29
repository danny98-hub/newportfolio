/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {

            menuToggle.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });


    /* CLOSE MENU AFTER CLICKING LINK */

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


// =========================================
// CONTACT FORM → WHATSAPP
// =========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();


        // YOUR WHATSAPP NUMBER
        const whatsappNumber = "2347068874056";


        const whatsappMessage =
`Hello Daniel,

I received a message from my portfolio website.

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");

    });

}