const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const service = document.getElementById("service").value;

    const date = document.getElementById("date").value;


    // Swamini Makeover WhatsApp Number
    const salonNumber = "918788904842";


    const message = `
Hello Swamini Makeover!

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}

Thank you!
`;


    const whatsappURL =
        `https://wa.me/${salonNumber}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");

});
// SCROLL REVEAL ANIMATION

const revealSections = document.querySelectorAll(
    ".about, .services, .gallery, .why-us, .booking, .contact"
);

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealSections.forEach(function (section) {
    section.classList.add("reveal-section");
    revealObserver.observe(section);
});