import React from "react";
import { useState } from "react";
import Gift from "./Gift";

const Gifts = () => {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Apple Watch",
    },
    {
      id: 2,
      name: "PS5",
    },
  ]);

  const [gift, setGift] = useState({
    id: "",
    name: "",
  });

  const addGift = (gift) => {
    setGifts([gift, ...gifts]);
  };

  const handleInputChange = (e) => {
    setGift({ ...gift, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gift.name.trim().length >= 3) {
      addGift({ ...gift, id: new Date().getTime() });
      setGift({ ...gift, name: "" });
    }
  };

  const deleteGift = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const deleteGifts = () => {
    setGifts("");
  };

  return (
    <div className="background">
      <div className="giftBoxContainer">
        <h1>Gifts</h1>
        <form className="giftForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            value={gift.name}
            onChange={handleInputChange}
          />
          <button className="btnAdd" type="submit">
            ADD
          </button>
        </form>
        <div className="gifts">
          {gifts.length === 0 ? (
            <p className="gifts__p">
              No Presents added. Please use the input to add presents
            </p>
          ) : (
            gifts.map((gift) => {
              return <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />;
            })
          )}
          {/* {gifts.map((gift) => {
            return <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />;
          })} */}
        </div>
        <button className="btnDelete" onClick={deleteGifts}>
          Delete all
        </button>
      </div>
    </div>
  );
};

export default Gifts;
