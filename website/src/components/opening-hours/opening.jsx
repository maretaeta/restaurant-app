import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getOpening } from "../../api";
import "./opening.css";



const Opening = () => {
    const [dataOpening, setDataOpening] = useState([])
    useEffect(() => {
        getOpening().then((result) => {
            console.log(result);
          setDataOpening(result);
        });
      }, [dataOpening]);

    return (
        <marquee>
            <div className="wrap-opening">
            Jam buka:
            {dataOpening.map(open => (
                    <p>{open.day}, {open.opening_time.slice(0,5)} - {open.closing_time.slice(0,5)} WIB </p>
            ))}
            </div>
        </marquee>
    ) ;
};

export default Opening;
