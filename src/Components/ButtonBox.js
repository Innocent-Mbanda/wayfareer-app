import react from 'react';


const ButtonInputs =(prop)=>{



return(
    <div className="Input-Button">
<button  type="submit" onSubmit={prop.onSubmit}>{prop.name}</button>

    </div>
)
}


export default ButtonInputs