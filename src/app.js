const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownEl = document.getElementById("dropdown");

dropdownBtn.addEventListener("click", function () {
    dropdownEl.hidden
        ? (dropdownEl.hidden = false)
        : (dropdownEl.hidden = true);
});
