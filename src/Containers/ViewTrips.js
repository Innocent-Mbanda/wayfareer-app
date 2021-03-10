import react, { useState } from "react";
import SelectBox from "../Components/SelectBox";
import ButtonBox from "../Components/ButtonBox";

const tripData = [
  {
    id: "1",
    depature: "Nyagatare",
    destination: "Kigali",
    status: "alived",
  },

  {
    id: "2",
    depature: "Musanze",
    destination: "Rwamagana",
    status: "depatured",
  },
  {
    id: "3",
    depature: "Gicumbi",
    destination: "Ngoma",
    status: "depatured",
  },
  {
    id: "4",
    depature: "Cyangugu",
    destination: "Kayonza",
    status: "depatured",
  },
];

const ViewTrips = () => {
  const places = ["nyagatare", "Kigali", "Nyanza", "GAKENYE"];

  const [initialPlacesFrom, setInitialPlacesFrom] = useState(places);
  const [initialPlacesTo, setInitialPlacesTo] = useState(places);
  const [trip, setTrip] = useState(tripData);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [displayinfor, setDisplayinfor] = useState(false);
  const [location, setLocation] = useState({
    depature: null,
    destination: null,
  });
 

  const updateUserTrip = (tripid) => {
  
    const copyofArrays = trip.filter((item) => {
      return item.id != tripid;
    });
    const updatedTrip ={
      id:tripid,
      depature:from,
      destination:to,
      status:'departured'
    }
    copyofArrays.push(updatedTrip)
    
    setTrip(copyofArrays)
  };
  
  const handOpen = (depature, destination) => {
    setLocation({ ...location, depature: depature, destination: destination });
    setDisplayinfor(true);
  };
  const handleClose = () => {
    setDisplayinfor("");
  };
  const handleChangeFrom = (e) => {
    const filtered = places.filter((place) => {
      return place != e.target.value;
    });
    setInitialPlacesTo(filtered);
    setFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    const filtered = places.filter((place) => {
      return place != e.target.value;
    });
    setInitialPlacesFrom(filtered);
    setTo(e.target.value);
  };

  const updateTrips = () => {
    const newTrip = {
      id: trip.length + 1,
      depature: from,
      destination: to,
      status: "alived",
    };

    setTrip((para) => [...para, newTrip]);
  };

  const handleDeleteButton = (id) => {
    const returnedItemes = trip.filter((t) => {
      return t.id != id;
    });
    setTrip(returnedItemes);
  };
  return (
    <div>
      <div>
        <h2>From</h2>
        <SelectBox onChange={handleChangeFrom} name={initialPlacesFrom} />
      </div>

      <div>
        <h2>TO</h2>
        <SelectBox onChange={handleChangeTo} name={initialPlacesTo} />
      </div>
      <ButtonBox onSubmit={updateTrips} name="Add" />
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Depature</td>
            <td>Destination</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {trip.map((trip) => {
            return (
              <tr key={trip.id}>
                <td>{trip.id}</td>
                <td>
                  {trip.depature.charAt([0]).toUpperCase() +
                    trip.depature.slice(1)}
                </td>
                <td>
                  {trip.destination.charAt([0]).toUpperCase() +
                    trip.destination.slice(1)}
                </td>
                <td>
                  {trip.status.charAt([0]).toUpperCase() + trip.status.slice(1)}
                </td>
                <td>
                  <button onClick={() => handleDeleteButton(trip.id)}>
                    delete
                  </button>
                  <button
                    className=""
                    onClick={() => handOpen(trip.depature, trip.destination)}
                  >
                    view
                  </button>
                  {displayinfor && (
                    <div className="modal">
                      <div className="modal-content">
                        <span onClick={handleClose} className="close">
                          &times;
                        </span>
                        <p>
                          {" "}
                          from {location.depature} to {location.destination}
                        </p>
                      </div>
                    </div>
                  )}
                  <button onClick={() => updateUserTrip(trip.id)}>
                    update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTrips;
