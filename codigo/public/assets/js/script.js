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

// Função de aumentar e diminuir a fonte
function ajustarFonte(tipo) {
  const body = document.querySelector('body');
  const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
  const newSize = tipo === '+' ? currentSize * 1.1 : currentSize / 1.1;
  body.style.fontSize = `${newSize}px`;
}

// Função para alternar o tema (claro/escuro)
function alternarModo() {
  document.body.classList.toggle('modo-escuro');
}

// Função para copiar o link
function copiarLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copiado para a área de transferência!');
  });
}

// Função para enviar o comentário
const btnEnviar = document.getElementById("enviar-comentario");
const inputComentario = document.getElementById("comentario-input");
const listaComentarios = document.getElementById("lista-comentarios");

btnEnviar.addEventListener("click", () => {
  const texto = inputComentario.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.addEventListener('click', () => {
      inputComentario.value = li.textContent.replace('Editar', '').trim();
      listaComentarios.removeChild(li);
    });
    
    const apagarBtn = document.createElement('button');
    apagarBtn.textContent = 'Apagar';
    apagarBtn.addEventListener('click', () => {
      listaComentarios.removeChild(li);
    });

    li.appendChild(editarBtn);
    li.appendChild(apagarBtn);
    
    listaComentarios.appendChild(li);
    inputComentario.value = "";
  }
});

// Função para compartilhar nas redes sociais
const url = encodeURIComponent(window.location.href);
const titulo = encodeURIComponent(document.querySelector("h1").textContent);

document.getElementById("compartilhar-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
document.getElementById("compartilhar-twitter").href = `https://twitter.com/intent/tweet?text=${titulo}&url=${url}`;
document.getElementById("compartilhar-whatsapp").href = `https://wa.me/?text=${titulo}%20${url}`;

async function getPosts() {
  try {
    const p = await fetch(`https://upgraded-space-eureka-5gr6g7wxpp9724g9p-3000.app.github.dev/posts`);
    console.log(p);
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener("load", async () => {
  await getPosts();
});
