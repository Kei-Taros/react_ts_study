import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "../pages/Todo";
const router = createBrowserRouter([{ path: "/todo", element: <Todo /> }]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
