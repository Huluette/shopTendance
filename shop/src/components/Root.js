import { createBrowserRouter, Outlet, RouterProvider, NavLink } from "react-router-dom";
// import Single from './pages/Single';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Outlet/></div>,
    errorElement: <PageError/>,
    children: [

    {
          path: "/",
          element: [<h2>Accueil</h2>,
          <NavLink to="/articles">Articles</NavLink>],
        },
      {
        path: "/articles",
        element: [<h2>Articles</h2>,
        <NavLink to="/">Accueil</NavLink>],
      }

    ]
}
]);

function PageError() {
  return (
    <div className="error-container">
        <div className="error" alt="erreur"></div>
      <h3>Une erreur est survenue</h3>
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