import './style.css'
/*
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
*/

let addInput = document.querySelector('#add_input') as HTMLInputElement;
let addButton = document.querySelector('#add_button') as HTMLButtonElement;
let newTaskText = "";
let taskRank = 0;
let idTaskBlockCreation = "";

addButton?.addEventListener('click', function() {
  
  console.log("Je clique sur le bouton valider");
  
  newTaskText = addInput.value;

  console.log(newTaskText);

  if (newTaskText !== "") {

    idTaskBlockCreation = "rank_" + taskRank;

    console.log(idTaskBlockCreation);

    const archivedTaskBlock = document.createElement("article"); // Je crée le conteneur d'un élément listé.
    archivedTaskBlock?.setAttribute('class', 'archived_task_block'); // Je lui rajoute une classe.
    archivedTaskBlock?.setAttribute('id', idTaskBlockCreation); // Je lui rajoute un id.
    document.querySelector('#list_section')?.appendChild(archivedTaskBlock); // Je l'affiche dans le navigateur.

    const archivedTaskCheckbox = document.createElement("input");
    archivedTaskCheckbox?.setAttribute('type', 'checkbox');
    //archivedTaskCheckbox?.setAttribute('class', 'checkbox');
    document.getElementById(idTaskBlockCreation)?.appendChild(archivedTaskCheckbox);

    const archivedTaskText = document.createElement("label");
    //archivedTaskText?.setAttribute('for', 'checkbox');
    archivedTaskText?.setAttribute('class', '.archived_task_text');
    archivedTaskText.innerText = newTaskText;
    document.getElementById(idTaskBlockCreation)?.appendChild(archivedTaskText);

    const deleteButton = document.createElement("button");
    deleteButton?.setAttribute('class', 'delete_button');
    deleteButton.innerText = "Supprimer";
    document.getElementById(idTaskBlockCreation)?.appendChild(deleteButton);

    addInput.value = "";

    /*<input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Scales</label>*/


    taskRank += 1;
  }

});