// Pequenos comportamentos de interface da página DevLab.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  console.log('DevLab — página carregada com sucesso!');
});
