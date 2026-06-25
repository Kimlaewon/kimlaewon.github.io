document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const menuButton = document.querySelector("#menuButton");
  const nav = document.querySelector("#nav");
  const navLinks = document.querySelectorAll(".nav a");
  const reveals = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section[id]");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader);

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("open");
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    reveals.forEach((item) => {
      revealObserver.observe(item);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  } else {
    reveals.forEach((item) => {
      item.classList.add("active");
    });
  }
});