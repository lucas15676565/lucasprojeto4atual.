import { aleatorio, nome } from "./aleatorio.js";
import { perguntas } from "./js/perguntas";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial")


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
botaoIniciar.addEventListener('click', iniciajogo);

function mostraPergunta() {
     if (atual >= perguntas.length) {
      mostraResultado();
      return;
     }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
     const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa.texto;
     botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
     caixaAlternativas.appendChild(botaoAlternativas);
   }
 }

 function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
 }


