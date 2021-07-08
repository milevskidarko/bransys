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
    <div className="bgImage" style={{ backgroundImage: "url(car.jpg)" }} >
      {modal && modal === "newvehicle" ?
        <ShowCars vehicles={cars} setModal={setModal} setVehicles={setCars} />
        : null}
      <div id="app">
        <div className="inner">

          <input
            id
            type="text"
            placeholder="Filter by model"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={e => setFilter(e.target.value)}>
            <option value="model">Filter by Modal</option>
            <option value="vehicleType">Filter by Type</option>
            <option value="plateNumber">Filter by Number</option>
            <option value="vehicleName">Filter by Name</option>
          </select>
        </div>
        {filteredCars.map((car, idx) => (
          <div key={idx} className='firstDiv'>
            <Car  {...car} vehicles={vehicles} />
            <div>
              <button className='del' onClick={(e) => deleteItem(e)}>Delete</button>
            </div>
          </div>
        ))}
        <button onClick={() => setModal("newvehicle")}>Submit</button></div>
    </div>
  );
}

export default App;
