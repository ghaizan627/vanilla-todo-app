const container = document.querySelector(".container");
const input = document.querySelector(".input");
const lists = document.querySelector(".todo-list");
let todos = [];

container.addEventListener("click", function (e) {
  if (e.target.className == "tambah") {
    tambahTugas();
    e.preventDefault();
  }
  if (e.target.className == "delete") {
    hapusTugas(e);
  }
});

function tambahTugas() {
  if (input.value.trim() === "") {
    alert("Tugas tidak boleh kosong");
    return;
  }
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  const li = document.createElement("li");
  const tugas = document.createTextNode(todo.text);
  const delButtonText = document.createTextNode("delete");
  const delButton = document.createElement("button");
  delButton.classList.add("delete");
  delButton.appendChild(delButtonText);
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  li.appendChild(tugas);
  li.appendChild(delButton);
  lists.appendChild(li);
  li.style.backgroundColor = `rgb(${r},${g},${b})`;
  todos.push(todo);
  console.log(todos);
  input.value = "";
}
function hapusTugas(e) {
  const li = e.target.parentElement;
  li.remove();
}
