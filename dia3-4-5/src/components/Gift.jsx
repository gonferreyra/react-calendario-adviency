import React from "react";

const Gift = ({ gift, deleteGift }) => {
  const handleDelete = () => {
    console.log("click");
    deleteGift(gift.id);
  };
  return (
    <li
      style={{
        margin: "1rem 0",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontWeight: "600",
        }}
      >
        {gift.name}
      </p>
      <button
        onClick={handleDelete}
        style={{
          background: "#d10e0e",
          border: "none",
          width: "15px",
          borderRadius: "50%",
          color: "white",
        }}
      >
        X
      </button>
    </li>
  );
};

export default Gift;
