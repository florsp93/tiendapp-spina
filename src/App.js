import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () =>
  <div className="App">
    <NavBar />
    <h2 className='appH2'>Las ofertas de la semana</h2>
    <ItemListContainer />
  </div>

export default App;
