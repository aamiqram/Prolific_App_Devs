import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import MyInstallation from "../Pages/MyInstallation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "apps", element: <AllApps /> },
      { path: "/apps/:id", element: <AppDetails /> },
      { path: "installation", element: <MyInstallation /> },
    ],
  },
]);

export default router;
