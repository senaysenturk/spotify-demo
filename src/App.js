import "./App.scss";

// components
import Playlist from "./components/app/playlists/Playlists";
import Sidebar from "./components/shared/sidebar/Sidebar";
import Header from "./components/shared/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Dashboard/home/Home";
import Search from "./pages/Dashboard/search/Search";
import YourLibrary from "./pages/Dashboard/your-library/YourLibrary";
import CreatePlaylist from "./pages/Dashboard/create-playlist/CreatePlaylist";
import LikedSongs from "./pages/Dashboard/liked-songs/LikedSongs";
import Login from "./pages/Auth/login/Login";
import SignUp from "./pages/Auth/sign-up/SignUp";
import NotFound from "./pages/not-found/NotFound";

// layouts
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import AdminLayout from "./layouts/auth-layout/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="your-library" element={<YourLibrary />} />
            <Route path="create-playlist" element={<CreatePlaylist />} />
            <Route path="liked-songs" element={<LikedSongs />} />
          </Route>

          <Route path="auth" element={<AdminLayout />}>
            <Route index element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>

          {/* <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
