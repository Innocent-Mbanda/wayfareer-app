import react from "react";
import ButtonBox from "../Components/ButtonBox";
import TextBox from "../Components/TextBox";
import "../App.css";

function Register() {

  const handleSubmit =()=>{
    alert("You clicked me")
  }

  return (
    <div className="FormContainer">
      <div className="Login-Form">

        <div>
          <h1 className="logIn">Register</h1>
        </div>
<form action="">
      <div className="box1">
        <h1 className="UserEntries">Email or Username</h1>
        <TextBox type="email" required={true} />
        </div>

        <div className="box1">
        <h1 className="UserEntries">Password</h1>
        <TextBox type="password" required={true}/>
        </div>

        <div className="box1">
        <h1 className="UserEntries">First Name</h1>
        <TextBox type="text" required={true}/>
        </div>

        <div className="box1">
        <h1 className="UserEntries">Last Name</h1>
        <TextBox type="text" required={true}/>
        </div>

        <div className="bottonbox">
        <ButtonBox onClick= {handleSubmit} name="Register" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
