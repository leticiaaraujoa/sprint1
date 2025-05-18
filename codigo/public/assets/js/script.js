
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

const url = encodeURIComponent(window.location.href);
const titulo = encodeURIComponent(document.querySelector("h1").textContent);

document.getElementById("compartilhar-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
document.getElementById("compartilhar-twitter").href = `https://twitter.com/intent/tweet?text=${titulo}&url=${url}`;
document.getElementById("compartilhar-whatsapp").href = `https://wa.me/?text=${titulo}%20${url}`;
