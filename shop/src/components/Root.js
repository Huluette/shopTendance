import { createBrowserRouter, Outlet, RouterProvider, NavLink, useRouteError } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Articles from "../pages/Articles";




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
          <h2>Catégories</h2>,
          <Outlet />],

        children: [
          {
            path: "/articles",
            element: [

              <ul className="nav-categories">
              <li>
                <NavLink className="nav-link" to="/">Accueil</NavLink></li>
              <li>
                <NavLink className="nav-link" to="/articles/:id">Femmes</NavLink></li>
              <li>
                <NavLink className="nav-link" to="/articles/:id">Hommes</NavLink></li>
              <li>
                <NavLink className="nav-link" to="/articles/:id">Ados</NavLink></li>
              <li>
                <NavLink className="nav-link" to="/articles/:id">Enfants</NavLink></li>
              <li>
                <NavLink className="nav-link" to="/articles/:id">Bébés</NavLink></li>
                </ul>,
                <Articles/>],
          },
          {
            path: "/articles/:id",
            element: [<NavLink className="nav-link" to="/articles">Catégories</NavLink>]
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