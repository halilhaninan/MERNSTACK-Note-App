import React, { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";

function Not({ not }) {
  console.log(not);
  const [oncelikText, setOncelikText] = useState("");

  useEffect(() => {
    switch (not.oncelik) {
      case 1:
        setOncelikText("Az oncelikli");
        break;
      case 2:
        setOncelikText("oncelikli");
        break;
      case 3:
        setOncelikText("cok oncelikli");
        break;

      default:
        break;
    }
    console.log(oncelikText);
  });

  return (
    <div className="not">
      <div>{new Date(not.createdAt).toLocaleString("tr-TR")}</div>
      <h2>{not.baslik}</h2>
      <p>{not.aciklama}</p>
      <p>{oncelikText}</p>
    </div>
  );
}

export default Not;
