// Dynamic greeting based on page
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.dash-header h1');
  if (header.textContent.includes('Student')) {
    header.textContent += ' 👋 Welcome, Student!';
  } else if (header.textContent.includes('Teacher')) {
    header.textContent += ' 👋 Welcome, Teacher!';
  }
});

// Form validation for Teacher Dashboard
const uploadForm = document.querySelector('form');
if (uploadForm) {
  uploadForm.addEventListener('submit', (e) => {
    const title = uploadForm.querySelector('input[type="text"]').value.trim();
    const file = uploadForm.querySelector('input[type="file"]').files[0];

    if (!title || !file) {
      e.preventDefault();
      alert('Please enter a lesson title and select a file.');
    }
  });
}

// Simulate quiz loading on Student Dashboard
// const quizLinks = document.querySelectorAll('.card a');
// quizLinks.forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert(`🔔 Quiz for "${link.textContent}" is not available in demo mode.`);
//   });
// });

// Confirm on logout click
const logoutBtn = document.querySelector('.logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) {
      e.preventDefault();
    }
  });
}
