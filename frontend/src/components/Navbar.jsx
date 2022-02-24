import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthConext } from "../Contexts/AuthContext";

const Navbar = () => {

    const { token, role, handleToken } = useContext(AuthConext);
  
  return (
    <div className="heading_navbar">
    <Link to="/">
      <h2>
       {token ? `Welcome to ${role.role} Dashboard` : `Please Signup or Login to see your Dashboard`} 
      </h2>
    </Link>
    <div className="btn_div">
        <Link to="/register">
                <button >
                 Register
                </button>
        </Link>
        <Link to="/login">
        <button  onClick={() => {
                handleToken("")
                }}>{token ? "Logout" : "Login"}
                </button>
        </Link>
    </div>
    </div>
  );
};

export default Navbar;
