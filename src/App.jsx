import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Favorite from "./pages/favorites";
import Navbar from "./pages/navbar";
import { MovieProvider } from "./pages/movieContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <Navbar />
        <Favorite />
      </>
    ),
  },
]);

export default function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}
