import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getOpening } from "../../api";
import "./opening.css";

const Opening = () => {
  const [dataOpening, setDataOpening] = useState([]);
  useEffect(() => {
    getOpening().then((result) => {
      console.log(result);
      setDataOpening(result);
    });
  }, []);

  return (
    <div className="wrap-opening">
      Jam buka:
      {dataOpening.map((open) => (
        <p key={open.id}>
          {open.day} ({open.opening_time.slice(0, 5)} -{" "}
          {open.closing_time.slice(0, 5)} WIB){" "}
        </p>
      ))}
    </div>
  );
};

export default Opening;
