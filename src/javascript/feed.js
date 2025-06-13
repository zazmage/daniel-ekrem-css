// Feed page functionality
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
  // Search functionality
  const searchInput = document.getElementById('feed-search');
  const postsGrid = document.getElementById('posts-grid');
  let allPosts = [];

  if (searchInput && postsGrid) {
    // Store original posts
    allPosts = Array.from(postsGrid.children);

    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      allPosts.forEach(post => {
        const title = post.querySelector('h3')?.textContent.toLowerCase() || '';
        const content = post.querySelector('p')?.textContent.toLowerCase() || '';
        const author = post.querySelector('.text-xs')?.textContent.toLowerCase() || '';

        const matches = title.includes(searchTerm) ||
          content.includes(searchTerm) ||
          author.includes(searchTerm);

        post.style.display = matches ? 'block' : 'none';
      });
    });
  }
  // Sort functionality
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect && postsGrid) {
    sortSelect.addEventListener('change', (e) => {
      const sortType = e.target.value;
      const posts = Array.from(postsGrid.children);

      posts.sort((a, b) => {
        if (sortType.includes('Latest')) {
          // Sort by time (newest first)
          const timeA = a.querySelector('.text-xs')?.textContent || '';
          const timeB = b.querySelector('.text-xs')?.textContent || '';
          return timeA.localeCompare(timeB);
        } else if (sortType.includes('Popularity')) {
          // Random sort for demo
          return Math.random() - 0.5;
        }
        return 0;
      });

      // Clear and re-append sorted posts
      postsGrid.innerHTML = '';
      posts.forEach(post => postsGrid.appendChild(post));
    });
  }  // New post functionality
  const newPostForm = document.querySelector('form.bg-white');
  const textarea = newPostForm.querySelector('textarea');
  const postButton = document.getElementById('post-button');
  const imageUrlInput = document.getElementById('imageUrl');
  const titleInput = document.getElementById('post-title');
  const randomImageButton = document.getElementById('random-image-btn');

  let selectedImageUrl = null;
  if (randomImageButton) {
    randomImageButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent any form submission
      const randomId = Math.floor(Math.random() * 1000) + 100;
      selectedImageUrl = `https://picsum.photos/600/400?random=${randomId}`;
      randomImageButton.style.color = '#0284c7'; // sky-600
      randomImageButton.title = 'Random image selected';
      if (imageUrlInput) {
        imageUrlInput.value = selectedImageUrl;
      }
    });
  }  // Handle both form submit and button click
  if (newPostForm && textarea && postButton) {
    const handlePostSubmission = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const postContent = textarea.value.trim();
      if (!postContent) {
        alert('Please write something before posting!');
        return false;
      }
      const postTitle = titleInput && titleInput.value.trim() ? titleInput.value.trim() : 'New Post';

      // Determine image URL
      let imageUrl = '';
      if (imageUrlInput && imageUrlInput.value.trim()) {
        imageUrl = imageUrlInput.value.trim();
      } else if (selectedImageUrl) {
        imageUrl = selectedImageUrl;
      } else {
        // Use random image if no image is provided
        imageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
      }

      // Create new post element
      const newPost = document.createElement('div');
      newPost.className = 'bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1';

      newPost.innerHTML = `
        <img src="${imageUrl}" alt="Post thumbnail" class="w-full h-56 object-cover">
        <div class="p-5">
          <h3 class="text-xl font-semibold mb-2 text-sky-700">${postTitle}</h3>
          <p class="text-slate-600 text-sm mb-4 leading-relaxed">
            ${postContent}
          </p>
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span>You - Just now</span>
            <button class="text-sky-600 hover:text-sky-700">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Add to the beginning of the posts grid
      if (postsGrid) {
        postsGrid.insertBefore(newPost, postsGrid.firstChild);
        allPosts.unshift(newPost); // Update our posts array
      }

      // Clear form
      textarea.value = '';
      if (imageUrlInput) {
        imageUrlInput.value = '';
      }
      selectedImageUrl = null;
      if (randomImageButton) {
        randomImageButton.style.color = '';
        randomImageButton.title = 'Use random image';
      }

      return false;
    };    // Prevent any form submission by default
    newPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    // Handle click on the Post button
    postButton.addEventListener('click', handlePostSubmission);
  }
});
