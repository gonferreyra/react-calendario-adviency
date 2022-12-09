import React from "react";

const Gift = ({ gift, deleteGift }) => {
  const handleDelete = () => {
    deleteGift(gift.id);
  };

  return (
    <li>
      <p>
        {gift.name} - ({gift.quantity})
      </p>
      <button className="btn__delete" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

export default Gift;
