document.addEventListener("DOMContentLoaded", () => {
  // ===== Elements =====
  const burger = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");
  const navAnchors = document.querySelectorAll(".nav-link");

  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const serviceSelect = document.getElementById("serviceSelect");

  const bookBtn = document.getElementById("bookBtn");
  const bookBtnTop = document.getElementById("bookBtnTop");
  const bookBtnBottom = document.getElementById("bookBtnBottom");
  const bookForm = document.getElementById("bookForm");
  const quickForm = document.getElementById("quickForm");

  const preloader = document.getElementById("preloader");
  const blob1 = document.querySelector(".blob-1");
  const blob2 = document.querySelector(".blob-2");

  // ===== Footer year =====
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== Preloader + page enter =====
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
      preloader?.classList.add("hide");
    }, 450);
  });

  // ===== Mobile menu toggle =====
  burger?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");
  });

  // Close menu on link click
  navAnchors.forEach((a) => {
    a.addEventListener("click", () => navLinks?.classList.remove("active"));
  });

  // ===== Active link on scroll =====
  const sections = [...document.querySelectorAll("section[id]")];

  const setActive = () => {
    const y = window.scrollY + 120;
    let currentId = "home";

    for (const s of sections) {
      if (y >= s.offsetTop) currentId = s.id;
    }

    navAnchors.forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  // ===== Modal helpers =====
  const openModal = (service) => {
    if (service && serviceSelect) serviceSelect.value = service;
    modal?.classList.add("open");
    modal?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Open modal from buttons
  [bookBtn, bookBtnTop, bookBtnBottom].forEach((btn) => {
    btn?.addEventListener("click", () => openModal());
  });

  // Open modal from price cards
  document.querySelectorAll("[data-book]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const service = e.currentTarget.getAttribute("data-book");
      openModal(service);
    });
  });

  // Close modal
  modalClose?.addEventListener("click", closeModal);

  // Close by backdrop
  modal?.addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close === "true") {
      closeModal();
    }
  });

  // Close by ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) closeModal();
  });

  // ===== Booking form submit (demo) =====
  bookForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(bookForm);
    const service = data.get("service");
    const name = data.get("name");
    const phone = data.get("phone");

    closeModal();
    alert(`Рақмет, ${name}! "${service}" қызметіне өтініш қабылданды. Біз ${phone} нөміріне хабарласамыз.`);
    bookForm.reset();
  });

  // ===== Quick form submit (demo) =====
  quickForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(quickForm);
    const name = data.get("name");
    const phone = data.get("phone");

    alert(`Рақмет, ${name}! Өтініш қабылданды. Біз ${phone} нөміріне хабарласамыз.`);
    quickForm.reset();
  });

  // ===== “Always playing” subtle parallax for blobs =====
  // (If user has reduced motion, do nothing)
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    window.addEventListener(
      "mousemove",
      (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 14;

        if (blob1) blob1.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        if (blob2) blob2.style.transform = `translate(${-x}px, ${-y}px) scale(1)`;
      },
      { passive: true }
    );
  }
});