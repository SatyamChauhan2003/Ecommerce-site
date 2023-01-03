import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "./Card";


const Section = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  
  return (
    <>
      <Checkbox {...label} sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
      <span>Show only products on sale</span>
      <span style={{ marginLeft: "150px" }}>
        Sort by{" "}
        <span
          style={{
            marginLeft: "10px",
            border: "1px solid gray",
            paddingLeft: "5px",
            borderRadius: "5px",
          }}
        >
          Best Selling
          <KeyboardArrowDownIcon />
        </span>
      </span>
      <div className="content">
        <Card />
       
      </div>
    </>
  );
};

export default Section;
