import { useState } from "react";
import { signUp } from "../utilities/users-service";


function SignUpForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    });
    const disable = formData.password !== formData.confirm;
    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            console.log(formData)
            // Data for the backend to create new user
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
            // return a token with the user info
            const user = await signUp(userData);
            console.log(user);
        } catch (error) {
            setFormData({...formData, error: "Sign up failed, Try again!"})
        }
    };
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
    }
    return(
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required/>
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>

            <p className="error-message">{formData.error}</p>
        </div>
    )
};

export default SignUpForm;