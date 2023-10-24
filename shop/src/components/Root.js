import { createBrowserRouter, Outlet, RouterProvider, NavLink, useRouteError } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Articles from "../pages/Articles";
import Single from "../pages/Single";
import NavBar from "../pages/NavBar";




const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="nav"><Outlet /></div>,
    errorElement: <PageError />,
    children: [

      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/articles",
        element: [
          <h2>Articles</h2>,
          <Outlet />],

        children: [
          {
            path: "/articles",
            element: [
              <NavBar/>,
              <Articles />],
          },
          {
            path: "/articles/:categories",
            element: [
              <NavLink className="nav-link" to="/articles">Articles</NavLink>,
              <Single />]
          }
        ]
      }

    ]
  }
]);

function PageError() {

  const error = useRouteError();
  return (
    <div className="error-container">
      <div className="error" alt="erreur"></div>
      <h3>Une erreur est survenue</h3>
      <p> {error?.error?.toString() ?? error?.toString()} </p>
    </div>
  );
}

function Root() {


  return (
    <div>

      <RouterProvider router={router}>
      </RouterProvider>


    </div>
  )
};

export default Root;