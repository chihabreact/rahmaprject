import { useState } from "react"

import "./sign-in-form.styles.css";

import { useNavigate } from "react-router-dom";

import Input from "../input/input.component";
import Button from "../button/button.component";

import { signIn } from "../../utils/request";

const defaultFormFields = {
    username: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const { username, password } = formFields;

    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        const token = await signIn(username, password);
        if (token) {
            if (wrongCredentials) setWrongCredentials(false); 
            localStorage.setItem("token", token);
            navigate("/dashboard/products");
        } else {
            setWrongCredentials(true);
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <p className={`credentials ${wrongCredentials && "wrong-credentials"}`}>wrong credentials</p>
            <Input 
                label="Username *" 
                required 
                type="text" 
                name="username" 
                value={username} 
                placeHolder="John Doe" 
                onChange={onChangeHandler} 
                className="sign-in-form-input-container"
            />
            <Input 
                label="Password *" 
                required
                type="password" 
                name="password" 
                value={password} 
                placeHolder="at least 8 characters" 
                onChange={onChangeHandler} 
                className="sign-in-form-input-container"
            />
            <Button className="loginButton" type="button" onClick={(event) => onSubmitHandler(event)} />
        </div>
    )
}

export default SignInForm