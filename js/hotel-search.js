var searchButton = document.querySelector(".open-button");
var searchPopup = document.querySelector(".search-popup");
searchPopup.classList.add("search-popup-hide");
var arrivalInput = searchPopup.querySelector(".visitor-arrival");
var departureInput = searchPopup.querySelector(".visitor-departure");
var adultsInput = searchPopup.querySelector(".adults-num-input");
var kidsInput = searchPopup.querySelector(".kids-num-input");
var searchForm = searchPopup.querySelector(".search-form");

var isStorageSupport = true;
var storage1 = "";
var storage2 = "";

try {
    storage1 = localStorage.getItem("adults");
    storage2 = localStorage.getItem("kids");
} catch (err) {
    isStorageSupport = false;
}

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("search-popup-hide");
    searchPopup.classList.remove("search-popup-error");
    arrivalInput.focus();
});

searchForm.addEventListener("submit", function (evt) {
    if (!arrivalInput.value || !departureInput.value || !adultsInput.value) {
        evt.preventDefault();
        searchPopup.classList.remove("search-popup-error");
        searchPopup.offsetWidth = searchPopup.offsetWidth;
        searchPopup.classList.add("search-popup-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adultsInput.value);
            localStorage.setItem("kids", kidsInput.value);
        }
    }
});
