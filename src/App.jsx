import { RouterProvider, createBrowserRouter } from "react-router-dom";

//layout
import MainLayout from "./layout/MainLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";

//component
import ProtectedRote from "./components/ProtectedRote";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRote user={true}>
          <MainLayout />{" "}
        </ProtectedRote>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
