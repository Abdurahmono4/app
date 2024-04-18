import { Outlet } from "react-router-dom";

//component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
