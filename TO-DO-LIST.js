const titoloTask = document.getElementById("titoloTask");
const aggiungiBtn = document.getElementById("aggiungi");
const annullaBtn = document.getElementById("annulla");
const listaTask = document.getElementById("listaTask");
let eliminaTask = 0;

window.addEventListener('load', caricaTask);

function salvaTask() {
  const tasks = [];
  const liElements = listaTask.querySelectorAll('li');
  
  liElements.forEach(li => {
    const span = li.querySelector('span');
    tasks.push({
      testo: span.textContent,
      completata: li.classList.contains('completata')
    });
  });
  
  localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function caricaTask() {
  const tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
  
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.testo}</span>
      <button class="completa">Completa</button>
      <button class="modifica">Modifica</button>
      <button class="elimina">Elimina</button>
    `;
    
    if (task.completata) {
      li.classList.add('completata');
    }
    
    listaTask.appendChild(li);
  });
}

aggiungiBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (titoloTask.value.trim() !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${titoloTask.value}</span>
      <button class="completa">Completa</button>
      <button class="modifica">Modifica</button>
      <button class="elimina">Elimina</button>
    `;
    listaTask.appendChild(li); 
    titoloTask.value = '';
    
    salvaTask(); 
  }
});

annullaBtn.addEventListener('click', function(e) {
  e.preventDefault();
  titoloTask.value = '';
});

listaTask.addEventListener('click', function(e) {
  if (e.target.classList.contains('elimina')) {
    if(!e.target.parentElement.classList.contains('completata')) {
      if( eliminaTask !== 0){
        e.target.parentElement.remove();
        salvaTask();
        return;
      }
      alert('Stai eliminando una task non completata!');
      eliminaTask++;
      return;
    }
    e.target.parentElement.remove();
    salvaTask(); 
  }
  if (e.target.classList.contains('modifica')) {
    const span = e.target.parentElement.querySelector('span');
    const nuovoTesto = prompt('Modifica:', span.textContent);
    if (nuovoTesto) {
      span.textContent = nuovoTesto;
      salvaTask();
    }
  }
  if (e.target.classList.contains('completa')) {
    e.target.parentElement.classList.toggle('completata');
    salvaTask(); 
  }
});
