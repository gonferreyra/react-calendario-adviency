import { useContext } from "react";
import { GiftsContext } from "../components/Context/GiftsContext";
import AddModal from "../components/FormModal/AddModal";
import EditModal from "../components/FormModal/EditModal";
import Gifts from "../components/Gifts/Gifts";

const Home = () => {
  const { addModalOpen, isEditing } = useContext(GiftsContext);

  return (
    <div className="home">
      <Gifts />
      {addModalOpen && <AddModal />}
      {isEditing && <EditModal />}
    </div>
  );
};

export default Home;
