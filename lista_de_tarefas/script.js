const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const clnTaskBtn = document.getElementById("cln-task-btn");
const categorySelect = document.getElementById("category-select");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  const tasksByCategory = {};

  tasks.forEach((task, index) => {
    if (!tasksByCategory[task.category]) {
      tasksByCategory[task.category] = [];
    }
    tasksByCategory[task.category].push(task);
  });

  for (const category in tasksByCategory) {
    const categoryHeader = document.createElement("h2");
    categoryHeader.textContent = category;
    taskList.appendChild(categoryHeader);

    tasksByCategory[category].forEach((task, index) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const spanBtn = document.createElement("span");

      span.innerHTML = task.checked ? "<del>" + task.text + "</del>" : task.text;

      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "&#128465;";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        renderTasks();
        saveTasksToLocalStorage();
      });

      li.appendChild(span);
      spanBtn.appendChild(EditarBtn(task, index, li));
      spanBtn.appendChild(document.createElement("br"));
      spanBtn.appendChild(removeBtn);
      li.appendChild(spanBtn);
      taskList.appendChild(li);
    });
  }

  mensagem();
}

function EditarBtn(task, index, li) {
  const editarBtn = document.createElement("button");
  editarBtn.classList.add("editar-btn");
  editarBtn.innerHTML =
    "<img src='https://img.icons8.com/?size=512&id=59856&format=png' width=15px;>";
  editarBtn.addEventListener("click", () => {
    if (editarBtn.textContent == "OK") {
      const span = li.querySelector("span");
      span.contentEditable = "false";
      task.text = span.textContent;
      renderTasks();
      saveTasksToLocalStorage();
    }
    const span = li.querySelector("span");
    span.contentEditable = "true";
    editarBtn.textContent = "OK";
  });

  return editarBtn;
}

function addTask() {
  const newTaskText = newTaskInput.value.trim();
  if (categorySelect.value == "Nova Categoria") {
    let novaCategoria = prompt("Digite a Nova Categoria");
    const OpnovaCategoria = document.createElement("option");
    OpnovaCategoria.textContent = novaCategoria;
    categorySelect.appendChild(OpnovaCategoria)
    categorySelect.value = novaCategoria;
  }
  const selectedCategory = categorySelect.value;

  if (newTaskText !== "") {
    const newTask = {
      text: newTaskText,
      checked: false,
      category: selectedCategory,
    };
    tasks.push(newTask);
    newTaskInput.value = "";
    renderTasks();
    saveTasksToLocalStorage();
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

function mensagem() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length == tasks.length && checkboxes.length != 0) {
    alert("Todas as Tarefas foram concluídas!!");
  }
}

function clean() {
  tasks = [];
  renderTasks();
  saveTasksToLocalStorage();
}

addTaskBtn.addEventListener("click", addTask);
clnTaskBtn.addEventListener("click", clean);

loadTasksFromLocalStorage();

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "Enter") {
    addTask();
  } else if (key === "Escape") {
    clean();
  }
});
