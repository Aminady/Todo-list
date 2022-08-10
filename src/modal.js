import { tasksProjectsContainer, dateParser,} from ".";
// import {create, trashSvg, injectProjects, injectTasks} from "./injectFunction"
import {injectProjects, injectTasks} from "./injectFunction"


function createModals(){ 

    const modalContainer = document.createElement('div') 
    document.body.appendChild(modalContainer)
    modalContainer.classList = "modal-container"
    modalContainer.innerHTML = `
        <div class="modal"></div>
        <form class="form" action="" method="get">
        <div class="input-container">
        <input type="text" name="tasks-name" id="tasks-name" placeholder="Tasks" minlength="4" maxlength="20" required>
        </div>
        
        <div class="input-container">
        <input type="date" name="date" id="date">
        </div>
        
        <div>
        <select name="tasks-or-projects" id="tasks-or-projects">
            <option value="tasks-or-projects">Task or Project ?</option>
            <option value="tasks-option">My Tasks</option>
            <option value="projects-option">My Projects</option>
        </select>
        </div>
        
        <button type="button" class="submit">Add to your list</button>
        </form>
        `
    const modal = document.querySelector('.modal');

    modal.addEventListener("click", () => {
        modal.parentNode.remove();
    });

    
};
    ////////////////////////////////////////////////////////////////////////////////////////////////
function submitTasksModal() {
    const modal = document.querySelector('.modal');

    const submitModal = document.querySelector('.submit');
    const tasksOrProjects = document.querySelector('#tasks-or-projects');
    const dateInput = document.querySelector('#date');
    const tasksName = document.querySelector('#tasks-name');

    submitModal.addEventListener('click', () => {
        function newObject (name, date, type) {
            this.name = name;
            this.date = date;
            this.type = type
        };

        let tasksArray = [];
        let projectsArray = [];

        if(tasksOrProjects.value === "tasks-option") {
            tasksArray.push(new newObject(tasksName.value, dateInput.value, tasksOrProjects.value))
            modal.parentNode.remove();

            return tasksProjectsContainer.innerHTML += 
            `
            <div class="tasks-checkbox"> 
            <label for="done">${tasksName.value}</label>
            <label for="done">${dateParser(dateInput.value)}</label>
            <input type="checkbox" name="tasks" id="done">
            <img src="../icons/trash.svg" alt="delete" class="trash-svg">
            </div>
            `
        }    
        
        if (tasksOrProjects.value === "projects-option") {
            tasksProjectsContainer.innerHTML = ""
            injectProjects()
            projectsArray.push(new newObject(tasksName.value, dateInput.value, tasksOrProjects.value))
            console.log(projectsArray.map((a) => a));
        }
        modal.parentNode.remove();
        
    });
}


document.body.addEventListener('click', (e) => {
    if(e.target.className === 'trash-svg') {
        e.target.parentElement.remove()
        
    }
})

export {createModals, submitTasksModal}
    // console.log(tasksArray.map((a) => a));

