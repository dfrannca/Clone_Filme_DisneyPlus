document.addEventListener("DOMContentLoaded", () => {
    const buttonsShows = document.querySelectorAll("[data-tab-button]");
    const header = document.querySelector(".header");
    const headerAltura = header.clientHeight;
    const main = document.querySelector("main");
    const hero = document.querySelector(".hero");
    const heroAltura = hero.clientHeight;

    for (let i = 0; i < buttonsShows.length; i++) {
        buttonsShows[i].addEventListener("click", (button) => {
            const abaAlvo = button.target.dataset.tabButton; // Pega o atributo que relaciona com a aba alvo do button
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); // Retorna a aba alvo
            escondeAbas(); // Faz a aba anterior fechar
            aba.classList.add("shows__films__list--is-active"); // Faz a aba alvo aparece
            removerActiveDosButtons(); // Retira o active do button anterior
            button.target.classList.add("options__list__item--is-active"); // Ativa o button clicado
        });
    }

    window.addEventListener("scroll", () => {
        const posicaoAtualScroll = window.scrollY;
        let positionScroll = posicaoAtualScroll.toFixed(0);
        
        let escala = ((positionScroll/1000) * 2);
        if ((escala >= 0.000) && (escala < 1)) {
            main.style.background = `linear-gradient(to right, #2b2b2b, rgba(15, 15, 15, ${escala}))`;
        }

        if (posicaoAtualScroll < headerAltura) {
            header.classList.remove("header--is-active");
        }
        else {
            header.classList.add("header--is-active");
        }
    });
});

// Esconde as abas
function escondeAbas() {
    const abas = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < abas.length; i++) {
        abas[i].classList.remove("shows__films__list--is-active");
    }
}

// Remove o estilo do button ativo
function removerActiveDosButtons() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("options__list__item--is-active");
    }
}