import React from 'react'
import axios from "axios";
import "./Section.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import  {  useState } from "react";
import { DummyData } from './DummyData';

const Card = () => {

    const [data, setData] = useState(DummyData);

 
  return (
   <>
   {data &&
    data.map((curElem) => {
      const { id, price, title, image } = curElem;

      return (
        <>
          <div className="main-card-cointainer">
            <div className="card-container" key={id}>
              <div className="card " style={{ width: "250px" }}>
                <div className="card-body">
                  <img
                    src={image}
                    alt="images"
                    className="card-media"
                    style={{ width: "150px" }}
                  />
                  <br />
                  <span className="card-number card-circle subtle">
                    {id}
                  </span>
                  <span className="card-author subtle"> {title}</span>

                  <div className="card-read" style={{ color: "brown" }}>
                    <h5>₹{price}</h5>
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4}
                      precision={1}
                      readOnly
                    />
                    <span>(1,234 reviews)</span>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    })}
   </>
  )
}

export default Card