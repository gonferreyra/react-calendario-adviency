import React from "react";

const Gift = ({ gift, deleteGift }) => {
  const handlerDelete = () => {
    deleteGift(gift.id);
  };
  return (
    <li>
      <img
        src={
          gift.url === ""
            ? "https://media.istockphoto.com/id/1128262881/es/vector/caja-de-regalo-decorativo-negro-con-lazo-dorado-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=UmuFQ7zLT-ujabvc3tHoqwIzU7twVh5o2iEoXsf8Fms="
            : gift.url
        }
        alt="gift"
      />
      <p>
        {gift.name} - {gift.quantity}
      </p>
      <button onClick={handlerDelete}>X</button>
    </li>
  );
};

export default Gift;
