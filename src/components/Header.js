import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span style={{ marginLeft: "250px" }}>
              English <KeyboardArrowDownIcon />
            </span>
            <span style={{ marginLeft: "30px" }}>
              USD <KeyboardArrowDownIcon />
            </span>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <span style={{ marginLeft: "90px" }}>Home</span>
            <span style={{ marginLeft: "40px", color: "brown" }}>
              School Uniforms
            </span>
            <span style={{ marginLeft: "40px" }}>Corporate</span>
            <span style={{ marginLeft: "40px" }}>Sports</span>
            <span style={{ marginLeft: "40px" }}>Blogs</span>
          </div>
          <div className="col-md-2">
            <SearchIcon style={{ marginLeft: "40px" }} />
            <FavoriteBorderIcon style={{ marginLeft: "20px" }} />
            <ShoppingCartIcon style={{ marginLeft: "20px" }} />
            <PersonOutlineIcon style={{ marginLeft: "20px" }} />
          </div>
        </div>

        <div className="row">
          <div className="col mt-4">
            <p
              style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
            >
              Free Delivery on orders above Rs. 1000, DON'T MISS{" "}
              <span style={{ marginLeft: "25px", color: "brown" }}>
                SHOP NOW
              </span>
              <ArrowForwardIcon />
            </p>
          </div>
        </div>

        <div className="row" style={{ backgroundColor: "AliceBlue" }}>
          <div className="col">
            <h3 className="text-center mt-3">Corporate</h3>
            <p className="text-center mt-3">Homepage / Shop</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
