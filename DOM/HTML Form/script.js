const addToTable = () => {
  let fname = document.getElementById("first-name");
  let lname = document.getElementById("last-name");
  let address = document.getElementById("address");
  let pincode = document.getElementById("pincode");
  let gender = document.querySelector("input[name = gender]:checked");

  //* Store all checked food choices in an array

  let food = document.querySelectorAll("input[name = food]:checked");
  let foodArr = [];
  food.forEach((item) => foodArr.push(item.value));

  //*
  let state = document.getElementById("state");
  let country = document.getElementById("country");
  let tbody = document.querySelector("#tbody");
  const submit = document.getElementById("submit");

  if (foodArr.length >= 2) {
    let row = tbody.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);

    c1.innerText = fname.value;
    c2.innerText = lname.value;
    c3.innerText = address.value;
    c4.innerText = pincode.value;
    c5.innerText = gender.value;
    c6.innerText = foodArr.join(",");
    c7.innerText = state.value;
    c8.innerText = country.value;
  } else {
    alert("Please enter atleast two food choices");
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addToTable();
});

//*To submit on Enter
document.body.addEventListener("keyup", (e) => {
  if (e.key === "Enter") submit.click();
});
