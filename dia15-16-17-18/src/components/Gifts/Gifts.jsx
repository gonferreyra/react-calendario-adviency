import React, { useContext, useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { GiftsContext } from "../Context/GiftsContext";
// import AddModal from "../FormModal/AddModal";
import Gift from "./Gift/Gift";

const Gifts = () => {
  const {
    gifts,
    addModalOpen,
    setAddModalOpen,
    isEditing,
    deleteAll,
    loading,
  } = useContext(GiftsContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    gifts.forEach((gift) => {
      total += gift.quantity * gift.price;
    });
    setTotalPrice(total);
  }, [gifts]);

  return (
    <>
      <div className="background">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="box box__container"
            style={{
              opacity: addModalOpen || isEditing ? "0" : "1",
              zIndex: addModalOpen || isEditing ? "-1" : "1",
            }}
          >
            <h1>Gifts List</h1>
            <button
              className="box__add__btn"
              onClick={() => setAddModalOpen(true)}
            >
              ADD GIFT
            </button>
            <div className="gift__table__container">
              {gifts.length === 0 ? (
                <p className="gifts__p">
                  The Gift List is empty. Please use the inputs to add presents
                  to the list
                </p>
              ) : (
                gifts.map((gift) => <Gift key={gift.id} gift={gift} />)
              )}
            </div>
            <div className="gifts__total">
              <p>Total: ${totalPrice}</p>
            </div>
            <button className="box__delete__btn" onClick={deleteAll}>
              DELETE ALL
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gifts;
