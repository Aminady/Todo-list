import { mainContainer, tasksProjectsContainer, dateParser} from ".";

let date = new Date();

function injectTasks () {
    return tasksProjectsContainer.innerHTML = `
    <div class="tasks-title">
    <h1>Tasks</h1>
    <h1>Due For</h1>
    </div>

    <div class="tasks-checkbox"> 
    <label for="done">Wake Up</label>
    <label for="done">${dateParser(date)}</label>
    <input type="checkbox" name="tasks" id="done">
    <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    </div>

    <div class="tasks-checkbox"> 
    <label for="done">Feed the cats</label>
    <label for="done">${dateParser(date)}</label>
    <input type="checkbox" name="tasks" id="done">
    <img src="../icons/trash.svg" alt="delete" class="trash-svg">
  </div>
`
}

function injectProjects() {
  return tasksProjectsContainer.innerHTML = `
    <div class="project-header">
    <h1>Projects</h1>
    <img id="add-projects" src="../icons/add.svg" alt="add button">
    </div>
    
    <div class="emptyProjects">
    <p>You don't have any projects at the moment. </p>
    </div>
    `
    let addProjectBtn = document.querySelector("#add-projects")
    console.log(addProjectBtn);
}


  
  export {injectProjects, injectTasks}
  // export {injectTasks}
  
    // <div class="tasksInProjectstitle">
    // <h3 class="h3">Paint the front door</h3>
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Pick up some paint at Home Goods</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Go to the ATM (100$)</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Call the handyman</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // <div class="tasksInProjectstitle">
    // <h3 class="h3">Create a mobile app</h3>
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Write down on paper the plan</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Go on Stackoverflow and copy some code. No it's not cheating</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // <div class="tasks-checkbox"> 
    // <label for="done">Make money off of it</label>
    // <label for="done">${dateParser(date)}</label>
    // <input type="checkbox" name="tasks" id="done">
    // <img src="../icons/trash.svg" alt="delete" class="trash-svg">
    // </div>

    // function create() {
    //   const trashSvg = document.querySelectorAll('.trash-svg')
    //   return trashSvg
    // };

// export {create, trashSvg, injectProjects, injectTasks}


