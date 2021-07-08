import React, { useState, useEffect } from "react";
import "./App.css";
import Car from "./components/Car";
import vehicles from "./vehicles.json";
import ShowCars from "./components/ShowCars";

function App() {
  const [cars, setCars] = useState(vehicles);
  const [search, setSearch] = useState("");
  const [filteredCars, setfilteredCars] = useState([]);
  const [modal, setModal] = useState("");
  const [filter, setFilter] = useState("model");
  console.log(cars)

  const deleteItem = (e) => {
    e.preventDefault()
    const newItems = [...cars]
    newItems.splice(e, 1)
    setCars(newItems)
  };

  useEffect(() => {
    console.log(filter, "filter");
    setfilteredCars(
      cars.filter((car) =>
        car[filter].toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, cars, filter]);

  return (
    <div className="bgImage">
      {modal && modal === "newvehicle" ?
        <ShowCars vehicles={cars} setModal={setModal} setVehicles={setCars} />
        : null}
      <div id="app">
        <div className="inner">
          <div>
            <input
              type="text"
              placeholder="Filter by model"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <select onChange={e => setFilter(e.target.value)}>
              <option value="model">Filter by Modal</option>
              <option value="vehicleType">Filter by Type</option>
              <option value="plateNumber">Filter by Number</option>
              <option value="vehicleName">Filter by Name</option>
            </select>
          </div>
        </div>
        <div>
          {filteredCars.map((car, idx) => (
            <div key={idx} className='carWrapper'>
              <Car  {...car} />
              <div>
                <button className='del' onClick={(e) => deleteItem(e)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setModal("newvehicle")}>Add Car</button></div>
    </div>
  );
}

export default App;
