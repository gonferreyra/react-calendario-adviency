import React from "react";
import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import Gift from "./Gift";

const Gifts = ({ gifts, addGift, deleteGift, deleteAll, updateGift }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="background">
        <div className="box box__container">
          <h1>Gift List</h1>
          <button
            className="box__button__modal"
            onClick={() => setModalIsOpen(true)}
          >
            ADD GIFT
          </button>
          <ul className="gifts">
            {gifts.length === 0 ? (
              <p className="gifts__p">
                No presents added. Please use the inputs to add presents to the
                list
              </p>
            ) : (
              gifts.map((gift) => (
                <Gift key={gift.id} gift={gift} deleteGift={deleteGift} updateGift={updateGift} />
              ))
            )}
          </ul>
          <button className="box__button" onClick={deleteAll}>
            Delete All
          </button>
        </div>
        <FormModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          gifts={gifts}
          addGift={addGift}
        />
      </div>
    </>
  );
};

export default Gifts;
