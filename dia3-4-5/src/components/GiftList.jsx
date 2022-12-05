import React, { useState } from "react";
import {
  Background,
  GiftListContainer,
  GiftTitle,
  InputBoxContainer,
  Input,
  Button,
  GiftUl,
  DeleteBtn,
} from "./GiftListStyle";

import Image from "../assets/pexels-photo-1303098.jpeg";
import Gift from "./Gift";

const GiftList = () => {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Ps5",
    },
    {
      id: 2,
      name: "Apple Watch",
    },
  ]);

  const [gift, setGift] = useState({
    id: "",
    name: "",
  });

  const addGift = (gift) => {
    setGifts([gift, ...gifts]);
  };

  const deleteGift = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id));
  };

  const deleteAll = () => {
    setGifts([]);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log("test");
    if (gift.name.trim().length >= 3) {
      addGift({ ...gift, id: new Date().getTime() });
      setGift({ ...gift, name: "" });
    }
  };

  const handleInputChange = (e) => {
    setGift({ ...gift, name: e.target.value });
  };

  return (
    <>
      <Background
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <GiftListContainer>
          <GiftTitle>Gifts</GiftTitle>
          <InputBoxContainer onSubmit={handlerSubmit}>
            <Input
              type="text"
              name="add"
              value={gift.name}
              onChange={handleInputChange}
            />
            <Button type="submit">ADD</Button>
          </InputBoxContainer>
          <GiftUl>
            {gifts.map((gift) => (
              <Gift key={gift.id} gift={gift} deleteGift={deleteGift} />
            ))}
          </GiftUl>
          <DeleteBtn onClick={deleteAll}>Delete all</DeleteBtn>
        </GiftListContainer>
      </Background>
    </>
  );
};

export default GiftList;
