const hamburger = document.querySelector(".hamburger");
const navMenuWrap = document.querySelector(".nav-menu-wrap");
const navLinks = document.querySelectorAll(".nav-link, .nav-icon");
const year = document.getElementById("year");
const contactForm = document.getElementById("contact-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

function closeMenu() {
  if (!hamburger || !navMenuWrap) {
    return;
  }

  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  navMenuWrap.classList.remove("active");
}

if (hamburger && navMenuWrap) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    navMenuWrap.classList.toggle("active", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    closeMenu();
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:bricetangmouo@gmail.com?subject=${subject}&body=${body}`;
  });
}
