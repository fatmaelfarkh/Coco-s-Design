// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("responsive");
});

// Hero Carousel
$(document).ready(function () {
  $(".hero-carousel").slick({
    dots: true,
    infinite: true,
    speed: 800, // Increased for smoother transition
    fade: false, // Removed fade for smooth sliding
    cssEase: "ease-in-out", // Changed to smooth easing
    autoplay: true,
    autoplaySpeed: 3000, // Changed to 3 seconds
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productData = JSON.parse(event.target.getAttribute("data-product"));

      Swal.fire({
        title: `<strong>${productData.name}</strong>`,
        html: `
            <img src="${productData.image}" alt="${productData.name}" style="width: 100%; max-width: 300px; margin-bottom: 15px;">
            <p><strong>Price:</strong> ${productData.price}</p>
            <p><strong>Checkout Summary:</strong></p>
            <ul style="text-align: left;">
              <li>Shipping: Free</li>
              <li>Tax: Included</li>
              <li>Total: ${productData.price}</li>
            </ul>
          `,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Proceed to Checkout",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Success!",
            "Your checkout process has started!",
            "success"
          );
        }
      });
    });
  });
});

// Handle accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const accordionToggle = document.querySelector('.accordion-toggle');
  const accordionContent = document.querySelector('.accordion-content');

  accordionToggle.addEventListener('click', () => {
    accordionToggle.classList.toggle('active');
    accordionContent.classList.toggle('active');
  });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('active');
});
