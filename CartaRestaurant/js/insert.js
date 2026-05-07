document.addEventListener("DOMContentLoaded", () => {
  const div_carta = document.getElementById("div_carta");
  const div_categoria = document.getElementById("div_categoria");
  const fragment = document.createDocumentFragment();

  fetch("js/datos-carta.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((cat) => {

        const btn_categoria = document.createElement("button");
        btn_categoria.classList.add("item");
        btn_categoria.addEventListener("click", () => {
          location.href = "#" + cat.categoria;
        });
        const ico_categoria = document.createElement("span");
        ico_categoria.classList.add("material-symbols-outlined");
        ico_categoria.textContent = cat.icono;
        const txt_categoria = document.createElement("h5");
        txt_categoria.textContent = cat.categoria;
        btn_categoria.appendChild(ico_categoria);
        btn_categoria.appendChild(txt_categoria);
        div_categoria.appendChild(btn_categoria);

        const section = document.createElement("section");
        section.classList.add("cat");
        section.id = cat.categoria;
        const h1 = document.createElement("h1");
        h1.textContent = cat.categoria;
        const br = document.createElement("br");
        const row = document.createElement("div");
        
        row.classList.add(
          "row",
          "row-cols-2",
          "row-cols-sm-3",
          "row-cols-md-4",
          "g-3"
        );
        const divider = document.createElement("hr");

        cat.stock.forEach((stock) => {
          const col = document.createElement("div");
          col.classList.add("col");
          const card = document.createElement("div");
          card.classList.add("card", "shadow-sm","carta");
          const img = document.createElement("img");
          img.src = "/img/carta/" + stock.img;
          img.classList.add("img_carta");
          const card_body = document.createElement("div");
          card_body.classList.add("card-body");
          const h3 = document.createElement("h3");
          h3.textContent = stock.titulo;
          const p = document.createElement("p");
          p.classList.add("card-text");
          p.textContent = stock.descripcion;
          const text_end = document.createElement("div");
          text_end.classList.add("text-end");
          const small = document.createElement("small");
          small.classList.add("text-body-secondary");
          small.textContent = stock.precio;

          card_body.appendChild(h3);
          card_body.appendChild(p);
          text_end.appendChild(small);
          card_body.appendChild(text_end);
          card.appendChild(img);
          card.appendChild(card_body);
          col.appendChild(card);
          row.appendChild(col);
        });
        section.appendChild(h1);
        section.appendChild(br);
        section.appendChild(row);
        section.appendChild(divider);
        fragment.appendChild(section);
      });
      div_carta.appendChild(fragment);
    });
});
