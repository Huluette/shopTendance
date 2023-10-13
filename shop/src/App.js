import { useSelector } from 'react-redux';
import './App.css';
import Shop from './components/shop';


function App() {

  const article = useSelector((state) => state.productReducer);

  return (
    <div className="App">
      <header className="App-header">
      <h1>ShopTendance</h1>
      </header>
      <section className="App-section">
      <Shop/>
      </section>
      </div>
  );
}

export default App;
