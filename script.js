

/*
const url = "https://jsonplaceholder.typicode.com/posts"
async function getComentarios() {
    const data = await fetch(url).then(resposta => resposta.json());
    const divComentarios = document.querySelector("#idcomentarios");

    data.map((coments => {
        const paragrafo = document.createElement("p");
        paragrafo.classList.add("comentarios");
        paragrafo.textContent = coments.title;
        divComentarios.appendChild(paragrafo);
    }))
}

*/
const cantor = "Um Barril de Rap";
const url = `https://api.lyrics.ovh/suggest/${cantor}`;

async function getMusica() {
    const dats = await fetch(url).then(resposta => resposta.json());

    console.log(dats);

}

//getMusica();