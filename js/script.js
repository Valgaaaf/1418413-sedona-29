const search_form = document.querySelector(".search-form");

const search_button = document.querySelector(".search-button");

const date_in = document.querySelector("#in");

const date_out = document.querySelector("#out");

const adults = document.querySelector("#adults");

const kids = document.querySelector("#kids");

document.addEventListener("DOMContentLoaded", () => { 
    search_form.classList.add("search-form-off");
});

search_button.addEventListener("click", () => {
    search_form.classList.toggle("search-form-off");
});

search_form.addEventListener("submit", function (evt) {
if (!date_in.value || !date_out.value || !kids.value || !adults.value) {
evt.preventDefault();
console.log ("Введите данные");
search_form.classList.remove("search-form-error");
search_form.offsetWidth = search_form.offsetWidth;
search_form.classList.add("search-form-error");
}
});
