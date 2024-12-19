const milestonesData = JSON.parse(data).data;

// load milestone data

function loadMilestones() {
  const milestone = document.querySelector('.milestones')

  milestone.innerHTML = `
  ${milestonesData.map(function (milestone) {
    return `<div class="milestones">
    <div class="milestone border-b">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" /></div>
        <div>
          <p>
           ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        <div class="module border-b">
          <p>Module Name</p>
        </div>
      </div>
    </div>
  </div>`
  }).join(' ')}
  `
}
loadMilestones()