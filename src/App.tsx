/** @format */

import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import EditArticles from "./components/EditArticles";
import LikePostUser from "./components/likePostUser";
import StoriesUser from "./components/savePost";
import StoriesForm from "./components/StoriesForm";
import HomePage from "./pages/homePage";
import IntroPage from "./pages/introPage";
import ListPage from "./pages/listsPage";
import LoginPage from "./pages/loginPage";
import NotificationPage from "./pages/notificationPage";
import PostUser from "./pages/postUser";
import ProfilePage from "./pages/profilePage";
import ProfileUserPost from "./pages/profileUserPost";
import RegisterPage from "./pages/registerPage";
import StoriesPage from "./pages/storiesPage";
import TagPage from "./pages/tagArticlesPage";

function App() {
  return (
    <div>
      <ToastContainer />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profileUserPost" element={<ProfileUserPost />} />
          <Route path="/list" element={<ListPage />}>
            <Route path="likePost" element={<LikePostUser />} />
            <Route path="savePost" element={<StoriesUser />} />
          </Route>
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/newPost" element={<StoriesForm />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post" element={<PostUser />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/editArticle" element={<EditArticles />} />
        </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
