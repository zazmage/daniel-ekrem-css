# Social Media App

A modern, responsive social media application built with HTML, CSS, JavaScript, and Vite, featuring a clean UI with Tailwind CSS.

## Features

### Authentication
- Simple login system with email and password
- Redirect to social feed after successful login

### Feed Page
- View posts from multiple users with images and content
- Search functionality to filter posts by title, content, or author
- Create new posts with title, content, and image upload
- Real-time post addition without page reload
- Responsive grid layout for posts

### Profile Page
- View user profile (Ekrem Gursoy) with bio and stats
- Display user's posts with search functionality
- Follow/Unfollow functionality with dynamic follower count updates
- Clean profile layout with user information

### General
- Responsive design that works on desktop and mobile
- Modern UI with Tailwind CSS styling
- Smooth navigation between pages
- Clean, organized code structure

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Structure**: Multi-page application with modular JavaScript

## Project Structure

```
├── index.html              # Login page
├── feed/
│   └── index.html          # Social feed page
├── profile/
│   └── index.html          # User profile page
├── src/
│   ├── main.js             # Main JavaScript entry point
│   ├── style.css           # Global styles and Tailwind imports
│   └── javascript/
│       ├── auth.js         # Authentication logic
│       ├── feed.js         # Feed page functionality
│       └── profile.js      # Profile page functionality
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

## Usage

### Getting Started
1. **Login**: Use any email and password on the main page to access the app
2. **Navigate**: Use the navigation bar to switch between Feed and Profile pages
3. **Explore**: Try the search functionality and interactive features

### Feed Page Features
- **View Posts**: Scroll through posts from various users
- **Search**: Use the search bar to find specific posts
- **Create Posts**: Fill out the form to add new posts with title, content, and images
- **Responsive**: Layout adapts to different screen sizes

### Profile Page Features
- **View Profile**: See user information and statistics
- **Browse Posts**: View user's personal posts
- **Search Posts**: Filter through the user's posts
- **Follow/Unfollow**: Click the follow button to toggle follow status

## Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Organization
- **Modular JavaScript**: Each page has its own JavaScript file in `src/javascript/`
- **Clean Separation**: HTML structure, CSS styling, and JavaScript functionality are well separated
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities

