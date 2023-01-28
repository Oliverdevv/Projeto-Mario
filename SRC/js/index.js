/*

objetivo 1 quando o usuario clicar no de botao veja o trailer devemos abrir p mpdal com o video trailer 

passo numero 1 dar um jeito de pegar o elemento que representa o botao na tela usando o js 

passo numero 2 identificar quando o usuario clicar no botao 

passo numero 3 dar um jeito de pegar o elemento da modal no js

passo numero 4 abrir a modal na tela 

objetivo 2 quando o usuario clicar no x devemos fechae a modal 

passo numero 1 dar um jeito de pegar o elemento da modal de fechar a modal 

passo 2 dar um jeito de indentificar quando o usuario clicar no x 

passo 3 fechar a modal 


*/

const botaoTrailer = document.querySelector(".botao-trailer"); 
const botaoFecharModal = document.querySelector(".fechar-modal"); 
const video = document.getElementById("video");
const modal = document.querySelector(".modal");  
const linKdoVideo = video.src; 

function alternarmodal() {
    modal.classList.toggle("aberto"); 
}

botaoTrailer.addEventListener("click", () => {
alternarmodal();
video.setAttribute("src", linKdoVideo);
});





botaoFecharModal.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("src", "");
});








