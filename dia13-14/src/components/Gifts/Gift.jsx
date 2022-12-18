import React, {useState} from "react";
import EditFormModal from "../FormModal/EditFormModal";

const Gift = ({ gift, deleteGift, updateGift }) => {

  const [editModal, setEditModal] = useState(false)

  const handleDelete = () => {
    deleteGift(gift.id);
  };

  return (
    <>
      <li>
      <img
        src={
          gift.url === ""
            ? "https://images.emojiterra.com/google/noto-emoji/v2.038/share/1f381.jpg"
            : gift.url
        }
        alt="gift-img"
      />
      <div
        style={{
          width: "30%",
        }}
      >
        <p className="p__name">{gift.name}</p>
        <p className="p__qty">qty: {gift.quantity}</p>
        <p className="p__owner">{gift.owner}</p>
      </div>
      <button className="edit__btn" onClick={() => setEditModal(true)}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </li>
    <EditFormModal gift={gift} editModal={editModal} setEditModal={setEditModal} updateGift={updateGift} />
    </>
    
  );
};

export default Gift;
