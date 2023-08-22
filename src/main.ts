import './style.css'

let addInput = document.querySelector('#add_input') as HTMLInputElement;
let addButton = document.querySelector('#add_button') as HTMLButtonElement;
let newTaskText = "";
let taskRank = 0;
let idTaskBlockCreation = "";

addButton?.addEventListener('click', function() {
  //console.log("Je clique sur le bouton valider");
  
  newTaskText = addInput.value;
  //console.log(newTaskText);

  if (newTaskText !== "") {

    idTaskBlockCreation = "rank_" + taskRank;
    //console.log(idTaskBlockCreation);

    const archivedTaskBlock = document.createElement("article"); // Je crée le conteneur d'un élément listé.
    archivedTaskBlock?.setAttribute('class', 'archived_task_block'); // Je lui rajoute une classe.
    archivedTaskBlock?.setAttribute('id', idTaskBlockCreation); // Je lui rajoute un id.
    document.querySelector('#list_section')?.appendChild(archivedTaskBlock); // Je l'affiche dans le navigateur.

    const archivedTaskCheckbox = document.createElement("input");
    archivedTaskCheckbox?.setAttribute('type', 'checkbox');
    archivedTaskCheckbox?.setAttribute('class', 'archived_task_checkbox');
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

    deleteButton?.addEventListener('click', function() { // J'écoute l'évenement click sur le bouton juste après l'avoir créé.
      this.parentElement?.remove(); // Je selectionne son élément parent et je le supprime.
    });

    addInput.value = "";
    taskRank += 1;
  }

  let archivedTaskCheckboxSelection = document.querySelector('#' + idTaskBlockCreation + ' .archived_task_checkbox') as HTMLInputElement;

  archivedTaskCheckboxSelection?.addEventListener('click', function() {
    let archivedTaskTextSelection = archivedTaskCheckboxSelection.nextElementSibling as HTMLLabelElement;
    archivedTaskTextSelection.classList.toggle("checked_archived_task"); // J'ajoute la classe "checked_archived_task" si elle n'existe pas sur l'élément. Sinon, je la supprime.
  });

});

/*<input type="checkbox" id="scales" name="scales" checked />
  <label for="scales">Scales</label>*/