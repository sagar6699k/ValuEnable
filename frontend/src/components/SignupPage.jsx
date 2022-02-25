import { useContext, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom";
import { AuthConext } from "../Contexts/AuthContext";
const SignupPage = () => {

    const { token,role, handleToken, handleRole } = useContext(AuthConext);
    const history = useHistory();


    const [user, setUser] = useState({
        username: "",
        email: "",
        role: "",
        password: ""
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        
        setUser({
            ...user,
            [name] : value
        })

    }


    const Signup = () => {
        const { username, email, role, password } = user;
        if (username, email ,role ,password) {
            axios.post("http://localhost:2022/register", user)
            .then((res)=>{
                handleToken(res.data.token)
                handleRole(res.data.user)
                alert('Registration Successful')
                history.push("/login")
            })
            .catch((res)=>alert(res.message))
        } else {
            alert("Invalid")
        }
    }




    return (
        <div className="form_page">

            <h2>Register your role:</h2>
            <p>*Login, if you are already registered</p>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
                    <div class="col-sm-10">
                        <input type="text" name="username" value={user.username} onChange={handleChange} class="form-control"  />
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" name="email"  value={user.email} onChange={handleChange} class="form-control"  />
                    </div>
            </div>
            
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Role</label>
                    <div class="col-sm-10">
                    <select name="role" value={user.role} onChange={handleChange} class="form-control" id="exampleFormControlSelect1">
                        <option selected >Select your role</option>
                        <option>Admin</option>
                        <option>Costomer</option>
                        <option>Moderator</option>
                    </select>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" name="password"  value={user.password} onChange={handleChange} class="form-control"  />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" onClick={Signup}>
                    Submit
                </button>
        </div>
    )
}

export default SignupPage
