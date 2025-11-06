import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Hero } from "./components/hero/Hero";



function App() {  

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Hero />
    },
    {
      path:"*",
      element: <h3> The page is not found</h3>
    }
  ])

  return (
    <>
    <RouterProvider router={router}       />
    </>
  )
}

export default App
