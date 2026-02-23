// OS tabs switching logic for practical sessions
// Each tab group has a unique section ID (e.g., "nodejs", "vscode", "git")
// Tab buttons: <button class="os-tab" data-section="nodejs" data-os="windows">
// Content divs: <div class="os-content" id="nodejs-windows">

function showOS(section, os) {
  // Hide all content for this section
  document.querySelectorAll(
    '#' + section + '-windows, #' + section + '-macos, #' + section + '-linux'
  ).forEach(function (el) {
    el.classList.remove('active');
  });

  // Show selected content
  var target = document.getElementById(section + '-' + os);
  if (target) {
    target.classList.add('active');
  }

  // Update tab buttons
  var tabs = document.querySelectorAll('#' + section + '-tabs .os-tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Find and activate the clicked button
  if (event && event.target) {
    event.target.classList.add('active');
  }
}
