import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { GiftsContext } from "../Context/GiftsContext";

const EditModal = () => {
  const { isEditing, setIsEditing, currentGift, updateGift } =
    useContext(GiftsContext);

  // console.log(currentGift);

  const { id } = currentGift;
  const [name, setName] = useState(currentGift.name);
  const [url, setUrl] = useState(currentGift.url);
  const [quantity, setQuantity] = useState(currentGift.quantity);
  const [price, setPrice] = useState(currentGift.price);
  const [owner, setOwner] = useState(currentGift.owner);

  const giftUpdated = { id, name, url, quantity, price, owner };

  const handleEditGift = (e) => {
    e.preventDefault();
    updateGift(id, giftUpdated);
    setIsEditing(false);
  };

  return (
    <div
      className="form__container"
      style={{
        opacity: isEditing ? "1" : "0",
        zIndex: isEditing ? "10" : "-1",
      }}
    >
      <form className="form form__add" onSubmit={handleEditGift}>
        <h2>Edit Gift</h2>
        <div className="form__input__box">
          <label htmlFor="name">Gift</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            name="image"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="owner">For</label>
          <input
            type="text"
            name="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="form__btn__container">
          <button className="btn__add" type="submit">
            Confirm changes
          </button>
          <button
            className="btn__cancel"
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
