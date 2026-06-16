// =========================
// MENU HAMBÚRGUER
// =========================
const hamburguer = document.getElementById("hamburguer");
const navLinks = document.querySelector(".nav-links");

if (hamburguer && navLinks) {
    hamburguer.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =========================s
// BOTÃO BUSCAR
// =========================
const buscarBtn = document.getElementById("buscarBtn");

if (buscarBtn) {
    buscarBtn.addEventListener("click", () => {
        alert("Busca realizada com sucesso!");
    });
}


// =========================
// NEWSLETTER
// =========================
const newsletterBtn = document.getElementById("newsletterBtn");

if (newsletterBtn) {
    newsletterBtn.addEventListener("click", () => {
        alert("E-mail enviado com sucesso!");
    });
}


// =========================
// BOTÕES SAIBA MAIS
// =========================
const botoesSaibaMais = document.querySelectorAll(".card button");

botoesSaibaMais.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Em breve mais informações sobre este destino!");
    });
});


// =========================
// AVALIAÇÕES DOS CLIENTES
// =========================
const depoimentos = [
    {
        nome: "Ana Carolina",
        texto: "Minha viagem foi incrível. Atendimento excelente e roteiro perfeito! Consegui conhecer lugares maravilhosos e viver experiências únicas.",
        foto: "mulher.jpg"
    },
    {
        nome: "Marcos Silva",
        texto: "Gostei muito da organização da agência. Tudo ocorreu no horário certo e a experiência foi excelente.",
        foto: "homem1.png"
    },
    {
        nome: "Juliana Costa",
        texto: "Foi uma das melhores viagens da minha vida. Recomendo muito a agência pelo suporte e atenção.",
        foto: "mulher 3.png"
    }
];

let indiceAtual = 0;

const nomeCliente = document.getElementById("nomeCliente");
const depoimento = document.getElementById("depoimento");
const fotoCliente = document.getElementById("fotoCliente");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

function atualizarDepoimento() {
    if (nomeCliente && depoimento && fotoCliente) {
        nomeCliente.textContent = depoimentos[indiceAtual].nome;
        depoimento.textContent = depoimentos[indiceAtual].texto;
        fotoCliente.src = depoimentos[indiceAtual].foto;
    }
}

if (proximo) {
    proximo.addEventListener("click", () => {
        indiceAtual++;

        if (indiceAtual >= depoimentos.length) {
            indiceAtual = 0;
        }

        atualizarDepoimento();
    });
}

if (anterior) {
    anterior.addEventListener("click", () => {
        indiceAtual--;

        if (indiceAtual < 0) {
            indiceAtual = depoimentos.length - 1;
        }

        atualizarDepoimento();
    });
}

// Inicializa ao abrir a página
atualizarDepoimento();