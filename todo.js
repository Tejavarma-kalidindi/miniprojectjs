let btn = document.getElementById("btn");
let list = document.getElementById("list");
let button = document.getElementById("button");
btn.onclick = () => {
  let text = document.getElementById("text").value;
  console.log(text, typeof text);
  let textnode = document.createTextNode(text);

  let listby = document.createElement("li");
  listby.appendChild(textnode);
  list.appendChild(listby);
};
button.onclick = () => {
  list.removeChild(document.getElementsByTagName("li")[0]);
};
if (typeof Storage !== "undefined") {
  // Store
  localStorage.setItem("listofitems", document.getElementsByTagName("li")[0]);
} else {
  document.getElementById("result").innerHTML =
    "Sorry, your browser does not support Web Storage...";
}
