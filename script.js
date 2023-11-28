var typed = new Typed(".input", {
  strings: ["Olivia Wagner", "Web Developer", "UI UX Designer"],
  typeSpeed: 70,
  backSpeed: 65,
  loop: true,
});

const sr = ScrollReveal({
  distance: "45px",
  duration: 2400,
  reset: true,
});

sr.reveal(".main-content h4", { delay: 510, origin: "top" });
sr.reveal(".main-content h1", { delay: 610, origin: "left" });
sr.reveal(".main-content p", { delay: 710, origin: "right" });
sr.reveal(".socials", { delay: 810, origin: "left" });
sr.reveal(".hero-btn", { delay: 910, origin: "top" });
sr.reveal(".hero-img", { delay: 910, origin: "bottom" });
