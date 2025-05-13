import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import ProtectedComponent from "./components/ProtectedComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/protected", element: <ProtectedComponent /> },
    ],
  },
]);
