import React from "react";
import { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GiftsContext } from "../../Context/GiftsContext";

const Gift = ({ gift }) => {
  const { setIsEditing, setCurrentGift, deleteGift } = useContext(GiftsContext);

  // console.log(gift);
  const handleDelete = () => {
    deleteGift(gift.id);
  };

  return (
    <>
      <table className="table__gifts">
        <tbody>
          <tr>
            <td>
              <img
                src={
                  gift.url === ""
                    ? "https://www.niemanlab.org/images/Viktoriaa-Liutova-e1624366176190.png"
                    : gift.url
                }
                alt="img"
              />
            </td>
            <td className="gift__content">
              <div>
                <p>
                  {gift.name} - ({gift.quantity}) - ${gift.price}
                </p>
                <p>{gift.owner}</p>
              </div>
            </td>
            <td>
              <div className="gift__buttons">
                <button
                  className="gift__btn--edit"
                  onClick={() => {
                    setIsEditing(true);
                    setCurrentGift({ ...gift });
                  }}
                >
                  <BiEdit />
                </button>
                <button className="gift__btn--delete" onClick={handleDelete}>
                  <RiDeleteBin2Line />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Gift;
