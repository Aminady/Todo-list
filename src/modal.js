export default function createModals(){ 

    const modalContainer = document.createElement('div') 
    document.body.appendChild(modalContainer)
    modalContainer.classList = "modal-container"
    modalContainer.innerHTML = `
        <div class="modal"></div>
        <form class="form" action="" method="get">
        <div class="input-container">
        <input type="text" name="title" id="title" placeholder="Tasks" minlength="4" maxlength="20" required>
        </div>
        
        <div class="input-container">
        <input type="date" name="date" id="date">
        </div>
        
        <div>
        <select name="tasks-or-projects" id="">
            <option value="tasks-or-projects">Task or Project ?</option>
            <option value="tasks-or-projects">My Tasks</option>
            <option value="tasks-or-projects">My Projects</option>
        </select>
        </div>
        
        <button type="button" class="submit">Add to your list</button>
        </form>
        `
    const modal = document.querySelector('.modal')
    
    modal.addEventListener("click", () => {
        modal.parentNode.remove();
    });
      
    }