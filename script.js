const forms = document.getElementById("buscar-msc");
const listaDeMusicas = document.querySelector(".conteudo-tabela");

forms.addEventListener("submit", (form) => {
    form.preventDefault();
    buscarResultado();
})
function buscarResultado() {
    const cantor = document.querySelector(".buscar");
    const url = `https://api.lyrics.ovh/suggest/${cantor.value}`;
    listaDeMusicas.innerHTML = "";
    getMusica(url);
}
async function getMusica(url) {
    const response = await fetch(url).then(resposta => resposta.json());
    const data = response.data;
    
    for (const { title, album: { cover_medium, title: tituloDoAlbum }, artist: { name } } of data) {
    
    const conteudoTabela = document.createElement("tr");
    const infoArtista = document.createElement("td");
    const infoMusica = document.createElement("td");
    const imgDoAlbum = document.createElement("img");
    const tabelaCapa = document.createElement("td");
    const tabelaAlbum = document.createElement("td");
    
    tabelaAlbum.innerText = tituloDoAlbum;
    infoMusica.innerText = title;
    infoArtista.innerText = name;
    imgDoAlbum.src = cover_medium;
    imgDoAlbum.width = 100;
    imgDoAlbum.alt = "Imagem da capa do album";

    tabelaCapa.appendChild(imgDoAlbum);
    conteudoTabela.appendChild(tabelaCapa);
    conteudoTabela.appendChild(infoMusica);
    conteudoTabela.appendChild(infoArtista);
    conteudoTabela.appendChild(tabelaAlbum);
    listaDeMusicas.appendChild(conteudoTabela);

    } 
    
}









