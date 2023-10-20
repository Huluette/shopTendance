import './App.css';
import Shop from './components/shop';
import { isEmpty } from './components/card';
import { useSelector } from 'react-redux';
import ArticleSupp from './components/articleSupp';
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Single from './pages/Single';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <h2>Accueil</h2>
      <nav>
        <NavLink to="/articles">Articles</NavLink>
      </nav>
    </div>
  },
  {
    path: "/articles",
    element: <div>
    <h2>Articles</h2>
    <nav>
      <NavLink to="/">Accueil</NavLink>
    </nav>
  </div>
  },
  {
    path: "/articles/:id",
    element: <Single/>
  }
]);

function App() {
  const article = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ShopTendance</h1>
      </header>
      <RouterProvider router={router} className="routerprovider" />
      <section className="App-section">
        {!isEmpty(article) && article.map((product, i) => (
          <Shop key={i} product={product} />
        ))}
      </section>
      <section className='App-articleSupp'>
        <ArticleSupp />
      </section>
    </div>
  );
}

export default App;