export default function navigate() {
    const navContainer = document.createElement('div');
    document.body.appendChild(navContainer)
    return navContainer.innerHTML = `
    <div class="nav-bar">
    <h1>TASK AWAY</h1>
    <div class="search-bar">
    <input type="text" name="search" id="search" placeholder="Search" >
    <span id="search-svg" class="material-symbols-outlined">search</span>  
    </div>
    <div class="add-profile"> 
    <span id="add-svg" class="material-symbols-outlined">add_box</span>
    <span id="profile-svg" class="material-symbols-outlined">account_circle</span>
    </div>
  </div>
  `
}