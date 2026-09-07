document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("is-open");
    });
  }

  var filterButtons = document.querySelectorAll(".filter-tags button");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-filter");
      document.querySelectorAll("[data-category]").forEach(function (card) {
        var match = cat === "all" || card.getAttribute("data-category") === cat;
        card.style.display = match ? "" : "none";
      });
    });
  });

  document.querySelectorAll(".contact-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.querySelector(".form-success");
      if (success) success.classList.add("is-visible");
      form.reset();
    });
  });
});
