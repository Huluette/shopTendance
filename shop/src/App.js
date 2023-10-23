import './App.css';
import Shop from './components/shop';
import { isEmpty } from './components/card';
import { useSelector } from 'react-redux';
import ArticleSupp from './components/articleSupp';
import Root from './components/Root';

function App() {
  const article = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ShopTendance</h1>
      </header>
      <Root/>
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