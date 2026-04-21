const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const placeholderLinks = document.querySelectorAll("[data-placeholder-link]");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const observedSections = document.querySelectorAll("[data-section]");
const hero = document.querySelector(".hero");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setActiveSection = (id) => {
  sectionLinks.forEach((link) => {
    const isActive = link.dataset.sectionLink === id;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const updateHeroMotion = () => {
  if (!hero || prefersReducedMotion.matches) {
    return;
  }

  const maxDistance = Math.max(hero.offsetHeight * 0.55, 420);
  const progress = clamp(window.scrollY / maxDistance, 0, 1);

  root.style.setProperty("--hero-copy-shift", `${progress * 170}px`);
  root.style.setProperty("--hero-copy-opacity", `${1 - progress * 0.92}`);
  root.style.setProperty("--hero-sky-shift", `${progress * 24}px`);
  root.style.setProperty("--hero-mountains-shift", `${progress * 58}px`);
  root.style.setProperty("--hero-foreground-shift", `${progress * 34}px`);
};

const preventPlaceholderNavigation = () => {
  placeholderLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
};

const initSectionObserver = () => {
  if (!observedSections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    },
    {
      rootMargin: "-35% 0px -35% 0px",
      threshold: 0.25,
    }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
};

const initHeroMotion = () => {
  if (prefersReducedMotion.matches || !hero) {
    return;
  }

  root.classList.add("has-motion");

  window.addEventListener(
    "load",
    () => {
      updateHeroMotion();
      root.classList.add("is-ready");
    },
    { once: true }
  );

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateHeroMotion();
        ticking = false;
      });
    },
    { passive: true }
  );
};

preventPlaceholderNavigation();
initSectionObserver();
initHeroMotion();
