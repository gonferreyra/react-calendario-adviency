import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const EditFormModal = ({ gift, editModal, setEditModal, updateGift }) => {
 
  const { id } = gift;

  const [name, setName] = useState(gift.name);
  const [url, setUrl] = useState(gift.url);
  const [quantity, setQuantity] = useState(gift.quantity);
  const [owner, setOwner] = useState(gift.owner);

  const giftUpdated = {id, name, url, quantity, owner};

  // const handleInputChange = () => {
    
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    updateGift(id, giftUpdated)
    
  };

  return (
    <form
      // modalIsOpen={modalIsOpen}
      className="form__edit"
      onSubmit={handleSubmit}
      style={{
        left: editModal ? "calc(50% - 210px)" : "-100%"
      }}
    >
      <h2>Edit Gift</h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        name="url"
        value={url}
        placeholder="Image Url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="number"
        name="quantity"
        value={quantity}
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        name="owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <button type="submit" onClick={() => setEditModal(false)}>EDIT</button>
      <button
        className="btn__return"
        // type="submit"
        onClick={() => setEditModal(false)}
      >
        Return
      </button>
    </form>
  );
};

export default EditFormModal;
