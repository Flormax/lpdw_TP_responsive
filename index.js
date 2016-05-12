var burger = document.getElementById('burger');
var navbar = document.getElementById('navbar');

function burgerIcon(){
    navbar.className = navbar.className == "visible" ? "" : "visible";
};
burger.addEventListener('click', burgerIcon, false);


var search = document.getElementById('search-header');
var searchForm = document.getElementById('search-form');

function searchIcon(){
    searchForm.className = searchForm.className == "visible" ? "" : "visible";
};
search.addEventListener('click', searchIcon, false);
