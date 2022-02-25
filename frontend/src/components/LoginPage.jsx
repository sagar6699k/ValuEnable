import { useState } from "react";
import { useContext } from "react";
import { AuthConext } from "../Contexts/AuthContext";
import axios from "axios"
import { useHistory } from "react-router-dom";


const LoginPage = () => {

    const { token,role, handleToken, handleRole } = useContext(AuthConext);
    const history = useHistory();


    console.log(role.username );
    const [user, setUser] = useState({
        email: String,
        password: String
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setUser({
            ...user,
            [name] : value
        })

    }



    const Login = () => {
        const {email, password } = user;
        if (email ,password) {
            axios.post("http://localhost:2022/login", user)
            .then((res)=>{
                console.log('Login Success');
                handleToken(res.data.token)
                handleRole(res.data.user)
                history.push("/")
            } )
            .catch((res)=>alert("Something went wrong, try again"))
            // .catch((res)=>alert(res.message))
            
        } else {
            alert("Invalid")
        }

    }




    return (
        <div className="form_page">
            <h2>Login</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        data-testid="input_box1"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"  value={user.email} onChange={handleChange} 
                    />
                    <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        data-testid="input_box2"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="password"  value={user.password} onChange={handleChange} 
                    />
                </div>
                <button 
                    data-testid="btn"
                    type="submit" onClick={Login} class="btn btn-primary">
                    Submit
                </button>
           
        </div>
    );
};



export  {LoginPage};
