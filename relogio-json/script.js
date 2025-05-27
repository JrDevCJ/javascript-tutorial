// Obtem a referencia dos elementos html
const displayTime = document.getElementById("display-time");
const displayDate = document.getElementById("display-date");
const displayBattery = document.getElementById("display-battery");
const displayTemperature = document.getElementById("display-temperature");

// --- Função para formatar numeros com 2 digitos ---
function formatTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}

// --- Função para atualizar o Tempo ---
function updateTime() {
  const now = new Date();
  const hours = formatTwoDigits(now.getHours());
  const minutes = formatTwoDigits(now.getMinutes());
  const seconds = formatTwoDigits(now.getSeconds());
  if (displayTime) {
    displayTime.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// --- Função para atualizar a Data ---
function updateDate() {
  const now = new Date();
  const day = formatTwoDigits(now.getDate());
  const month = formatTwoDigits(now.getMonth() + 1); 
  const year = now.getFullYear();
  if (displayDate) {
    displayDate.textContent = `${day}-${month}-${year}`;
  }
}

// --- Função para simular Bateria ---
function updateBattery() {
  if (displayBattery) {
    const simulatedBattery = Math.floor(Math.random() * (99 - 40 + 1)) + 40;
    displayBattery.textContent = `${simulatedBattery}%`;
  }
}

// --- Função para simular TEmperatura ---
function updateTemperature() {
  if (displayTemperature) {
    const simulatedTemperature = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
    displayTemperature.textContent = `${simulatedTemperature}ºC`;
  }
}

// --- Função Principal ---
function initializeWatchDisplay() {
  // Call individual update functions to set initial display
  updateTime();
  updateDate();
  updateBattery();
  updateTemperature();

  // configura intervalos
  setInterval(updateTime, 1000); // atualiza a cada segundo
  setInterval(updateDate, 60000); // atualiza a cada minuto
  setInterval(updateBattery, 5000); // atualiza a Bateria a cada 5 segundos
  setInterval(updateTemperature, 7000); // atualiza a temperature a cada 7 segundos
}

// --- Inicializa ---
document.addEventListener("DOMContentLoaded", initializeWatchDisplay);
