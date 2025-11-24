let productos = [];

const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const grid = document.getElementById("grid");
const cancelBtn = document.getElementById("cancel");

addBtn.addEventListener("click", () => {
  form.reset();
  modal.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => modal.classList.add("hidden"));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const precio = document.getElementById("price").value;
  const file = document.getElementById("image").files[0];

  if (!file) return;

  const imagenUrl = URL.createObjectURL(file);
  const producto = { nombre, precio, imagen: imagenUrl };

  productos.push(producto);
  mostrarProducto(producto);
  modal.classList.add("hidden");
});

function mostrarProducto(p) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
  `;
  grid.appendChild(div);
}
