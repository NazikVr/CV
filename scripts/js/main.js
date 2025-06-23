const currentPage = window.location.pathname.split("/").pop();
const paginationLinks = document.querySelectorAll(".navigation__item");

paginationLinks.forEach((link) => {
  const href = link.children[0].getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});
