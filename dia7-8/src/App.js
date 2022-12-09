
import { useState } from 'react';
import '../src/style/index.scss'
import Gifts from './components/Gifts/Gifts';

function App() {

  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Apple Watch",
      quantity: 1
    },
    {
      id: 2,
      name: "PS5",
      quantity: 1
    }
  ]);

  // console.log(gifts)

  const deleteGift = (id) => {
    setGifts(gifts.filter(gift => gift.id !== id))
  };

  const deleteAll = () => {
    setGifts([]);
  };

  return (
    <Gifts gifts={gifts} setGifts={setGifts} deleteGift={deleteGift} deleteAll={deleteAll} />
  );
}

export default App;
