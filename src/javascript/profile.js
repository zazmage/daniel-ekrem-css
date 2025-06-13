// Profile page functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const svgs = menuButton?.querySelectorAll('svg');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      menuButton.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
      if (svgs) {
        svgs.forEach(svg => svg.classList.toggle('hidden'));
      }
    });
  }
  // Follow button functionality
  const followButton = document.getElementById('follow-btn');
  const followersCountElement = document.querySelector('#followers-count .font-bold.text-lg.text-slate-700');

  if (followButton && followersCountElement) {
    let isFollowing = false;
    let currentFollowers = parseInt(followersCountElement.textContent) || 320;

    followButton.addEventListener('click', () => {
      isFollowing = !isFollowing;

      if (isFollowing) {
        followButton.textContent = 'Following';
        followButton.className = followButton.className.replace('bg-sky-600 hover:bg-sky-700', 'bg-green-600 hover:bg-green-700');
        currentFollowers += 1;
      } else {
        followButton.textContent = 'Follow';
        followButton.className = followButton.className.replace('bg-green-600 hover:bg-green-700', 'bg-sky-600 hover:bg-sky-700');
        currentFollowers -= 1;
      }

      followersCountElement.textContent = currentFollowers.toString();
    });
  }
  // Search functionality for user posts
  const postsContainer = document.getElementById('user-posts');
  const profileSearchInput = document.getElementById('profile-search');
  let allUserPosts = [];

  if (postsContainer && profileSearchInput) {
    // Store original posts
    allUserPosts = Array.from(postsContainer.children);

    profileSearchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      allUserPosts.forEach(post => {
        const content = post.querySelector('p')?.textContent.toLowerCase() || '';
        const timePosted = post.querySelector('.text-xs')?.textContent.toLowerCase() || '';

        const matches = content.includes(searchTerm) || timePosted.includes(searchTerm);

        post.style.display = matches ? 'block' : 'none';
      });
    });
  }
});
