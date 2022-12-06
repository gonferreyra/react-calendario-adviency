import React from "react";

const Gift = ({ gift, deleteGift }) => {
  const handleDelete = () => {
    deleteGift(gift.id);
  };

  return (
    <li>
      <p>{gift.name}</p>
      <button className="btnSingleDelete" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

export default Gift;
