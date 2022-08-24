import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const OximetroRoute = () => {
  return (
    <>
      <div className="container-sm">
        <div className="row">
          <div className="col-md-12 text-center">
            <BsSuitHeartFill size={"100px"}  />
            <br></br>
            <br></br>
            <p className="h1">Nivel de oxigenação: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OximetroRoute;
