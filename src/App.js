import { useState } from 'react';

import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';

let cartCounter = 0;

const App = () => {
  const [stock, setStock] = useState(10);

  return (
    < div className="App" >
      <NavBar />
      <h2 className='appH2'>Las ofertas de la semana</h2>
      <ItemListContainer />
      <ItemCount stock={stock} setStock={setStock} cartCounter={cartCounter} />
    </div >
  );
};

export default App;
