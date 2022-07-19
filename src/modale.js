export default function createModales(){ 

    const modaleContainer = document.createElement('div') 
    document.body.appendChild(modaleContainer)
    modaleContainer.classList = "modale-container"
    modaleContainer.innerHTML = `
        <div class="modale"></div>
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
    const modale = document.querySelector('.modale')
    
    modale.addEventListener("click", () => {
        modale.parentNode.remove();
    });
      
    }