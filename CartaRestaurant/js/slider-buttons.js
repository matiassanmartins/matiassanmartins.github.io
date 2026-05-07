const contenedor = document.querySelector('.contenedor');

function scrollIzq() {
  contenedor.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollDer() {
  contenedor.scrollBy({ left: 200, behavior: 'smooth' });
}