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

function searchIcon(){
    searchForm.className = searchForm.className == "visible" ? "" : "visible";
};
search.addEventListener('click', searchIcon, false);


var dropBtnBeaute = document.getElementById("drop-btn-beaute");
var dropBtnCoiffure = document.getElementById("drop-btn-coiffure");
var dropBtnMassageSpa = document.getElementById("drop-btn-massagespa");
var dropBtnFormeMinceur = document.getElementById("drop-btn-formeminceur");
var dropdowns = document.getElementsByClassName("dropdown-content");

function dropdownClick(sectionId){
  document.getElementById(sectionId).classList.toggle("show");
  dropdownClose(sectionId);
}

function dropdownClose(id = null){
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var dropdown = dropdowns[i];
    if (dropdown.classList.contains('show') && dropdown.id != id) {
      dropdown.classList.remove('show');
    }
  }
}

dropBtnBeaute.addEventListener("click", function(){
    dropdownClick('drop-content-beaute');
}, false);
dropBtnCoiffure.addEventListener("click", function(){
    dropdownClick('drop-content-coiffure');
}, false);
dropBtnMassageSpa.addEventListener("click", function(){
    dropdownClick('drop-content-massagespa');
}, false);
dropBtnFormeMinceur.addEventListener("click", function(){
    dropdownClick('drop-content-formeminceur');
}, false);

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdownClose();
  }
}
