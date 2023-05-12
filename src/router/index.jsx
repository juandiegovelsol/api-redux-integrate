import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../features/Login";
import { Fav } from "../features/Fav";
import { Register } from "../features/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <div>This route does not exist</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/favs",
    element: <Fav />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
