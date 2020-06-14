var searchButton = document.querySelector(".open-button");
var searchPopup = document.querySelector(".search-popup");
searchPopup.classList.add("search-popup-hide");
var arrivalInput = searchPopup.querySelector(".visitor-arrival");
var departureInput = searchPopup.querySelector(".visitor-departure");
var adultsInput = searchPopup.querySelector(".adults-num-input");
var kidsInput = searchPopup.querySelector(".kids-num-input");
var searchForm = searchPopup.querySelector(".search-form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("search-popup-hide");
    if (storage) {
        adultsInput.value = storage;
    } else {
        kidsInput.value = storage;
      }
    arrivalInput.focus();
});

searchForm.addEventListener("submit", function (evt) {
    if (!arrivalInput.value || !departureInput.value || !adultsInput.value) {
        evt.preventDefault();
    } else {
        localStorage.setItem("adults", adultsInput.value);
        localStorage.setItem("kids", kidsInput.value);
      }
});
