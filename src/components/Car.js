import React from "react";

const Car = (props) => {

  return (
    <div>
      <ul>
        <li>
          <div>
            <p>Model : {props.model}</p>
            <p>Type : {props.vehicleType}</p>
            <p>Number : {props.plateNumber}</p>
            <p>Name : {props.vehicleName}</p>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Car;
