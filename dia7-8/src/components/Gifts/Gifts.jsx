import React, { useState } from "react";
import Gift from "./Gift/Gift";

const Gifts = ({ gifts, setGifts, deleteGift, deleteAll }) => {
  const [gift, setGift] = useState({
    id: "",
    name: "",
    quantity: 1,
  });
  // console.log(gift);

  const handlerNameChange = (e) => {
    setGift({ ...gift, name: e.target.value });
  };

  const handlerQuantityChange = (e) => {
    setGift({ ...gift, quantity: e.target.value });
  };

  const addGift = (gift) => {
    setGifts([...gifts, gift]);
  };

  const checkRepeated = (name) => {
    if (gifts.find((gift) => gift.name === name)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dia 7 - no deja agregar regalos repetidos
    if (gift.name.trim().length >= 3) {
      if (!checkRepeated(gift.name)) {
        addGift({ ...gift, id: new Date().getTime() });
        setGift({ ...gift, name: "" });
      } else {
        alert("Ya existe ese regalo");
      }
    }
  };

  return (
    <div className="background">
      <div className="box box__container">
        <h1 className="box__title">Gift List</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input__text"
            type="text"
            name="gift"
            value={gift.name}
            onChange={handlerNameChange}
          />
          <input
            className="form__input__number"
            type="number"
            name="quantity"
            value={gift.quantity}
            onChange={handlerQuantityChange}
          />
          <button className="form__button" type="submit">
            ADD
          </button>
        </form>
        <div className="error"></div>
        <div className="gifts">
          <ul>
            {gifts.length === 0 ? (
              <p className="gifts__p">
                No Presents added. Please use the input to add presents
              </p>
            ) : (
              gifts.map((gift) => {
                return (
                  <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />
                );
              })
            )}
          </ul>
        </div>
        <button className="box__button" onClick={deleteAll}>
          Delete all
        </button>
      </div>
    </div>
  );
};

export default Gifts;
