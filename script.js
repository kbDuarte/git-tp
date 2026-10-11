// Atualiza o ano que aparece no rodapé.
const ano = document.querySelector("#ano");

if (ano) {
  ano.textContent = new Date().getFullYear();
}
