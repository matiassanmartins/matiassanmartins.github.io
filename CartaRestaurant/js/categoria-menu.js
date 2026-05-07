window.onscroll = function() {myFunction()};

const menu = document.getElementById("categoria_menu");
const placeholder = document.getElementById('placeholder');
const sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    placeholder.style.height = menu.offsetHeight + 'px';
    menu.classList.add("fix-menu");
    menu.style.width = placeholder.offsetWidth + 'px';
  } else {
    menu.classList.remove("fix-menu");
    placeholder.style.height = '0px';
    menu.style.width = '100%'
  }
}