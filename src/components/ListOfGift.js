import React, { useState, useEffect } from "react";
import Gift from "./Gift";
import getGift from "../services/getGift";

export default function ListOfGift({ params }) {
  const { keyword } = params;
  const [gift, setGift] = useState([]);

  useEffect(() => {
    getGift({ keyword }).then((gifts) => setGift(gifts));
  }, [keyword]);

  return (
    <div>
      {gift.map(({ id, title, url }) => (
        <Gift key={id} id={id} title={title} url={url} />
      ))}
      ;
    </div>
  );
}
