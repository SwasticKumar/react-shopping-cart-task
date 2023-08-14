import React from "react";

function Footer() {
  return (
    <footer className="py-5 mt-5 bg-dark">
      <div className="container text-center">
      <h6 className="lead fw-normal text-center text-white-50 mb-0">
          GROCERY AND ORGANIC FOOD SHOP
        </h6>
       <br/>
        <p className="m-0 text-center text-white">
          Copyright ©{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
           <img className="text-center" src="/image/logoblack.png" alt="logo" style={{width:"100px"}}/>
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
