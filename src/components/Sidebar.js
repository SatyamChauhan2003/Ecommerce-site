import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from '@mui/material/Checkbox';

function valuetext(value) {
  return `${value}$`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () => {

  const [value, setValue] = React.useState([20, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h5>
        Product Type
        <span style={{ marginLeft: "100px" }}>
          <KeyboardArrowDownIcon />
        </span>
      </h5>
      <p>
        Bags <span style={{ marginLeft: "190px" }}>(112)</span>
      </p>
      <p>
        Booking <span style={{ marginLeft: "170px" }}>(32)</span>
      </p>
      <p style={{ color: "brown", textDecoration: "underLine" }}>
        Clothing{" "}
        <span style={{ marginLeft: "170px", color: "brown" }}>(42)</span>
      </p>
      <p>
        Men <span style={{ marginLeft: "200px" }}>(13)</span>
      </p>
      <p>
        Music <span style={{ marginLeft: "190px" }}>(54)</span>
      </p>
      <p>
        Posters <span style={{ marginLeft: "180px" }}>(93)</span>
      </p>
      <p>
        Shoes <span style={{ marginLeft: "190px" }}>(52)</span>
      </p>
      <p>
        Uncategorized <span style={{ marginLeft: "130px" }}>(14)</span>
      </p>
      <p>
        Women <span style={{ marginLeft: "180px" }}>(65)</span>
      </p>
      <h5 className="mt-4">
        Size
        <span style={{ marginLeft: "210px" }}>
          <KeyboardArrowDownIcon />
        </span>
      </h5>
      <div>
        <button type="button" className="btn btn-outline-dark">
          XS
        </button>
        <button type="button" className="btn btn-outline-dark">
          S
        </button>
        <button type="button" className="btn btn-dark">
          M
        </button>
        <button type="button" className="btn btn-outline-dark">
          L
        </button>
        <button type="button" className="btn btn-outline-dark">
          XL
        </button>
        <button type="button" className="btn btn-outline-dark">
          XXL
        </button>
      </div>
      <h5 className="mt-4">
        Price Range
        <span style={{ marginLeft: "145px" }}>
          <KeyboardArrowDownIcon />
        </span>
      </h5>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <p>Price : $ 800 - $ 1850</p>
      <button type="button" className="btn btn-dark">
        Apply
      </button>

      <h5 className="mt-4">
        Color
        <span style={{ marginLeft: "205px" }}>
          <KeyboardArrowDownIcon />
        </span>
      </h5>
      <button type="button" className="btn " style={{backgroundColor:"red", height:"20px", borderRadius:"30%"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"blue", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"green", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"yellow", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"brown", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"DodgerBlue", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"skyBlue", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button><br/>
      <button type="button" className="btn" style={{backgroundColor:"MediumSeaGreen", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"Gray", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"Violet", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>
      <button type="button" className="btn" style={{backgroundColor:"Tomato", height:"20px", borderRadius:"30%",marginLeft:"15px"}}></button>

      <h5 className="mt-4">
        Brands
        <span style={{ marginLeft: "205px" }}>
          <KeyboardArrowDownIcon />
        </span>
      </h5>
      <Checkbox
      {...label}
      defaultChecked
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px"}}>Nike</span><br/>
      <Checkbox
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px", textDecoration:"underline"}}>Louis Vuitton</span><br/>
      <Checkbox
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px"}}>Hermes</span><br/>
      <Checkbox
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px"}}>Gucci</span><br/>
      <Checkbox
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px"}}>Zalando</span><br/>
      <Checkbox
      {...label}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    /> <span style={{fontSize:"18px"}}>Adidas</span><br/>
    </div>
  );
};

export default Sidebar;
