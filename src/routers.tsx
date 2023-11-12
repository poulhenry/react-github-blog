import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { App } from "./App";
import Post from "./pages/Post";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'post/:idPost',
        element: <Post />
      }
    ]
  }
])