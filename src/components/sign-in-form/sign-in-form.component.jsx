import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import "./sign-in-form.styles.css";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.action";

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

    const dispatch = useDispatch();
    const { currentUser } = useSelector(selectCurrentUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser && localStorage.getItem("token")) {
            navigate("/dashboard/products");
        }

        return;
    }, [currentUser, navigate]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        const data = await signIn(username, password);
        if (data) {
            const { jwt: token, user } = data;

            if (wrongCredentials) setWrongCredentials(false); 
            localStorage.setItem("token", token);
            dispatch(setCurrentUser(user));
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