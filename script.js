// Captura o formulário
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Escuta o envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede recarregar a página

  // Pega os valores digitados
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validação simples
  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Valida formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "Digite um e-mail válido.";
    return;
  }

  // Se tudo estiver certo
  formMessage.style.color = "green";
  formMessage.textContent = "Mensagem enviada com sucesso!";

  // Limpa os campos
  form.reset();
});
