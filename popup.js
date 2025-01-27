// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleCheckbox = document.getElementById('enableModernUI');

  // Load saved state
  chrome.storage.sync.get(['enableModernUI'], (result) => {
    toggleCheckbox.checked = result.enableModernUI !== false;
  });

  // Handle toggle changes
  toggleCheckbox.addEventListener('change', (e) => {
    const isEnabled = e.target.checked;

    chrome.storage.sync.set({ enableModernUI: isEnabled });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'toggleUI',
        enabled: isEnabled
      });
    });
  });
});
