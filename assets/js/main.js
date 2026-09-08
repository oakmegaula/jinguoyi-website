// 部署完 Google Apps Script Web App 後，把網址貼在這裡（詳見 google-apps-script/README.md）
var GOOGLE_SHEET_WEBHOOK_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

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
      var formData = new FormData(form);
      var payload = {
        name: formData.get("name") || "",
        bizType: formData.get("bizType") || "",
        fbLink: formData.get("fbLink") || "",
        fakeFans: formData.get("fakeFans") || "",
        budget: formData.get("budget") || "",
        contact: formData.get("contact") || "",
        interests: formData.getAll("interests").join("、"),
        page: location.pathname,
        submittedAt: new Date().toISOString()
      };

      if (GOOGLE_SHEET_WEBHOOK_URL.indexOf("PASTE_YOUR") === -1) {
        // 用 text/plain 避開瀏覽器的 CORS preflight，Apps Script 端仍可用 JSON.parse 解析 body
        fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        }).catch(function (err) {
          console.error("送出表單資料至 Google Sheet 時發生錯誤", err);
        });
      } else {
        console.warn("尚未設定 GOOGLE_SHEET_WEBHOOK_URL，表單資料目前不會被送出至 Google Sheet。");
      }

      var success = form.querySelector(".form-success");
      if (success) success.classList.add("is-visible");
      form.reset();
    });
  });
});
