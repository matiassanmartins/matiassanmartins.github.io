

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".item");
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;

    if (scrollY >= sectionTop) {
        console.log(current)
      current = section.getAttribute("id");
    }
  });
  let active = null;


  links.forEach(link => {
    link.classList.remove("active");
    if (link.children[1].textContent === current) {
        console.log("logrado")
      link.classList.add("active");
      active = link;
    }
  });

  if (active) {
    active.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
});
