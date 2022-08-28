import { useState, useEffect } from 'react';

import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';

let cartCounter = 0;

let itemsList = [
  {
    id: '1',
    title: 'Cafetera',
    description: 'Esta marca se destaca por hacer tu café exquisito.',
    price: 3500,
    pictureUrl: 'cafetera.jpg'
  },
  {
    id: '2',
    title: 'Licuadora',
    description: 'Capacidad de 1.5 litros. Potencia de 350 W.',
    price: 2400,
    pictureUrl: 'licuadora.jpg'
  },
  {
    id: '3',
    title: 'Smart TV',
    description: 'Tecnología HDR para una calidad de imagen mejorada.',
    price: 13000,
    pictureUrl: 'smart-tv.jpg'
  }

];

const App = () => {
  const [stock, setStock] = useState(10);
  const [itemsToShow, setItemsToShow] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => resolve(itemsList), 2000);
    })
      .then(response => {
        response.map((newItemToShow) => {
          setItemsToShow(itemsToShow => [...itemsToShow, newItemToShow]);
        }
        );
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className='appBody'>
        <h2 className='appH2'>Las ofertas de la semana</h2>
        <ItemListContainer itemsToShow={itemsToShow} />
        <ItemCount stock={stock} setStock={setStock} cartCounter={cartCounter} />
      </div>
    </div>
  );
};

export default App;
