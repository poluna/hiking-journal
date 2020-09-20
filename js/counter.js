const peaks = [
  "Rysy",
  "Babia Góra",
  "Śnieżka",
  "Śnieżnik",
  "Tarnica",
  "Turbacz",
  "Radziejowa",
  "Skrzyczne",
  "Mogielica",
  "Wysoka Kopa",
  "Rudawiec",
  "Orlica",
  "Wysoka",
  "Wielka Sowa",
  "Lackowa",
  "Kowadło",
  "Jagodna",
  "Skalnik",
  "Waligóra",
  "Czupel",
  "Szczeliniec Wielki",
  "Lubomir",
  "Biskupia Kopa",
  "Chełmiec",
  "Kłodzka Góra",
  "Skopiec",
  "Ślęża",
  "Łysica",
];

const counter = document.querySelector("#counter");

function updatePeaks() {
  let peaksConquered = JSON.parse(localStorage.getItem("items"));

  peaksConquered = peaksConquered.filter((peak) => {
    return peak.done == true && peaks.includes(peak.text);
  });

  counter.innerHTML = `${peaksConquered.length} z 28`;
}

updatePeaks();

const peaksList = document.querySelector(".items");
peaksList.addEventListener("click", updatePeaks);
