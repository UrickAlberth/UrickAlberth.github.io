    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
   const clnTaskBtn = document.getElementById("cln-task-btn");

    let tasks = [];

    // Função para renderizar a lista de tarefas
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        // Botão para marcar a tarefa como concluída
        const BtnOK = document.createElement("input");
        BtnOK.type = "checkbox";
        BtnOK.id="check"+index;
        BtnOK.checked = task.checked || false;
       
        
        const labelch = document.createElement("label");
        labelch.className="checks";
        labelch.setAttribute("for", "check"+index);
        
        
        BtnOK.addEventListener("click", () => {
          tasks[index].checked = BtnOK.checked;
          renderTasks();
          saveTasksToLocalStorage();
        });
        taskList.appendChild(BtnOK);
        taskList.appendChild(labelch);
        

        const li = document.createElement("li");
        const span = document.createElement("span");
        const spanBtn = document.createElement("span");
        
        span.innerHTML = BtnOK.checked? "<del>"+task.text+"</del>":task.text;

        // Botão para remover a tarefa
        
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "&#128465;";
        removeBtn.classList.add("remove-btn")
        removeBtn.addEventListener("click", () => {
          tasks.splice(index, 1);
          renderTasks();
          saveTasksToLocalStorage();
        });
        li.appendChild(span);
        spanBtn.appendChild(EditarBtn(task, index,li));

        spanBtn.appendChild(removeBtn);
        li.appendChild(spanBtn);
        taskList.appendChild(li);
      });
      mensagem();
    }
function EditarBtn(task, index,li){
const editarBtn = document.createElement("button");
  editarBtn.classList.add("editar-btn")
        editarBtn.innerHTML = "<img src='https://img.icons8.com/?size=512&id=59856&format=png' width=15px;>";        
        editarBtn.addEventListener("click", () => {
if(editarBtn.textContent == "OK"){
 const span = li.querySelector("span");
        span.contentEditable = "false";
  task.text=span.textContent;
  renderTasks();
  saveTasksToLocalStorage();
}
         const span = li.querySelector("span");
        span.contentEditable = "true";
          editarBtn.textContent = "OK"; 
          
        });
  
  return editarBtn

}

    // Função para adicionar uma nova tarefa
    function addTask() {
      const newTaskText = newTaskInput.value.trim();
      if (newTaskText !== "") {
        const newTask = {
          text: newTaskText,
          checked: false
        };
        tasks.push(newTask);
        newTaskInput.value = "";
        renderTasks();
        saveTasksToLocalStorage();
      }
    }

    // Função para salvar as tarefas no LocalStorage
    function saveTasksToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Função para carregar as tarefas do LocalStorage
    function loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
      }
    }

function mensagem(){
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (checkboxes.length == tasks.length && checkboxes.length!= 0) {
    alert("Todas as Tarefas foram concluídas!!");
  }
}

function clean(){
    tasks = [];
  renderTasks();
   saveTasksToLocalStorage();
}

    // Event listener para adicionar tarefa quando o botão é clicado
    addTaskBtn.addEventListener("click", addTask);
clnTaskBtn.addEventListener("click", clean);

    // Carregar as tarefas do LocalStorage ao carregar a página
    loadTasksFromLocalStorage();
// Adicione um evento de escuta para detectar a entrada do teclado
document.addEventListener("keydown", function(event) {
  // Verifique o código da tecla pressionada
  const key = event.key;
if (key === "Enter") { // Tecla Enter para calcular o resultado
    addTask();
  } else if (key === "Escape") { // Tecla Esc para limpar a tela
    clean();
  }
});