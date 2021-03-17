import { react, useState } from "react";
import SelectBox from "../Components/SelectBox";
import image from "../assets/images/Rectangle3.jpg";
import ButtonBox from "../Components/ButtonBox";

const CreatTrip = () => {
  const places = ["nyagatare", "Kigali", "Nyanza", "GAKENYE"];

  const handleChangeFrom = (e) => {
    const filtered = places.filter((place) => {
      return place != e.target.value;
    });
    setInitialPlacesTo(filtered);
  };

  const handleChangeTo = (e) => {
    const filtered = places.filter((place) => {
      return place != e.target.value;
    });
    setInitialPlacesFrom(filtered);
  };

  const [initialPlacesFrom, setInitialPlacesFrom] = useState(places);

  const [initialPlacesTo, setInitialPlacesTo] = useState(places);

  return (
    
      <div className="booking">
        <div className="selectTrip">
          <div className="trip">
            {" "}
            <h1>Select Trip</h1>
          </div>
          <div className="boxes">
           
            <div className="container-100 ">
            <form className="border-1 container-60">
            <div className=" default-margin">
              <label>From</label>
              <SelectBox className="container-100" onChange={handleChangeFrom} name={initialPlacesFrom} />
            </div>

            <div className=" default-margin">
              <label>TO</label>
              <SelectBox className="container-100" onChange={handleChangeTo} name={initialPlacesTo} />
            </div>
            <div className="submittingButton">
            <ButtonBox className="input-button curved-boarder" name="Submit" />
          </div>
          </form>
            </div>
            
            <div className="container-60">
              <img className="img" src={image} alt="" />
            </div>
          </div>
          
        </div>
      </div>
    
  );
};

export default CreatTrip;
