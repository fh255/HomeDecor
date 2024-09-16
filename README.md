<h1 align="center">Home Decor</h1>

<p>Home Decor is a community-driven platform where users can explore and share ideas for transforming their living spaces. Whether you’re looking to revamp your home interiors, create a cozy garden, or enhance your terrace and balcony, this is your destination for stylish, practical, and affordable decor inspiration.
I chose React.js for the "Home Decor" project because it makes building user interfaces easy and efficient. Its component-based structure allows me to reuse code, which speeds up development. React is also fast, ensuring a smooth experience for users as they browse through decor ideas. Additionally, it’s well-supported with a large community, making it easier to find solutions and resources when needed.
</p>

<img width="904" alt="mock" src="https://github.com/user-attachments/assets/c88274fd-8a59-4283-a5f7-ebc597939a08">

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
   - [Installed Libraries and Components](#installed-libraries-and-components)
 * [Features](#features)
   - [Logo](#logo)
   - [NavBar](#navbar)
   - [Home Page](#home-page)
   - [Post Page](#post-page)
   - [About Us](#about-us)
   - [Add Post](#add-post)
   - [Feed](#feed)
   - [Profile Page](#profile-page)
   - [Sign In](#sign-in)
   - [Sign Up](#sign-up)
   - [No results found](#no-results-found)
   - [Custom 404 page](#custom-404-page)
   - [Real Time Notifications](#real-time-notifications)
   - [CRUD](#crud)
   - [Defensive Design](#defensive-design)
 * [Reusable Components](#reusable-components)
 * [Technologies](#technologies)
   - [Languages Used](#languages-used)
   - [Databases](#databases)
   - [Cloud Storage and Deployment Services](#cloud-storage-and-deployment-services)
 * [Testing](#testing)
   - [Introduction](#introduction)
   - [Validator Testing](#validator-testing)
   - [Lighthouse Testing](#lighthouse-testing)
   - [Manual Testing](#manual-testing)
   - [User story testing](#user-story-testing) 
 * [Bugs](#bugs)
 * [Deployment](#deployment)
   - [Initial Deployment](#initial-deployment)
   - [Deployment Steps](#deployment-steps)
   - [Final Deployment](#final-deployment)
   - [Cloning the Repository](#cloning-the-repository)
   - [Forking the Repository](#forking-the-repository)
 * [Credits](#credits)
   - [Code Institute](#code-institute)
   - [Sources](#sources)
   - [Media](#media)
   - [Acknowledgements](#acknowledgements)

[Back to top](#home-Decor)

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

### Real Time Notifications

 - **Authentication Notificatios**
    - As a user, I want to receive a notification after signing up, sign-in and sign out, so that I know my account creation was successful.

 - **Post Create, Edit, and Delete Notifications**
    - As a user, I want to receive notifications when I create, edit, or delete a post, so that I am informed of the success or failure of these actions.

 - **Comment Create, Edit, and Delete Notifications**
    - As a user, I want to receive notifications when I create, edit, or delete a comment, so that I am informed of the success or failure of these actions.

[View Full User Story here](https://github.com/users/fh255/projects/10/views/1)
  
[Back to top](#home-Decor)

## Design

### Images

 - The images used for the profile avatars graphic was sourced from the Code Institute Moments walkthrough.
 - Additional images, including those used for user profiles and posts, were sourced from [Google Images](https://images.google.com/).
 - The favicons were custom-created using [Favicon.io](https://favicon.io/).

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

 [Back to top](#home-Decor)

## Features

### Logo

The logo was utilized both as the webpage's favicon and as the home link in the navigation bar.
<details>
  <summary>Logo</summary>
<img width="109" alt="logo" src="https://github.com/user-attachments/assets/8ab1bc03-36a3-4e2c-aa9c-160326ff447a">
</details>

### NavBar

The user is Sign in.
<details>
  <summary>Signed In NavBar</summary>
    <img width="997" alt="NB-In" src="https://github.com/user-attachments/assets/8f1cec19-e98c-4197-84d4-de13c03772e0">
</details>

The user is not Signed in
<details>
  <summary>Signed Out NavBar</summary>
    <img width="978" alt="NB-Out" src="https://github.com/user-attachments/assets/6d447f12-0a29-41fe-9b2b-c1b1140bbf8c">
</details>

### Home Page

The landing page features a sidebar highlighting the "Most Viral Profiles."
<details>
  <summary>Signed In Home page</summary></summary>
    <img width="1130" alt="Home signin" src="https://github.com/user-attachments/assets/7f8753a9-cb5a-4f96-af90-45756908e773">
</details>

<details>
  <summary>Signed Out Home page</summary></summary>
    <img width="1187" alt="Home Signout" src="https://github.com/user-attachments/assets/5d59fdb2-5151-4732-a3c8-399fc3983a78">
</details>

### Post Page

#### Single Post Page (When the User is Logged In)

When a user clicks on a single post, they are directed to the post's dedicated page, which still includes the "Most Viral Profiles" sidebar. Below the post, two icons represent available actions:

 - Heart Icon: Allows users to react to the post. Once clicked, the icon fills with a solid shade, indicating the reaction. Clicking it again will undo the reaction. The number next to the heart reflects the total number of reactions from users.
 - Comment Icon: Displays the total number of comments for that post.
Beneath the post, the comment section lists all user comments. Logged-in users can tag or mention other users directly in the comment box by typing their username.
<details>
  <summary>Signed In Post</summary>
    <img width="628" alt="Post SI" src="https://github.com/user-attachments/assets/0f3781f0-e350-4b29-9360-d769709b1c0a">
    <img width="628" alt="Post comment" src="https://github.com/user-attachments/assets/82f092dc-6f20-4b98-bb8f-004144b45468">
</details>

 - In the comment section, logged-in users have the opportunity to publish comments. After posting a comment, three vertical dots appear next to their comment. When clicked, this menu allows users to either edit or delete their own comments.

<details>
  <summary>Signed In Comment</summary>
  <img width="627" alt="Cmnt with tag" src="https://github.com/user-attachments/assets/d009c52e-eb73-4384-8cb3-1f5c6efd6e38">
</details>

<details>
  <summary>Signed In Comment Edit</summary>
  <img width="629" alt="Cmnt Edit" src="https://github.com/user-attachments/assets/9d82c012-f52f-4b43-b60d-3a3769b9eedd">
</details>

<details>
  <summary>Signed In Comment delete</summary>
  <img width="628" alt="cmnt delete" src="https://github.com/user-attachments/assets/f479c678-65f1-462d-a745-1d39802401d5">
</details>

#### Single Post Page (When the User is Logged In and is the Owner of the Post)

If a user is the owner of the post, three vertical dots are displayed next to the post image. When clicked, this menu gives the user the option to edit or delete their post.

<details>
  <summary>Own Post Page</summary>
  <img width="641" alt="own post" src="https://github.com/user-attachments/assets/40a89b0e-a6a2-41b4-a1c1-82b4d91c0639">
</details>

<details>
  <summary>Own Post Page Edit</summary>
  <img width="954" alt="own post edit" src="https://github.com/user-attachments/assets/6f8a6b5c-fee1-4067-91f2-77b97071e2dd">
</details>

#### Single Post Page (When the User is Not Logged In)

 - When a logged-out user hovers over the heart icon, an overlay message appears prompting them to log in to react to the post.
 - Logged-out users are unable to leave comments or mention other users.

<details>
  <summary>Signed Out Post</summary>
  <img width="636" alt="Post SO" src="https://github.com/user-attachments/assets/1295bf6e-3325-488d-a44f-3cd818604dc4">
</details>

### About Us

Here, you'll find simple ideas and tips to decorate your home and make it your own. Whether it's furniture, accessories, or small touches, this page helps you create a cozy and stylish space.
The icon and link to this page will only show in the NavBar for users who are logged out.

<details>
  <summary>About Us</summary>
    <img width="1141" alt="About " src="https://github.com/user-attachments/assets/f1f45e11-ccd2-4b49-8e01-48973506dc8e">
</details>

### Add Post

This is where logged-in users can upload an image for their post and fill out the Title and Content sections. After completing these, they can click the "Create" button to publish their post.
Once the post is created, the owner has the option to edit or delete it.

<details>
  <summary>Add Post</summary>
    <img width="1138" alt="Add Post" src="https://github.com/user-attachments/assets/0c8bee2e-6322-43a6-87a0-64c8e103c718">
</details>

### Feed

The Feed displays posts created by users you follow. If a logged-in user isn't following anyone, a "No results found" message is shown, encouraging them to start following other users.

<details>
  <summary>Feed</summary>
<img width="1135" alt="Feed" src="https://github.com/user-attachments/assets/c1549fa9-4748-4c2a-958b-bc78c03f77ea">
</details>

<details>
  <summary>No Followers Feed</summary>
<img width="989" alt="feed NF" src="https://github.com/user-attachments/assets/a5cb14f1-6cc0-43ab-9c9c-78e65fc54e9e">
</details>

### Profile Page

The profile page displays the profile owner's avatar or image, along with stats showing the number of posts posted, the number of profiles followed, and the number of followers. There is a bio section, followed by all the posts the profile owner has posted.
On the left-hand side, there is a section showing the most viral profiles. If the user is logged in, a "Follow/Unfollow" button appears at the top of the profile section.
If the logged-in user is also the owner of the profile, a three-bar icon is visible in the top right corner. Clicking this icon allows the profile owner to edit their profile, change their profile image, or update their username.

<details>
  <summary>Profile</summary>
    <img width="960" alt="Profile" src="https://github.com/user-attachments/assets/ec08b13f-7300-4b00-b6e5-c6384ddcce07">
</details>

<details>
  <summary>Edit Profile</summary>
    <img width="969" alt="Edit profile" src="https://github.com/user-attachments/assets/af181e66-4c9a-4a33-a494-7e8df2733829">
</details>

<details>
  <summary>Profile's three bar icon</summary>
    <img width="620" alt="three-bar icon" src="https://github.com/user-attachments/assets/c51c4c08-b2e9-40f4-819c-57b8455f2fb9">
</details>

### Sign In

Sign in page with a link to sign up for an account if the user does not have an account yet.

<details>
  <summary>Sign In</summary>
    <img width="1201" alt="Signin" src="https://github.com/user-attachments/assets/0e0d15cc-ed0a-44e1-9237-b6fb90e79515">
</details>

### Sign Up

Sign up page with a link to sign in if the user already has an account.

<details>
  <summary>Sign Up</summary>
    <img width="1277" alt="signup" src="https://github.com/user-attachments/assets/a87eabc7-a8a6-4721-b628-a6479f7f1b6f">
</details>

### Custom 404 page

The 404 page lets users know they are still connected to the site but on a non-existent page.

<details>
  <summary>Not Found</summary>
    <img width="572" alt="404" src="https://github.com/user-attachments/assets/06de63dd-daf9-417d-bbd5-b6ffe047192d">
</details>

### Real Time Notifications

Users are kept up to date in real-time with pop-up messages appearing in the top-right corner of the screen. These notifications inform users of successful updates to their content or prompt them when action is required, ensuring a smooth and interactive experience.

<details>
  <summary>Signed Up Notification</summary>
    <img width="253" alt="Sign up" src="https://github.com/user-attachments/assets/5bb114ca-0249-4a74-bd03-42002c729793">
</details>

<details>
  <summary>Signed In Notification</summary>
    <img width="312" alt="Sign in" src="https://github.com/user-attachments/assets/57c49288-2419-4be5-9a6c-6bd9cb3d619c">
</details>

<details>
  <summary>Signed Out Notification</summary>
    <img width="317" alt="Signed Out Not" src="https://github.com/user-attachments/assets/12041f03-3bad-441b-a101-07e2818c9fc3">
</details>

<details>
  <summary>Post Created Notification</summary>
    <img width="306" alt="post create" src="https://github.com/user-attachments/assets/b44cd1ce-2405-4697-8dcf-71ae072ae10e">
</details>

<details>
  <summary>Post Edited Notification</summary>
    <img width="315" alt="Psot Updated" src="https://github.com/user-attachments/assets/5c7a60e3-6a0f-4565-a942-8bcb4a3d9475">
</details>

<details>
  <summary>Post Deleted Notification</summary>
    <img width="311" alt="POST DELETE" src="https://github.com/user-attachments/assets/54861905-43fe-44a9-a23a-0f997ed203cb">
</details>

<details>
  <summary>Comment Created Notification</summary>
    <img width="302" alt="cmnt crt" src="https://github.com/user-attachments/assets/d0910370-e47a-4218-b517-f04b1e9a4974">
</details>

<details>
  <summary>Comment Edited Notification</summary>
    <img width="302" alt="cmnt edit" src="https://github.com/user-attachments/assets/0c491313-2a14-4ecb-812a-4688f47270e3">
</details>

<details>
  <summary>Comment Deleted Notification</summary>
    <img width="311" alt="cmnt dlt" src="https://github.com/user-attachments/assets/0ffc8c1b-3484-4136-8bcf-2bf8e769787c">
</details>

### CRUD

The CRUD functionalities implemented in this project are the following:
 - After signing up, users can personalize their profile by adding a profile picture and bio, and they can also update their username and password on the profile page.
 - For posts, users can edit or delete their post. Clicking the three dots on the right of a post allows for deletion (which returns the user to the home page) or editing, which opens an edit form.
 - Comments on post can also be edited or deleted. When editing, users can modify the comment and either save or cancel changes.
 - Users can react positively to post and undo these actions at any time. They can also follow or unfollow other users whenever they choose.

### Defensive Design

When creating a new account, the following error message will appear if any of the inputs are left blank:

<details>
  <summary>Blank Input Error</summary>
    <img width="482" alt="Blank input" src="https://github.com/user-attachments/assets/f6b7ea35-a620-4b0b-91d8-642c2c4016fb">
</details>

<details>
  <summary>Sign Up Error</summary>
    <img width="464" alt="Signup Error" src="https://github.com/user-attachments/assets/2f47782c-2517-4113-8063-a75a9e55bc4c">
</details>

<details>
  <summary>Common Password Error</summary>
    <img width="471" alt="Common Password" src="https://github.com/user-attachments/assets/5b0c5866-d486-4ab0-a1e2-8348dea80b31">
</details>

<details>
  <summary>Existing User Error</summary>
    <img width="468" alt="Existing User" src="https://github.com/user-attachments/assets/b3494112-c40e-4da6-a40e-2293289d33d3">
</details>

<details>
  <summary>Blank Image Error</summary>
    <img width="897" alt="Blank image" src="https://github.com/user-attachments/assets/9c0ebc8f-6782-4aad-991a-ef0211d3676c">
</details>

<details>
  <summary>Blank Title Error</summary>
    <img width="913" alt="Blank title" src="https://github.com/user-attachments/assets/48430d46-9cb2-45e0-b741-c4f7508e668a">
</details>

[Back to top](#home-Decor)


## Reusable Components

Reusable components in React let us use the same piece of code in different parts of our app, saving time. They help keep our code organized and easy to manage. With reusable components, it's simpler to update our app since changes to one component update it everywhere it's used. They also reduce repetition, making our app more efficient and easier to maintain.
The following components have been implemented and reused throughout the project:

- **`axiosDefaults.js`:** Handles HTTP requests to the backend API, including CRUD actions and GET requests for specific objects or lists of objects.

- **`Asset.js`:** Exports the loading spinner component, used when loading content across the site.

- **`Avatar.js`:** Manages and exports the user avatar images displayed in the viral profiles list, profile pages, and the navbar profile link.

- **`MoreDropdown.js`:** Displays a dropdown menu with options to edit or delete posts, comments, and profile details, accessible only to authorized users.

- **`CurrentUserContext.js`:** Confirms the logged-in status of the user to determine which functionalities are available based on their access level.

- **`ProfileDataContext.js`:** Provides follow and unfollow capabilities to authorized users through the `PopularProfiles` component and the `ProfilePage` component.

- **`useRedirect.js`:** Redirects users to another page if they are not authorized to access the page they’re trying to view.

- **`useClickOutsideToggle.js`:** Implemented for the mobile dropdown navigation, allowing users to close the expanded navbar by tapping or clicking outside of it.

- **`utils.js`:** Supplies functionality to components that utilize infinite scrolling.

- **`NotFound404.js`:** Displays an error image and message if an invalid URL is accessed. The user is automatically redirected to the Home page after a few seconds.

- **`NotificationContext.js`:** Provides global notification management, allowing components to access and update notifications through the `useNotification` hook within any part of the app.

[Back to top](#home-Decor)

## Technologies

### Languages Used

- [Python](https://www.python.org/)
- [HTML](https://www.w3schools.com/html/html_intro.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JavaScript](https://react.dev/)

### Databases

- **[PostgreSQL](https://www.postgresql.org/):** Used for managing and storing relational data.

### Cloud Storage and Deployment Services

- **[Cloudinary](https://www.postgresql.org/):** Used to store media files and images.
- **[Heroku](https://dashboard.heroku.com/apps):** Used for the final deployment and hosting of the application.
- **[ElephantSQL](https://elephantsql.com/):** Used to host and operate the PostgreSQL database.

[Back to top](#home-Decor)

## Frameworks and Libraries

### API Backend

- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Psycopg2](https://pypi.org/project/psycopg2/)
- [django_filters](https://django-filter.readthedocs.io/en/stable/guide/install.html)
- [dj_rest_auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [rest_framework.authtoken](https://pypi.org/project/django-rest-authtoken/)
- [dj_rest_auth.registration](https://dj-rest-auth.readthedocs.io/en/latest/installation.html)
- [allauth](https://django-allauth.readthedocs.io/en/latest/installation.html)
- [corsheaders](https://pypi.org/project/django-cors-headers/)
- [JSON Web Tokens](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)

[Back to top](#home-Decor)

### Frontend

- [React JS](https://react.dev/)
- [JSON Web Tokens](https://jwt.io/)
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Font Awesome](https://fontawesome.com/)
- [Favicon.io](https://favicon.io/favicon-converter/)
- [Google Fonts](https://fonts.google.com/)

[Back to top](#home-Decor)

### Installed Libraries, and Components

- **[Axios](https://axios-http.com/):** A promise-based HTTP client for JavaScript. It is used for making HTTP requests from the browser and handling the transformation of request and response data.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** Enables dynamic routing in a web app.
- **[Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/):** An open-source tool for running technical website audits.
- **[Am I Responsive?](https://ui.dev/amiresponsive):** Used to ensure the project looks good across all devices.
- **[HTML Markup Validation](https://validator.w3.org/):** Used to validate HTML code syntax.
- **[CSS Validation Service](https://jigsaw.w3.org/css-validator/):** Used to validate CSS code syntax.
- **[Google Fonts](https://fonts.google.com/):** Provides free and open-source font families for web and computer use.
- **[GitHub](https://github.com/):** An internet hosting service for software development and version control using Git.
- **[Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools):** Used to troubleshoot, test features, and solve issues with responsiveness and styling.

[Back to top](#home-Decor)

## Testing

### Introduction

This project has been continuously tested throughout the development stages using the following features:
 - Python terminal for backend functionalities
 - Google Developer Tools
 - Manual Testing

### Validator Testing

#### HTML Validator

All HTML files have successfully passed the HTML validation check with zero errors.

<details>
  <summary>HTML Validator</summary>
    <img width="699" alt="HTML" src="https://github.com/user-attachments/assets/7154a41e-02f5-4b7e-a986-6cf99a29d0d4">
</details>

#### CSS Validator

All CSS files have successfully passed the HTML validation check with zero errors.

<details>
  <summary>CSS Validator</summary>
    <img width="1218" alt="CSS" src="https://github.com/user-attachments/assets/57df510a-6789-4ca4-95ed-042e1ae827ef">
</details>

#### JSX Validation

Most of the validation was done using the Gitpod Code Institute IDE's "Problems" tab, along with the Prettier code formatting extension. This ensured that the code was properly formatted, free of errors, and followed best practices throughout the project.

<details>
  <summary>Successfully Compiled Massage</summary>
    <img width="382" alt="compiled" src="https://github.com/user-attachments/assets/6b2862ec-23b5-4633-a210-112d759ca910">
</details>

### Lighthouse testing

<details>
  <summary>Successfully Compiled Massage</summary>
    <img width="579" alt="Lighthouse" src="https://github.com/user-attachments/assets/76e3f526-b066-4da4-ba81-2914f7be6809">
</details>

### Manual Testing

Manual testing for this project was conducted as follows:

 - Users can view the sign-in, sign-up, and info pages only when they are not logged in. ✅
 - Users can create a new account successfully. ✅
 - After creating an account, users can log in and are redirected to the home page. ✅
 - Users can log out without any issues. ✅
 - Once logged in, users can create, love, and reply to post, as well as edit, mention and delete their posts and replies. ✅
 - Users can edit and update their profile, including their profile picture, bio, and separate username and password update options. ✅
 - All NavLinks and buttons navigate to their correct destinations. ✅
 - Clicking on a post image takes the user to that post's dedicated page. ✅
 - Users can save and react to post, and these actions can be undone if needed. ✅
 - Hovering over the reactions and save icons displays a message indicating the need to sign in, and if clicked while signed out, the user is redirected to the sign-in page. ✅
 - Each icon has a label notifying the user of its function. On the post page, if the user owns the post, the three dots next to the post image bring up the edit and delete options, with overlay triggers indicating their functions. ✅
 - The site was continuously developed on Google Chrome and was successfully tested on Firefox and Safari browsers. ✅

### User story testing

**User story:**
 - User: I want to view a navigation bar on every page, so that I can easily navigate between different sections of the application.  ✅
 - User: I want to navigate through pages quickly without any delay, so that I can view content seamlessly without experiencing page reloads.  ✅
 - User: I want to create a new account, so that I can access features and content that are available exclusively to registered users.  ✅
 - User: I want to sign in to the app, so that I can access all the functionality meant for logged-in users.  ✅
 - User: I want to be able to see if I am logged in, so that I know whether I need to sign in to access certain features.  ✅
 - User: I want my session to remain active without needing to constantly log back in, so that my user experience remains smooth and uninterrupted until I choose to log out.  ✅
 - User: I want to see sign-in and sign-up options, so that I can easily register or log in when needed.  ✅
 - User: I want to see user avatars displayed next to user profiles, so that I can easily identify and interact with other users of the application.  ✅
 - User: I want to create and publish new posts, so that I can share content and engage with other users on the platform.  ✅
 - User: I want to view a detailed post, so that I can read its content, see related comments, and interact with it.  ✅
 - User: I want to like a post, so that I can express my appreciation or agreement with the content and show support for the author.  ✅
 - User: I want to view the most recent posts, so that I can stay updated with the latest content shared by other users.  ✅
 - User: I want to search for specific posts, so that I can quickly find content that matches my interests or needs.  ✅
 - User: I want to view a list of posts I have liked, so that I can easily revisit and engage with content I previously found interesting or valuable.  ✅
 - User: I want to view posts from users I follow, so that I can easily keep up with content shared by the people I am interested in.  ✅
 - User: I want the posts to load automatically as I scroll down the page, so that I can continuously browse content without needing to click on a "Load More" button or navigate between pages.  ✅
 - User: I want to access a dedicated page for each post, so that I can view the full content, comments, and related interactions in one place.  ✅
 - User: I want to edit my existing posts, so that I can update or correct the content after it has been published.  ✅
 - User: I want to create and submit a comment on a post, so that I can share my thoughts, provide feedback, or engage in discussions related to the content.  ✅
 - User: I want to see the date and time when a comment was posted, so that I can understand the context and relevance of the comment based on when it was made.   ✅
 - User: I want to edit my comments after they are posted, so that I can correct mistakes or update the information if needed.  ✅
 - User: I want to delete my comments, so that I can remove content that is no longer relevant or that I no longer wish to display.  ✅
 - User: I want to view all comments on a post, so that I can read other users’ perspectives and engage in discussions related to the content.  ✅
 - User: I want to access my profile page, so that I can view and manage my personal information, posts, and activity on the platform.  ✅
 - User: I want to view user statistics on my profile (such as the number of followers, following, and posts), so that I can track my engagement and growth on the platform.  ✅
 - User: I want to view a list of the most followed profiles, so that I can discover popular users and follow them for interesting content.  ✅
 - User: I want to update my username and password, so that I can maintain the security of my account and change my display name if needed.v
 - User: I want to edit my profile information (such as bio, profile picture, etc.), so that I can keep my profile up-to-date and accurately represent myself.  ✅
 - User: I want to follow or unfollow other users, so that I can control whose content appears in my feed based on my interests.  ✅
 - User: I want to view all posts made by a specific user, so that I can explore their content and engage with posts that interest me.  ✅
 - User: I want to upload and display a profile picture, so that I can personalize my profile and make it easily recognizable to others.  ✅
 - User: I want to mention other users in a comment (using @username), so that I can notify them and involve them directly in the conversation.  ✅
 - User: I can maintain my logged in status for 24 hours, so that I can easily interact with the app throughout the day.  ✅
 - User: I want to receive a notification after I sign in, so that I know whether my sign-in attempt was successful or not.  ✅
 - User: I want to receive a notification when I sign out, so that I know the sign-out process was successful.  ✅
 - User: I want to receive a notification after signing up, so that I know my account creation was successful.  ✅
 - User: I want to receive notifications when I create, edit, or delete a post, so that I am informed of the success or failure of these actions.  ✅
 - User: I want to receive notifications when I create, edit, or delete a comment, so that I am informed of the success or failure of these actions.  ✅

[Back to top](#home-Decor)

## Bugs

- The first deployment attempt failed due to a CORS (Cross-Origin Resource Sharing) error. After revisiting the Code Institute walkthrough and researching the issue on Slack, I was able to configure the CORS settings correctly in the back-end's Settings.py file. I resolved the issue with assistance from Tutor Roman.
- There are errors in the console on these pages, which were also noted as expected in the Code Institute Moments walkthrough.
- Not a bug, but worth mentioning that when running Lighthouse reports, the Performance rating for pages with multiple images tends to score lower, particularly on mobile devices.
- If a user query returns null, it indicates that the user is not signed in and does not have permission to request any user data, resulting in a 401 response. After that, the JWT is sent to the server for authentication, and once the user is authenticated, the user request is retried. This sequence of steps is based on the normal flow of processing requests, including the time it takes, and isn't factored into the project's grading since that's how it's handled in the course.

[Back to top](#home-Decor)

## Deployment

### Initial Deployment

To deploy the app for the first time on Heroku:

- Navigate to [Heroku](https://dashboard.heroku.com/apps).
- Click the **New** dropdown and select **Create new app**.
- Provide a name for your app and choose the appropriate region (e.g., Europe).
- Click **Create app**.
- Under the **Deploy** tab, select **GitHub** as the deployment method.
- Connect your app to the **HomeDecor** GitHub repository.
- Once connected, click **Deploy Branch** and open the app in your browser to ensure it is working properly.

### Deployment Steps

 - Setup React in Code Institute Gitpod workspace.
 - Run the following commands to create a React app and start the development server:
``` bash
npx create-react-app .
--use-npm
npm start
```
 - install the following dependencies to set up the app:
``` bash
react-bootstrap@1.6.1
bootstrap@5.3.3"
react-router-dom@5.3.0
axios
react-infinite-scroll-component
msw --save-dev
jwt-decode
eslint -g
```
 - After making changes to the project, run the following commands to commit and push the code to GitHub:
``` bash
git add .
git commit
git push
```
 - Navigate to Heroku.
 - Click **New** and select **Create new app**.
 - Provide a name for the app and select the region (e.g., Europe).
 - Click **Create app**.
 - Under the **Deploy tab**, select **GitHub** as the deployment method.
 - Search for and connect the app to your HomeDecor GitHub repository.
 - Once connected to the correct repository, click **Deploy Branch** to trigger the deployment.
 - Open the app in your browser to confirm everything is working as expected.

[Back to top](#home-Decor)

### Final Deployment

To prepare and deploy the final version of the app, follow these steps:
 - Remove the `React.StrictMode` component from `index.js`.
 - Instead of importing the entire Bootstrap library, import only the components you need to minimize the bundle size. For example:
``` bash
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
```
 - Clean up any `console.log` statements from the code.
 - Following the instructions from the Moments walkthrough, leave the `console.log` statements commented out inside `catch` blocks to assist with debugging in the future.
 - In `package.json`, add the Heroku deployment command under the `"scripts"` section:
``` bash
"heroku-prebuild": "npm install -g serve"
```
 - In the root of the project, create a `Procfile` with the following content:
``` bash
web: serve -s build
```
 - After making all necessary changes, commit and push the final version to GitHub:
``` bash
git add .
git commit
git push
``` 
 - Go to your app on the `Heroku dashboard`, navigate to the `Deploy` tab, and scroll down to click the `Deploy Branch` button.
 - Ensure the build is successful, and then open the app to verify it is functioning as expected.
 - Test all features in the final deployed version of the app to ensure everything works as it should.

### Cloning the Repository

To clone this repository and run the project locally, follow these steps:

#### Clone the Repository:

 - Navigate to the GitHub repository you want to clone.
 - Click on the **Code** dropdown button.
 - Select **HTTPS** and copy the repository URL.
 - In your terminal or IDE (ensure `git` is installed), run the following command :
``` bash
git clone copied-git-url
```
 - This will clone the project onto your local machine.

#### Install Dependencies:

 - Navigate into the project folder and run:
``` bash
npm install
```
#### Run the Application:

 - After the dependencies are installed, start the application using:
``` bash
npm start
```

### Forking the Repository

To fork this repository and create your own copy, follow these steps:
 - Go to the GitHub repository that you want to fork.
 - On the top right of the repository page, under the header, click the Fork button.
 - This will create a copy of the entire project in your GitHub account. You will now have a personal version of the repository where you can make changes independently.

[Back to top](#home-Decor)

## Credits

### Code Institute

This project is largely based on the Code Institute's **Moments** walkthrough project. Several styles and logic implementations from the original project were adapted and customized to suit the needs of the **Home Decor** project.

### Sources

Throughout the development of this project, the following resources were used to find solutions and gather knowledge:

 - Stack Overflow: For debugging and solutions to common coding issues.
 - Slack: For seeking advice and troubleshooting bugs.
 - W3Schools: For reference and examples of HTML, CSS, and JavaScript syntax.

### Media

Most of the images used to populate the content of this website were sourced from Unsplash and Google Images. 

### Acknowledgements

 - My mentor at Code Institute - **Martina Terlevic**, for providing guidance and support throughout the project.
 - A big thank you to **Roman from Tutor support** for assisting with all the issues related to the my project. 







