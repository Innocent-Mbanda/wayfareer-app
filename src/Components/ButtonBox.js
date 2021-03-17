import react from 'react';


const ButtonInputs =(prop)=>{



return(
    <div className={prop.className}>
<button  type="submit" onClick={prop.onSubmit}>{prop.name}</button>

    </div>
)
}


export default ButtonInputs