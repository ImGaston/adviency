function countdown() {
  let hoy = new Date();
  let navidad = new Date(2022, 11, 25);

  let tiempoActual = hoy.getTime();
  let tiempoNavidad = navidad.getTime();
  let resto = tiempoNavidad - tiempoActual;

  let segundos = Math.floor(resto / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  horas %= 24;
  minutos %= 60;
  segundos %= 60;

  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;

  let countdownTime =
    dias +
    ' días ' +
    horas +
    ' horas ' +
    minutos +
    ' minutos ' +
    segundos +
    ' segundos';

  document.querySelector('.timer').textContent = countdownTime;

  setTimeout(countdown, 1000);
}

countdown();
