export default (function createNavBar() {
    const navContainer = document.createElement('div');
    document.body.appendChild(navContainer)
    navContainer.classList = "nav-bar"
    return navContainer.innerHTML = `
    <h1>TASK AWAY</h1>
    <div class="search-bar">
    <input type="text" name="search" id="search" placeholder="Search" >
    <img id="search-svg" src="../icons/search.svg" alt="search">
    </div>
    <div class="add-profile"> 
    <img id="add-svg" src="../icons/add.svg" alt="add button">
    <img id="profile-svg" src="../icons/profile.svg" alt="profile">
    
    </div>
    `
  })();
