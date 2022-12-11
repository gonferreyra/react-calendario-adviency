import React from "react";
import { useState } from "react";
import Gift from "../Gift/Gift";

const Gifts = ({ gifts, setGifts, deleteGift, deleteAll }) => {
  const [gift, setGift] = useState({
    id: "",
    name: "",
    quantity: 1,
    url: "",
  });
  // console.log(gift);

  const handlerInputName = (e) => {
    setGift({ ...gift, name: e.target.value });
  };

  const handlerInputQuantity = (e) => {
    setGift({ ...gift, quantity: e.target.value });
  };

  const handlerInputUrl = (e) => {
    setGift({ ...gift, url: e.target.value });
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

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (gift.name.trim().length >= 3) {
      if (!checkRepeated(gift.name)) {
        addGift({ ...gift, id: new Date().getTime() });
        setGift({ ...gift, url: "", name: "" });
      } else {
        alert("El regalo ya existe");
      }
    }
  };

  return (
    <div className="background">
      <div className="box box__container">
        <h1>Gift List</h1>
        <form className="form" onSubmit={handlerSubmit}>
          <input
            className="form__input__text"
            type="text"
            name="name"
            value={gift.name}
            onChange={handlerInputName}
          />
          <input
            className="form__input__url"
            type="url"
            placeholder="image Url"
            value={gift.url}
            onChange={handlerInputUrl}
          />
          <input
            className="form__input__number"
            type="number"
            name="quantity"
            value={gift.quantity}
            min={1}
            onChange={handlerInputQuantity}
          />
          <button className="form__button" type="submit">
            ADD
          </button>
        </form>
        <ul className="gifts">
          {gifts.length === 0 ? (
            <p className="gifts__p">
              The list is empty. Please use the input to add presents
            </p>
          ) : (
            gifts.map((gift) => (
              <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />
            ))
          )}
          {/* {gifts.map((gift) => {
            return <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />;
          })} */}
        </ul>
        <button className="box__button" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Gifts;
