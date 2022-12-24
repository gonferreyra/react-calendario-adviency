
import { useEffect, useState } from "react";
import { GiftsContext } from "./components/Context/GiftsContext";
// import Gifts from "./components/Gifts/Gifts";
import Home from "./pages/Home";
// import { fetchApi } from "./services/fetchApi";
// import axios from "axios";
// import data from "./API/api";
// import Api from "./API/api.json";

// const initialState = JSON.parse(localStorage.getItem('savedGifts')) || [];

function App() {

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentGift, setCurrentGift] = useState('')
  const [loading, setLoading] = useState(false);

  const [gifts, setGifts] = useState([])

  const getData = async () => {
    setLoading(true)
    const response = await fetch('api.json', {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    )
    if (response.ok) {
      setLoading(false)
      return response.json();
    } else {
      throw new Error()
    }
  }


  useEffect(() => {
    getData().then(gifts => {
      const previousGifts = localStorage.getItem("savedGifts");
      if (previousGifts) {
        setGifts(JSON.parse(previousGifts))
      } else {
        setGifts(gifts);
        localStorage.setItem("savedGifts", JSON.stringify(gifts))
      }
    })
  }, [])

  const handleIsEditing = () => {
    setIsEditing(!isEditing)
  };

  const addGift = (gift) => {
    // setGifts([...gifts, gift])
    const newGifts = [...gifts, gift]
    localStorage.setItem("savedGifts", JSON.stringify(newGifts))
    setGifts(newGifts)
  };

  const deleteGift = (id) => {
    const newGifts = gifts.filter(gift => gift.id !== id)
    localStorage.setItem("savedGifts", JSON.stringify(newGifts))
    setGifts(newGifts)
  };

  const deleteAll = () => {
    setGifts([])
  };

  const updateGift = (id, updatedGift) => {
    const newGifts = gifts.map(gift => gift.id === id ? updatedGift : gift)
    localStorage.setItem("savedGifts", JSON.stringify(newGifts))
    setGifts(newGifts)
  };



  return (
    <GiftsContext.Provider value={{ gifts, setGifts, addModalOpen, setAddModalOpen, isEditing, setIsEditing, handleIsEditing, addGift, deleteGift, deleteAll, currentGift, setCurrentGift, updateGift, loading, setLoading }}>
      <Home />
    </GiftsContext.Provider>
  );
}

export default App;
