// script.js

document.getElementById('burger-menu').addEventListener('click', function () {
  document.getElementById('overlay').style.left = '0'; // Показать оверлей
});

document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').style.left = '-100%'; // Скрыть оверлей
});
