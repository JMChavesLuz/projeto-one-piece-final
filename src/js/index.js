/*
O que precisamos fazer? Quando clicar no botão do personagem na lista temos que marcar esse botão como "selecionado" e mostrar o personagem correspondente.
    OBJETIVO 1 - quando clicar no botão do personagem na lista marcar esse botão como selecionado
        passo 1
        passo 2
        passo 3
    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1
        passo 2
        passo 3
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
