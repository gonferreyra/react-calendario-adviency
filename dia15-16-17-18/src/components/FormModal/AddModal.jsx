import React from "react";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { GiftsContext } from "../Context/GiftsContext";
import Gifts from "../Gifts/random.js";

const AddModal = () => {
  const { addModalOpen, setAddModalOpen, addGift } = useContext(GiftsContext);

  const [gift, setGift, handleInputChange, reset] = useForm({
    id: "",
    name: "",
    url: "",
    quantity: 1,
    price: "",
    owner: "",
  });

  const { name, url, quantity, price, owner } = gift;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    if (name.length >= 3) {
      addGift({ ...gift, id: new Date().getTime() });
      setAddModalOpen(false);
      reset();
    }
  };

  const handleRandom = () => {
    const randomGift = Gifts[Math.floor(Math.random() * Gifts.length)];
    console.log(randomGift);
    setGift({
      name: randomGift.name,
      url: randomGift?.url || "",
      quantity: 1,
      price: randomGift.price,
    });
  };

  return (
    <div
      className="form__container"
      style={{
        opacity: addModalOpen ? "1" : "0",
        zIndex: addModalOpen ? "10" : "-1",
      }}
    >
      <form className="form form__add" onSubmit={handleSubmit}>
        <h2>Add your gift</h2>
        <div className="form__input__box">
          <label htmlFor="name">Gift</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            min={1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="url">Image URL</label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={handleInputChange}
          />
        </div>
        <div className="form__input__box">
          <label htmlFor="owner">For</label>
          <input
            type="text"
            name="owner"
            value={owner}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="form__btn__container">
          <button type="button" onClick={handleRandom}>
            Random
          </button>
          <button className="btn__add" type="submit">
            ADD
          </button>
          <button
            className="btn__cancel"
            type="button"
            onClick={() => setAddModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModal;
