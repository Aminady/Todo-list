import "./style.css"
import createNavBar from "./navbar";
import createDashBoard from "./dashboard";
import createModales from "./modale";

// createNavBar()
export let mainContainer = document.createElement('div')
document.body.appendChild(mainContainer)
mainContainer.classList = "main-container"

createDashBoard()

const addBtn = document.querySelector('#add-svg')

addBtn.addEventListener('click', () => {
 createModales()
})

function injectTasksProjects () {
    let tasksProjectsContainer = document.createElement('div');
    mainContainer.appendChild(tasksProjectsContainer);
    tasksProjectsContainer.classList = 'tasks-projects-container'
    
    return tasksProjectsContainer.innerHTML = `
    <h1 class="tasks-title">Today</h1>
    <div class="tasks-checkbox"> 
      <label for="done">Wake Up</label>
      <input type="checkbox" name="tasks" id="done">
    </div>
    <div class="tasks-checkbox"> 
    <label for="done">Feed the cats</label>
    <input type="checkbox" name="tasks" id="done">
  </div>

`
}

injectTasksProjects()

