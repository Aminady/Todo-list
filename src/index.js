import "./style.css"
import createNavBar from "./navbar";
import {createDashBoard, dashboardStyle} from "./dashboard";
import {createModals, submitTest} from "./modal"

export let mainContainer = document.createElement('div')
document.body.appendChild(mainContainer)
mainContainer.classList = "main-container"

createDashBoard()
dashboardStyle()

const addBtn = document.querySelector('#add-svg')

addBtn.addEventListener('click', () => {
 createModals()
 submitTest()
});


const check = false
export default function injectTasksProjects () {
  let tasksProjectsContainer = document.createElement('div');
  mainContainer.appendChild(tasksProjectsContainer);
  tasksProjectsContainer.classList = 'tasks-projects-container'
  
    tasksProjectsContainer.innerHTML = `
    <h1 class="tasks-title">Today</h1>
    <div class="tasks-checkbox"> 
      <label for="done">Wake Up</label>
      <input type="checkbox" name="tasks" id="done" ${check&&"checked"}>
    </div>
    <div class="tasks-checkbox"> 
    <label for="done">Feed the cats</label>
    <input type="checkbox" name="tasks" id="done">
  </div>

`
}
injectTasksProjects()

