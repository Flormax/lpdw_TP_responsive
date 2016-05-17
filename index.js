//Ouverture nav avec burger icon
var burger = document.getElementById('burger');
var navbar = document.getElementById('navbar');

function burgerIcon(){
    navbar.className = navbar.className == "visible" ? "" : "visible";
};
burger.addEventListener('click', burgerIcon, false);


//Ouverture formulaire search avec search icon
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


//Ouverture menu dropdown
var dropBtnBeaute = document.getElementById("drop-btn-beaute");
var dropBtnCoiffure = document.getElementById("drop-btn-coiffure");
var dropBtnMassageSpa = document.getElementById("drop-btn-massagespa");
var dropBtnFormeMinceur = document.getElementById("drop-btn-formeminceur");
var dropdowns = document.getElementsByClassName("dropdown-content");

function dropdownClick(sectionId){
  document.getElementById(sectionId).classList.toggle("show");
  dropdownClose(sectionId);
}

function dropdownClose(id){
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


//Slider commentaires
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var pages = document.getElementsByClassName("slider-page");
var i;

function slideClick(page){
  document.getElementById(page).className = "slider-page show";
  slideHide(page, event.target.id);
}

function slideHide(idPage, idButton){
  for (i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (page.classList.contains('show') && page.id != idPage) {
      page.classList.remove('show');
    }
    var btn = document.getElementById("btn" + (i+1));
    document.getElementById(idButton).className = "activ";
    if (btn.id != idButton) {
      btn.className = "unactiv";
    }
  }
}

btn1.addEventListener("click", function(){
    slideClick('page1');
}, false);
btn2.addEventListener("click", function(){
    slideClick('page2');
}, false);
btn3.addEventListener("click", function(){
    slideClick('page3');
}, false);
