document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item a");
  const contentSections = document.querySelectorAll(".content-section");
  const subContentSections = document.querySelectorAll(".sub-content-section");

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();

      const target = menuItem.dataset.target;

      contentSections.forEach(function (section) {
        if (section.id === target) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });

      subContentSections.forEach(function (subSection) {
        if (subSection.id === target) {
          subSection.style.display = "block";
        } else {
          subSection.style.display = "none";
        }
      });
    });
  });
});
