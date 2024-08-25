<h1 align="center">Home Decor</h1>

<p>Home Decor is a community-driven platform where users can explore and share ideas for transforming their living spaces. Whether you’re looking to revamp your home interiors, create a cozy garden, or enhance your terrace and balcony, this is your destination for stylish, practical, and affordable decor inspiration.</p>

### Live Demo
Check out the live version of the project. 
 * [Deployed Front-End](https://home-fat-116ff084a3b1.herokuapp.com/)
 * [Deployed Back-End](https://fifth-project-b52d7d161462.herokuapp.com/)
 * [Back-End Repository](https://github.com/fh255/HomeDecor-API)

## Contents
 * [Project Concepts](#project-concepts)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Design](#design)
        - [Images](#images)
        - [Typography](#typography)
        - [Colour Scheme](#colour-scheme)
 * [Frameworks and Libraries](#frameworks-and-librarie)
   - [API Backend](#api-backend)
   - [Frontend](#frontend)
 * [Installed Libraries and Components](#installed-libraries-and-components)
 * [Features](#features)
 * [Reusable Components](#reusable-components)
 * [Technologies](#technologies)
   - [Languages Used](#languages-used)
   - [Databases](#databases)
   - [Cloud Storage and Deployment Services](#cloud-storage-and-deployment-services)
 * [Testing](#testing)
 * [Deployment](#deployment)
 * [Credits](#credits)

## Project Concepts
### Project Goals
<p> The primary goal of the Home Decor website is to create a platform where users can explore and share creative ideas for decorating their homes, gardens, terraces, and balconies. The website serves as a community-driven hub where decor enthusiasts can find inspiration, discover the latest trends, and connect with others who share their passion for stylish and functional living spaces. </p>

### User Stories

#### Authentication
 * **Sign Up:**
   As a user, I want to create a new account, so that I can access features and content that are available exclusively to registered users.
 * **Sign In:**
   As a user, I want to sign in to the app, so that I can access all the functionality meant for logged-in users.
 * **Sign Out:**
   As a user, I want my session to remain active without needing to constantly log back in, so that my user experience remains smooth and uninterrupted until I choose to log out.
 * **Refreshing access tokens:**
   As a user I can maintain my logged in status for 24 hours so that I can easily interact with the app throughout the day.
 * **Visibility of Authentication Options:**
   As a logged-out user, I want to see sign-in and sign-up options, so that I can easily register or log in when needed.
 * **Profile Management:**
   As a user, I want to update my username and password, so that I can maintain the security of my account and change my display name if needed.
 * **Profile Editing:**
   As a user, I want to edit my profile information (such as bio, profile picture, etc.), so that I can keep my profile up-to-date and accurately represent myself.
   
#### Navigation and Browsing
- **Smooth Navigation:**  
  As a user, I want to navigate through pages quickly without any delay, so that I can view content seamlessly without experiencing page reloads.

- **Persistent Navigation Bar:**  
  As a user, I want to view a navigation bar on every page, so that I can easily navigate between different sections of the application.

- **Feed and Content Updates:**  
  As a user, I want the posts to load automatically as I scroll down the page, so that I can continuously browse content without needing to click on a "Load More" button or navigate between pages.

- **Recent Content:**  
  As a user, I want to view the most recent posts, so that I can stay updated with the latest content shared by other users.

### Content Creation and Interaction
- **Create Posts:**  
  As a user, I want to create and publish new posts, so that I can share content and engage with other users on the platform.

- **Edit Posts:**  
  As a user, I want to edit my existing posts, so that I can update or correct the content after it has been published.

- **Like Posts:**  
  As a user, I want to like a post, so that I can express my appreciation or agreement with the content and show support for the author.

- **Commenting:**  
  As a user, I want to create and submit a comment on a post, so that I can share my thoughts, provide feedback, or engage in discussions related to the content.

- **Mentioning Users in Comments:**  
  As a user, I want to mention other users in a comment (using @username), so that I can notify them and involve them directly in the conversation.

- **Comment Editing and Management:**  
  - As a user, I want to edit my comments after they are posted, so that I can correct mistakes or update the information if needed.  
  - As a user, I want to delete my comments, so that I can remove content that is no longer relevant or that I no longer wish to display.

- **Viewing and Interacting with Comments:**  
  - As a user, I want to view all comments on a post, so that I can read other users’ perspectives and engage in discussions related to the content.  
  - As a user, I want to see the date and time when a comment was posted, so that I can understand the context and relevance of the comment based on when it was made.

### Profile and User Interaction
- **Profile Pages:**  
  As a user, I want to access my profile page, so that I can view and manage my personal information, posts, and activity on the platform.

- **User Avatars:**  
  As a user, I want to see user avatars displayed next to user profiles, so that I can easily identify and interact with other users of the application.

- **Profile Statistics:**  
  As a user, I want to view user statistics on my profile (such as the number of followers, following, and posts), so that I can track my engagement and growth on the platform.

- **Follow/Unfollow Users:**  
  As a user, I want to follow or unfollow other users, so that I can control whose content appears in my feed based on my interests.

- **Discovering Popular Users:**  
  As a user, I want to view a list of the most followed profiles, so that I can discover popular users and follow them for interesting content.

### Content Discovery and Search
- **Search for Posts:**  
  As a user, I want to search for specific posts, so that I can quickly find content that matches my interests or needs.

- **View Posts by Specific Users:**  
  As a user, I want to view all posts made by a specific user, so that I can explore their content and engage with posts that interest me.

- **View Posts I Have Liked:**  
  As a user, I want to view a list of posts I have liked, so that I can easily revisit and engage with content I previously found interesting or valuable.

- **View Posts from Followed Users:**  
  As a user, I want to view posts from users I follow, so that I can easily keep up with content shared by the people I am interested in.

- **Access Detailed Post Pages:**  
  As a user, I want to access a dedicated page for each post, so that I can view the full content, comments, and related interactions in one place.

### User Session Management
- **Session Visibility:**  
  As a user, I want to be able to see if I am logged in, so that I know whether I need to sign in to access certain features.

- **Session Persistence:**  
  As a user, I want my session to remain active without needing to constantly log back in, so that my user experience remains smooth and uninterrupted until I choose to log out.

## Design

### Images

The images used for the profile avatars graphic was sourced from the Code Institute Moments walkthrough.

Additional images, including those used for user profiles and memes, were sourced from [Google Images](https://images.google.com/).

The favicons were custom-created using [Favicon.io](https://favicon.io/).

### Typography

The Home Decor website uses a combination of clean, modern, and widely supported fonts to ensure a consistent and aesthetically pleasing experience across different devices and platforms.

#### Primary Font
- **Font Family:** `"DM Sans", sans-serif;`
- **Usage:** This font is primarily used for headings, body text, and other key content throughout the site. "DM Sans" is a modern and elegant font that enhances readability while maintaining a stylish and minimalistic appearance.

#### Fallback Font Stack
- **Font Family:**
  ```css
  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

### Colour Scheme
The Home Decor website features a clean and modern color palette designed for simplicity and elegance:

- **Primary Colors:**
  - White (`#ffffff`) for backgrounds.
  - Blue (`#2142b2`) for headers and key interactive elements.

- **Accent Colors:**
  - Light Gray (`#dadadf`) for borders and outlines.
  - Soft Gray (`#f0f1f9`) for form inputs and subtle backgrounds.

- **Text Colors:**
  - Dark Gray (`#555555`) for general text and links.
  - Soft Gray (`#7177a1`) for placeholder text and input fields.
  - Dark Blue (`#242a3d`) for the search bar.

- **Highlight Colors:**
  - Orange (`#ff9254`) for link highlights and call-to-action elements.
  - Pale Yellow (`#fff3cd`) for alert backgrounds.

- **Interactive States:**
  - Link hover changes to Blue (`#2142b2`).
  - Search icon hover changes to Light Gray (`#cfced3`)
 
## Features



## Reusable Components

The following components have been implemented and reused throughout the project:

- **`axiosDefaults.js`:** Handles HTTP requests to the backend API, including CRUD actions and GET requests for specific objects or lists of objects.

- **`Asset.js`:** Exports the loading spinner component, used when loading content across the site.

- **`Avatar.js`:** Manages and exports the user avatar images displayed in the viral profiles list, profile pages, and the navbar profile link.

- **`MoreDropdown.js`:** Displays a dropdown menu with options to edit or delete memes, comments, and profile details, accessible only to authorized users.

- **`CurrentUserContext.js`:** Confirms the logged-in status of the user to determine which functionalities are available based on their access level.

- **`ProfileDataContext.js`:** Provides follow and unfollow capabilities to authorized users through the `PopularProfiles` component and the `ProfilePage` component.

- **`useRedirect.js`:** Redirects users to another page if they are not authorized to access the page they’re trying to view.

- **`useClickOutsideToggle.js`:** Implemented for the mobile dropdown navigation, allowing users to close the expanded navbar by tapping or clicking outside of it.

- **`utils.js`:** Supplies functionality to components that utilize infinite scrolling.

- **`NotFound404.js`:** Displays an error image and message if an invalid URL is accessed. The user is automatically redirected to the Home page after a few seconds.

## Technologies

### Languages Used
- Python
- HTML
- CSS
- JavaScript

### Databases
- **PostgreSQL:** Used for managing and storing relational data.

### Cloud Storage and Deployment Services
- **Cloudinary:** Used to store media files and images.
- **Heroku:** Used for the final deployment and hosting of the application.
- **ElephantSQL:** Used to host and operate the PostgreSQL database.

[Back to top](#contents)

---

## Frameworks and Libraries

### API Backend
- Django Rest Framework
- Psycopg2
- django_filters
- dj_rest_auth
- rest_framework.authtoken
- dj_rest_auth.registration
- allauth
- corsheaders
- JSON Web Tokens

[Back to top](#)

### Frontend
- React JS
- JSON Web Tokens
- React Bootstrap
- react-simple-star-rating
- React Router
- Font Awesome
- Canva
- Favicon.io
- Google Fonts

[Back to top](#)

---

## Installed Libraries, and Components
- **Axios:** A promise-based HTTP client for JavaScript. It is used for making HTTP requests from the browser and handling the transformation of request and response data.
- **jwt-decode:** Used to securely transmit information between parties as JSON objects following the open standard (RFC 7519).
- **react-router-dom:** Enables dynamic routing in a web app.
- **react-infinite-scroll-component:** Implements infinite scrolling, where more content is automatically loaded as the user scrolls down.
- **'Notification Container' Component:** Provides real-time feedback and notifications to users when changes are made to data or content.
- **Google Lighthouse:** An open-source tool for running technical website audits.
- **Am I Responsive?:** Used to ensure the project looks good across all devices.
- **HTML Markup Validation:** Used to validate HTML code syntax.
- **CSS Validation Service:** Used to validate CSS code syntax.
- **Balsamiq:** Used to create mockups and wireframes during the planning phase of the project.
- **Google Fonts:** Provides free and open-source font families for web and computer use.
- **GitHub:** An internet hosting service for software development and version control using Git.
- **Google Developer Tools:** Used to troubleshoot, test features, and solve issues with responsiveness and styling.
- **TinyPNG:** Used to compress images and optimize performance.

[Back to top](#)


## Testing


## Deployment


## Credits







