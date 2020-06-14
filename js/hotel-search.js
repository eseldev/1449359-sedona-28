var searchButton = document.querySelector(".open-button");
var searchPopup = document.querySelector(".search-popup");
searchPopup.classList.add("search-popup-hide");

searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("search-popup-hide");
});
