import { mainContainer, tasksProjectsContainer} from ".";
import {injectProjects, injectTasks} from "./injectFunction"

function createDashBoard() {
  const dashboard = document.createElement('div');
  mainContainer.appendChild(dashboard);
  dashboard.classList = 'dashboard';
  return dashboard.innerHTML = `
  <h3 class="dash-title">TODO LIST</h3>
  <div class="dash-btns">
  <p class="tasks">My Tasks</p>
  <p class="projects">My Projects</p>
  </div>  
  `  
};

function dashboardStyle() {
  const dashBtns = document.querySelector('.dash-btns');
  const taskBtn = document.querySelector('.tasks');
  const projectBtn = document.querySelector('.projects');
  taskBtn.addEventListener('click', (e) => {
    tasksProjectsContainer.innerHTML = injectTasks()
    e.target.nextElementSibling.style = "";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.fontSize = 18 + "px";
    e.target.style.boxShadow = "1px 5px 8px rgba(145, 144, 144, 0.589)";
  }) 
  
  projectBtn.addEventListener('click', (e) => {
    tasksProjectsContainer.innerHTML = injectProjects()
    e.target.previousElementSibling.style = "";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    e.target.style.fontSize = 18 + "px";
    e.target.style.boxShadow = "1px 5px 8px rgba(145, 144, 144, 0.589)";
  })
};

export {createDashBoard, dashboardStyle};