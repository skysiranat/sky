function boy() {
  if (document.body.classList.contains("bg-[#ADF0D1]")) {
    document.body.className =
      "bg-[#00203F] text-[#ADF0D1] transition duration-500";
    document.getElementById("girl").className =
      "bg-[#ADF0D1] text-[#00203F] transition duration-500 text-2xl z-[9999] fixed top-0 left-0 right-0   h-[100px] flex  text-lg italic justify-between items-center px-10";
  } else {
    document.body.className =
      "bg-[#ADF0D1] text-[#00203F] transition duration-500";
    document.getElementById("girl").className =
      "bg-[#00203F] text-[#ADF0D1] transition duration-500 text-2xl z-[9999] fixed top-0 left-0 right-0   h-[100px] flex  text-lg italic justify-between items-center px-10";
  }
}

password = prompt("Enter password to access webside");

while (password != "password") {
  password = prompt("Invalid Password, Please try again");
}
const myArray = [];
let box = document.getElementById("box");
function render() {
  box.innerHTML = "";
  myArray.forEach(function (item) {
    let createElem = document.createElement("p");
    createElem.className =
      "w-full p-5 bg-blue-800 text-white text-[2vw] text-center mb-2";
    createElem.innerHTML = item;
    box.appendChild(createElem);
  });
}

function deleteItem() {
  myArray.pop();
  render();
}

function addItem() {
  let newitem = prompt("Adding Hobby...");
  myArray.push(newitem);
  render();
}
