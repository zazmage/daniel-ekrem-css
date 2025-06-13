// Authentication page functionality
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Basic validation
      if (email && password && password.length >= 8) {
        // Simulate successful login
        alert('Login successful! Redirecting to profile...');
        // In a real app, this would handle authentication
        window.location.href = '/profile/';
      } else {
        alert('Please fill in all fields correctly. Password must be at least 8 characters.');
      }
    });
  }
});
