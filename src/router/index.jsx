import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../features/Login";
import { Fav } from "../features/Fav";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>This route does not exist</div>,
  },
  {
    path: "/favs",
    element: <Fav />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
