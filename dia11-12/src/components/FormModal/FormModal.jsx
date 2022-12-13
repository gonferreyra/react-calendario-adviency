import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const FormModal = ({ modalIsOpen, setModalIsOpen, gifts, addGift }) => {
  const [gift, setGift, handleInputChange, reset] = useForm({
    id: "",
    name: "",
    url: "",
    owner: "",
    quantity: 1,
  });

  console.log(gift);

  const { name, url, owner, quantity } = gift;

  const checkRepeated = (name) => {
    if (gifts.find((gift) => gift.name === name)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3) {
      if (!checkRepeated(name)) {
        addGift({ ...gift, id: new Date().getTime() });
        reset();
        setModalIsOpen(false);
      }
    }
  };

  return (
    <form
      // modalIsOpen={modalIsOpen}
      className="form"
      onSubmit={handleSubmit}
      style={{
        opacity: modalIsOpen ? "100" : "0",
        zIndex: modalIsOpen ? "100" : "0",
      }}
    >
      <h2>Add a new Gift</h2>
      <input
        type="text"
        name="name"
        value={gift.name}
        placeholder="Name"
        onChange={handleInputChange}
      />
      <input
        type="url"
        name="url"
        value={url}
        placeholder="Image Url"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="quantity"
        value={quantity}
        placeholder="Quantity"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter your name"
        name="owner"
        value={owner}
        onChange={handleInputChange}
      />
      <button type="submit">ADD</button>
      <button
        className="btn__return"
        type="submit"
        onClick={() => setModalIsOpen(false)}
      >
        Return
      </button>
    </form>
  );
};

export default FormModal;
