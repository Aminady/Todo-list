import "./style.css"
import createNavBar from "./navbar";
import {createDashBoard, dashboardStyle} from "./dashboard";
import {createModals, submitTasksModal} from "./modal"
import {injectProjects, injectTasks} from "./injectFunction"


let mainContainer = document.createElement('div')
document.body.appendChild(mainContainer)
mainContainer.classList = "main-container"

createDashBoard();
dashboardStyle();




const addBtn = document.querySelector('#add-svg')
addBtn.addEventListener('click', () => {
    createModals();
    submitTasksModal();
  });
  
  
  let tasksProjectsContainer = document.createElement('div');
  mainContainer.appendChild(tasksProjectsContainer);
  tasksProjectsContainer.classList = 'tasks-projects-container'

  injectTasks();
  injectProjects()

let addProjectBtn = document.querySelector("#add-projects")     
addProjectBtn.addEventListener('click', () => {
  const projectsModalContainer = document.createElement('div') 
  document.body.appendChild(projectsModalContainer)
  projectsModalContainer.classList = "projects-modal-container";

  projectsModalContainer.innerHTML = `
        <div class="modal"></div>
        <form class="project-form" action="" method="get">
        <div class="input-container">
        <input type="text" name="tasks-name" id="tasks-name" placeholder="Project Title" required>
        </div>
        
        <div class="input-container">
        <input type="text" name="tasks-name" id="tasks-name" placeholder="Add a task to your project" required>
        </div>

        <div class="input-container">
        <input type="date" name="date" id="date">
        </div>
    
        <button type="button" class="submit-project">Add this project</button>
        </form>
        `

        const modal = document.querySelector('.modal');

        modal.addEventListener("click", () => {
            modal.parentNode.remove();
        });
    
        const submitProject = document.querySelector(".submit-project")
        console.log(submitProject);
})

// function submitProjectModal() {
  
//   submitProject.addEventListener('click', () => {
//     console.log(true);
//   })
// }
// submitProjectModal()
  
 function dateParser(chaine) {
   let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
     year: "numeric",
     month: "short",
     day: "numeric",
   });
   return newDate;
 }
 

export {mainContainer, tasksProjectsContainer, dateParser}
