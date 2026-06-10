// Interação do botão "Saiba mais"
const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreInfo = document.getElementById("moreInfo");

learnMoreBtn.addEventListener("click", () => {
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        learnMoreBtn.textContent = "Mostrar menos";
    } else {
        moreInfo.style.display = "none";
        learnMoreBtn.textContent = "Saiba mais";
    }
});

// Validação simples do formulário
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        formMessage.textContent = "Mensagem enviada com sucesso! Obrigado.";
        formMessage.style.color = "green";
        contactForm.reset();
    } else {
        formMessage.textContent = "Por favor, preencha todos os campos.";
        formMessage.style.color = "red";
    }
});
