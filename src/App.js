import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import About from "./pages/About/About";
import Classes from "./pages/Classes";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <About />},
      { path: '/classes', element: <Classes />},
      { path: '/portfolio', element: <Portfolio />},
      { path: '/services', element: <Services />},
      { path: '/shop', element: <Shop />},
      { path: '/blog', element: <Blog />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
