export default function createDashBoard() {
    const dashboard = document.createElement('div');
    document.body.appendChild(dashboard);
    dashboard.classList = 'dashboard';
    return dashboard.innerHTML = `
    <h3 class="dash-title">TODO LIST</h3>
    <div class="dash-btns">
      <p class="tasks">My Tasks</p>
      <p class="projects">My Projects</p>
    </div>
  `
}