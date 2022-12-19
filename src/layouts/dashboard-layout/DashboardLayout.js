import React from "react";
import { Outlet } from "react-router-dom";

// components
import Sidebar from "../../components/shared/sidebar/Sidebar";
import Header from "../../components/shared/header/Header";
import Footer from "../../components/shared/footer/Footer";
import Playlists from "../../components/app/playlists/Playlists";

export const DashboardLayout = () => {
  return (
    <div className="App">
      <div className="left-side">
        <nav>
          <Sidebar />
        </nav>
      </div>

      <div className="right-side">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>

      {/*  <div id="content">
                <Outlet />
            </div> */}
    </div>
  );
};

export default DashboardLayout;
