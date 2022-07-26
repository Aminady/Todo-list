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
    function submitTest() {
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
                console.log(tasksArray.map((a) => a));
            }
        if (tasksOrProjects.value === "projects-option") {
                projectsArray.push(new newObject(tasksName.value, dateInput.value, tasksOrProjects.value))
                console.log(projectsArray.map((a) => a));
            }
            modal.parentNode.remove();
            
        });
    }
    
    export {createModals, submitTest}