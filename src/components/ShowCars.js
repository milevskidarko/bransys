import React from "react";

const ShowCars = ({ setVehicles, vehicles, setModal, }) => {

    const setVehiclеHandler = (e) => {
        e.preventDefault();
        let fd = new FormData(e.target);
        let v = {
            vehicleName: fd.get('name'),
            vehicleType: fd.get('type'),
            plateNumber: fd.get('number'),
            model: fd.get('model')
        };
        setVehicles([
            ...vehicles,
            v
        ]);
        setModal("");
    };

    return (
        <div className="modal-wrapper">
            <div className="backdrop" onClick={() => setModal("")}></div>
            <div className='secondPage modal'>
                <button className='back' onClick={() => setModal("")}>Back</button>
                <form onSubmit={setVehiclеHandler}>
                    <input
                        type="text"
                        name="model"
                        placeholder="Model"
                    /><br />
                    <input
                        type="text"
                        name="type"
                        placeholder="Type"
                    /><br />
                    <input
                        type="text"
                        name="number"
                        placeholder="number"
                    /><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                    /><br />
                    <ul>
                        <li className='secondLiPage'>
                            <div className='secondInner'>
                                <button type="submit">Add vehicle</button>
                            </div>
                        </li>

                    </ul>
                </form>
            </div>
        </div>
    )
}

export default ShowCars;








