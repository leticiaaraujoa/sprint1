
const btnFavoritar = document.getElementById("btn-favoritar");
let favorito = localStorage.getItem("favorito") === "true";

function atualizarEstadoFavorito() {
  btnFavoritar.textContent = favorito ? "⭐ Favoritado" : "⭐ Favoritar";
}

btnFavoritar.addEventListener("click", () => {
  favorito = !favorito;
  localStorage.setItem("favorito", favorito);
  atualizarEstadoFavorito();
});

atualizarEstadoFavorito();

// COMENTÁRIOS
const btnEnviar = document.getElementById("enviar-comentario");
const inputComentario = document.getElementById("comentario-input");
const listaComentarios = document.getElementById("lista-comentarios");

btnEnviar.addEventListener("click", () => {
  const texto = inputComentario.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    listaComentarios.appendChild(li);
    inputComentario.value = "";
  }
});
