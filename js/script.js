const mountains = [
  { text: "Śnieżka", height: "1602", done: true },
  { text: "Wielka Sowa", height: "1015", done: true},
  { text: "Kopa Kondracka", height: "2005", done: true },
  { text: "Małołączniak", height: "2096", done: true },
  { text: "Rysy", height: "2499", done: false },
  { text: "Świnica", height: "2301", done: true },
  { text: "Ślęża", height: "718", done: true },
  { text: "Giewont", height: "1894", done: false },
  { text: "Tarnica", height: "1346", done: true },
  { text: "Śnieżnik", height: "1423", done: true },
];

const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".items");
const items = JSON.parse(localStorage.getItem("items")) || mountains;
localStorage.setItem("items", JSON.stringify(items));

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const height = this.querySelector("[name=height]").value;
  const item = {
    text,
    height,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(list = [], place) {
  place.innerHTML = list
    .map((item, i) => {
      return `
              <li>
                  <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : ""} />
                  <label for="item${i}">${item.text}</label>
                  <span class="height"> — ${item.height} m n.p.m.</span>
              </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const element = e.target;
  const index = element.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
