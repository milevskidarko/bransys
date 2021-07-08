import React from "react";

const Cars = (props) => (
  <div>
    <ul>
      <li>
        <p>Model : {props.model}</p>
        <p>Type : {props.vehicleType}</p>
        <p>Number : {props.plateNumber}</p>
        <p>Name : {props.vehicleName}</p>
      </li>
    </ul>
  </div>
);

export default Cars;
