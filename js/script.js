const search_form = document.querySelector(".search-form");
const search_button = document.querySelector(".search-button");

document.addEventListener("DOMContentLoaded", () => { 
    search_form.classList.add("search-form-off");
});

search_button.addEventListener("click", () => {
    search_form.classList.toggle("search-form-off");
});

