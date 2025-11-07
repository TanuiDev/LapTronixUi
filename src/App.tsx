import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { About } from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <h3> The page is not found</h3>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
