import react from "react";
import ButtonBox from "../Components/ButtonBox";
import TextBox from "../Components/TextBox";
import "../App.css";

function Login() {

  const handleSubmit =()=>{
    alert("You clicked me")
  }

  return (
    <div className="FormContainer">
      <div className="Login-Form">

        <div>
          <h1 className="logIn">Login</h1>
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

        <div className="bottonbox">
        <ButtonBox onClick= {handleSubmit} name="Login" />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
