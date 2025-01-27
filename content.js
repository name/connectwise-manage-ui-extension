// content.js
const UI_CONFIG = {
  hideMenuItems: ['Marketing', 'Sales', 'Finance', 'Procurement', 'Time & Expense'],
  updateInterval: 500
};

const modernizeUI = () => {
  // Hide menu items
  document.querySelectorAll('.cw-lcm-section').forEach(section => {
    const label = section.querySelector('.gwt-Label');
    if (label && UI_CONFIG.hideMenuItems.includes(label.textContent.trim())) {
      section.style.display = 'none';
    }
    if (label.textContent.trim() === 'My Favorites') {
      label.textContent = label.textContent.replace('My ', '');
    }
    if (label.textContent.trim() === 'Project') {
      label.textContent = label.textContent.replace('Project', 'Projects');
    }
    if (label.textContent.trim() === 'Service Desk') {
      label.textContent = label.textContent.replace('Service Desk', 'Tickets');
    }
    if (label.textContent.trim() === 'System') {
      label.textContent = label.textContent.replace('System', 'Settings');
    }
  });

  // Fix spacing issues
  // document.querySelectorAll('div[style*="inset: 30px"], div[style*="inset: 51px"]').forEach(element => {
  //   element.style.inset = '0px 0px 0px';
  // });
};

// Initialize and maintain
modernizeUI();
setInterval(modernizeUI, UI_CONFIG.updateInterval);
