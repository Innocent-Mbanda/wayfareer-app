import {react,useState} from "react";
import SelectBox from "../Components/SelectBox";
import image from '../assets/images/Rectangle3.jpg'
import ButtonBox from '../Components/ButtonBox'



const CreatTrip = () => {
  const places =["nyagatare", "Kigali", "Nyanza", "GAKENYE"]


  const handleChangeFrom = (e) => {
   const filtered =places.filter((place)=>{
    return place !=e.target.value;
    
  })
  setInitialPlacesTo(filtered)
  
  };

  const handleChangeTo= (e) => {
    const filtered =places.filter((place)=>{
     return place !=e.target.value;
     
   })
   setInitialPlacesFrom(filtered)
   
   };

  const[initialPlacesFrom, setInitialPlacesFrom]=useState(places);

  const[initialPlacesTo, setInitialPlacesTo]=useState(places);

   
  return (
    <form action="">
      <div className="booking">
        <div className="selectTrip">
          <div className="trip">
            {" "}
            <h1>Select Trip</h1>
          </div>
          <div className="boxes">

             <div>
            <img className="img" src={image} alt=""/>
            </div>
            <div classNamea="box3">
              <h2>From</h2>
              <SelectBox
                onChange={handleChangeFrom}
                name={initialPlacesFrom}
              />
            </div>

            <div className="box2">
              <h2>TO</h2>
              <SelectBox onChange={handleChangeTo}
              name={initialPlacesTo}/>
            </div>
            
          </div>
          <div className="submittingButton">
          <ButtonBox name="Submit"/>
          </div>
          
        

       
        </div>
        
      </div>
   
    </form>
  );
};

export default CreatTrip;
