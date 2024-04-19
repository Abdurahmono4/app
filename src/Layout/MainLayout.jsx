import { Outlet } from "react-router-dom";

//component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <ThemeContainer />
      <main className="align-element">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
