import react from 'react'




const SelectTrip =(props)=>{

    return(
        <div>
  <select onChange={props.onChange}>
  <option disabled selected value="">select</option>
  {props.name.map((option)=>{
      return(
      <option value={option}>{option}</option>)
  })}
      
  </select>
        </div>
    )

}

export default SelectTrip