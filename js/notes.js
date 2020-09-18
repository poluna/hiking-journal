const badges = `— Odznaka Zdobywcy Korony Gór Polski
— Popularna Górska Odznaka Turystyczna PTTK
— Mała Brązowa Górska Odznaka Turystyczna PTTK`;

const badgesNote = document.querySelector("#badges");

function setNotes(note = "", place) {
  place.innerHTML = note;
}

function updateNote(title) {
  const note = badgesNote.value;
  localStorage.setItem(title, JSON.stringify(note));
}

note = JSON.parse(localStorage.getItem("notes")) || badges;
setNotes(note, badgesNote);

badgesNote.addEventListener("input", updateNote.bind(this, "badges"));
