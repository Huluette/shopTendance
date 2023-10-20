import './App.css';
import Shop from './components/shop';
import { isEmpty } from './components/card';
import { useSelector } from 'react-redux';
import ArticleSupp from './components/articleSupp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const article = useSelector((state) => state.productReducer);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>Accueil</p>,
    },
    {
      path: "/articles",
      element: <p>Articles</p>,
    }
  ])


  return (
    <div className="App">
       <RouterProvider routeur={router}/>
      <header className="App-header">
        <h1>ShopTendance</h1>
      </header>
        <h2>Produits</h2>
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