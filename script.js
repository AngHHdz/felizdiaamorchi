onload = () => {
  document.body.classList.remove("container");

  const audio = new Audio('https://github.com/AngHHdz/floresamarillas/blob/main/tu-cancion.mp3');
  audio.loop = true;

  // Intentar reproducir el audio al cargar la página
  document.addEventListener('click', () => {
    audio.play();
  });
};
