// src/App.js
import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ProfileImageForm from "./pages/profiles/ProfileImageForm";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
import NotFound404 from "./components/NotFound404";
import About from "./pages/about/About";
import { NotificationProvider } from "./contexts/NotificationContext"; // Import NotificationProvider

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <NotificationProvider> {/* Wrap the application with NotificationProvider */}
      <ProfileDataProvider>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <PostsPage />} />
              <Route exact path="/feed" render={() => <PostsPage filter={`owner__followed__owner__profile=${profile_id}&`} />} />
              <Route exact path="/liked" render={() => <PostsPage filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/image" render={() => <ProfileImageForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/about" render={() => <About />} />
              <Route render={() => <NotFound404 />} />
            </Switch>
          </Container>
        </div>
      </ProfileDataProvider>
    </NotificationProvider>
  );
}

export default App;
