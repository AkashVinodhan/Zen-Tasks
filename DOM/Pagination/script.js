let div = document.createElement("div");
div.setAttribute("class", "table-responsive");
let table = document.createElement("table");
table.setAttribute("id", "table");
table.setAttribute("class", "table table-bordered border-dark table-hover");
let main = document.querySelector(".main");
div.appendChild(table);
main.appendChild(div);
const pageNumbers = document.querySelectorAll(".btn-numbers");
const firstPgBtn = document.querySelector("#btn-first");
const prevPgBtn = document.querySelector("#btn-prev");
const lastPgBtn = document.querySelector("#btn-last");
const nextPgBtn = document.querySelector("#btn-next");
let currentPg, prevPg, nextPg;
const rowsPerPage = 10;

const arr = fetch("data.json").then((res) => res.json());

let showTable = (start, end, current) => {
  currentPg = current; //*Keep track of current page Number
  prevPg = currentPg - 1;
  nextPg = currentPg + 1;
  table.innerHTML =
    " <thead class = 'text-center'><tr><th>Id</th><th>Name</th><th>Email</th></tr></thead>";
  let tbody = document.createElement("tbody");
  tbody.setAttribute("class", "table-group-divider text-center");
  table.appendChild(tbody);
  arr.then((data) => {
    newArr = data.slice(start, end);
    newArr.forEach((element) => {
      let { id, name, email } = element;
      let row = tbody.insertRow(-1);
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      c1.innerText = id;
      c2.innerText = name;
      c3.innerText = email;
    });
  });
};

const startPage = showTable(0, rowsPerPage, 1);

pageNumbers.forEach((element) => {
  element.addEventListener("click", (e) => {
    currentPg = e.target.innerText;
    let end = Number(e.target.innerText) * rowsPerPage;
    let start = end - rowsPerPage;
    showTable(start, end, Number(e.target.innerText));
  });
});

nextPgBtn.addEventListener("click", () => {
  let end = Number(nextPg) * rowsPerPage;
  let start = end - rowsPerPage;
  showTable(start, end, nextPg);
});

prevPgBtn.addEventListener("click", () => {
  if (currentPg != 1) {
    let end = Number(prevPg) * rowsPerPage;
    let start = end - rowsPerPage;
    showTable(start, end, prevPg);
  }
});

firstPgBtn.addEventListener("click", () => showTable(0, rowsPerPage, 1));
lastPgBtn.addEventListener("click", () => showTable(90, rowsPerPage * 10, 10));
