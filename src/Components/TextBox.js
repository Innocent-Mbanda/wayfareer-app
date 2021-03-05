import react from 'react'


const InputText = (props)=>{
    return(
        <div className="Input-text">
    
         <input type={props.type} required={props.required}/>
        </div>
    )
}


export default InputText;