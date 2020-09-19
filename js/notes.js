const badges = `— Odznaka Zdobywcy Korony Gór Polski
— Popularna Górska Odznaka Turystyczna PTTK
— Mała Brązowa Górska Odznaka Turystyczna PTTK`;

const places = `Smreczyński Staw 
– polodowcowe jezioro morenowe w polskich Tatrach Zachodnich

Wodospad Szklarki
– drugi co do wysokości, po Wodospadzie Kamieńczyka (27 m wysokości) wodospad w polskich Karkonoszach, położony na wysokości 525 m n.p.m.
`;

const badgesNote = document.querySelector("#badges");
const placesNote = document.querySelector("#places");

function setNotes(note = "", place) {
  place.innerHTML = note;
}

function updateNote(place, title) {
  const note = place.value;
  localStorage.setItem(title, JSON.stringify(note));
}

note1 = JSON.parse(localStorage.getItem("badges")) || badges;
setNotes(note1, badgesNote);

note2 = JSON.parse(localStorage.getItem("places")) || places;
setNotes(note2, placesNote);

badgesNote.addEventListener("input", (e) => updateNote(e.target, "badges"));
placesNote.addEventListener("input", (e) => updateNote(e.target, "places"));