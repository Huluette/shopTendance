import { createBrowserRouter, Outlet, RouterProvider, NavLink, useRouteError } from "react-router-dom";
import Single from "../pages/Single";
import Accueil from "../pages/Accueil";
import Articles from "../pages/Articles";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="nav"><Outlet/></div>,
    errorElement: <PageError/>,
    children: [

    {
          path: "/",
          element: <Accueil/>,
        },
      {
        path: "/articles",
        element: [
            <h2>Catégories</h2>,
            <NavLink className="nav-link" to="/"><Outlet/></NavLink>],
        children : [
            {
                path: "",
                element: [
                    <NavLink className="nav-link" to="/">Accueil</NavLink>,
                <NavLink className="nav-link" to="/articles/:id">ma catégorie</NavLink>,
                <Articles/>]
            },
          {
            path: "/articles/:id",
            element: [<Single/>,
            <NavLink className="nav-link" to="/articles">Articles</NavLink>]
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
    <RouterProvider router={router}>
    </RouterProvider>
  )
};

export default Root;