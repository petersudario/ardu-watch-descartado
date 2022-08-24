import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";


const GpsRoute = () => {
  return (
    <>
      <div className="container-sm">
        <div className="row">
          <div className="col-md-12 text-center">
            <BsGeoAlt size={"100px"}  />
            <br></br>
            <br></br>
            <p className="h1">Coordenada: </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GpsRoute;
