import { useEffect, useState } from 'react';
import './App.css';
import Gifts from './components/Gifts/Gifts';
import './style/index.scss'

const initialState = JSON.parse(localStorage.getItem('savedGifts')) || [];

function App() {

  const [gifts, setGifts] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('savedGifts', JSON.stringify(gifts))
  }, [gifts])

  const deleteGift = (id) => {
    setGifts(gifts.filter(gift => gift.id !== id))
  };

  const deleteAll = () => {
    setGifts([])
  };

  return (
    <>
      <Gifts gifts={gifts} setGifts={setGifts} deleteGift={deleteGift} deleteAll={deleteAll} />
    </>
  );
}

export default App;
