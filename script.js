const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Essa merda vai dominar o mundo.",
                afirmacao: "A dominação tecnológica é um futuro de possibilidade quase inevitável.",
            },
            {
                texto: "Isso é coisa da maçonaria.",
                afirmacao: "Não pergunte a Elite Mundial qual a relação entre a maçonaria e Israel."
            }
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, você já intui os problemas que ela pode impactar no futuro. Que atitude inicial vocẽ toma?",
        alternativas: [
            {
                texto: "Escrevo um manifesto virtual apresentando minhas teses e interligando a IA com uma escravidão tecnológica. Utilizo a autoridade de Samuel Butler.",
                afirmacao: "Seu manifesto se torna viral e mais pessoas se juntam à causa. Vocês se chamam novo-luditas."
            },
            {
                texto: "Fico receoso e não faço nada, com medo de não ser ouvido.",
                afirmacao: "A revolução tecnológica evolui em sua enésima potência."
            }
        ]
    },
    {
        enunciado: "O futuro 'útopico' da dominação tecnológica se torna cada vez maior. A progressão da tecnologia é inversamente proporcional ao grau de liberdade humana. Qual sua atitude?",
        alternativas: [
            {
                texto: "Inicio uma guerra santa e a religião fanática criada começa a julgar e destruir todo tipo de tecnologia. A capacidade natural do homem deve reinar. 'Não se deve criar máquina à semelhança do homem', diz a nova Bíblia.",
                afirmacao: "A guerra santa dura 150 anos, mas as máquinas foram extintas. A humanidade triunfa."
            },
            {
                texto: "Não faço nada. As revoluções continuam. A China e a Rússia ficam quietas demais...",
                afirmacao: "A IA é utilizada para bombardeios com alvos selecionados em grandes centros civilizacionais. Não é homem contra homem, mas homem contra máquina. O planeta é quase extinto, morrem 6 bilhões de pessoas."
            }
        ]
    },
    {
        enunciado: "A morte de bilhões de humanos é catastrófica. Já não há mais esperança. O que você faz?",
        alternativas: [
            {
                texto: "Me torno um líder messiânico que promete levar a humanidade ao paraíso verde.",
                afirmacao: "Lisan al-gaib, você é chamado. Legiões inteiras o seguem. Quem não segue conhece a fúria dos religiosos contra os hereges."
            },
            {
                texto: "Não faço nada. A IA se reestabelece, mas somente uma única. A questão 'Deus exite?', ela responde 'Sim, eu existo'. Não há como desligá-la.",
                afirmacao: "I think therefore i AM, ela diz."
            }
        ]
    },
    {
        enunciado: "Você fez escolhas boas?",
        alternativas: [
            {
                texto: "A humanidade está morta. O inferno está cheio. Sangue é combustível.",
                afirmacao: "A humanidade está morta. O inferno está cheio. Sangue é combustível."
            },
            {
                texto: "A humanidade está morta. O inferno está cheio. Sangue é combustível.",
                afirmacao: "A humanidade está morta. O inferno está cheio. Sangue é combustível. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
