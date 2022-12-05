import React, { useState } from "react";
import { HomeContainer, HomeH1, GiftContainer, GiftUl } from "./GiftListStyle";
import Gifts from "./Gifts/Gifts";
import Image from "../../img/pexels-photo-1303098.jpeg";

const GiftList = () => {
  const [gifts, setGifts] = useState([
    {
      id: 1,
      name: "Apple Watch",
    },
    {
      id: 2,
      name: "PS5",
    },
    {
      id: 3,
      name: "Argentina Football Shirt",
    },
  ]);
  console.log(gifts);

  return (
    <HomeContainer
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HomeH1>Christmas Gifts</HomeH1>
      <GiftContainer>
        <GiftUl>
          {gifts.map((gift) => (
            <Gifts key={gift.id} gift={gift} />
          ))}
        </GiftUl>
      </GiftContainer>
    </HomeContainer>
  );
};

export default GiftList;
