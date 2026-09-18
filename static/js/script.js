/* ================================
   SAVORÉ - RESTAURANT JAVASCRIPT
   ================================ */


/* ================================
   MENU FILTER
   ================================ */

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        this.classList.add("active");

        const category = this.getAttribute("data-category");

        menuItems.forEach(item => {

            const itemCategory = item.getAttribute("data-category");

            if (category === "all" || category === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


/* ================================
   NAVBAR SCROLL EFFECT
   ================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* ================================
   RESERVATION FORM
   ================================ */

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " + name +
            "! Your table reservation request has been received."
        );

        reservationForm.reset();

    });

}


/* ================================
   GALLERY IMAGE EFFECT
   ================================ */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("click", function () {

        const image = this.querySelector("img");

        if (image) {
            window.open(image.src, "_blank");
        }

    });

});


/* ================================
   CURRENT YEAR
   ================================ */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}