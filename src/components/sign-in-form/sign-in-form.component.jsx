import { useState } from "react"

import Input from "../input/input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        console.log(process.env);
        console.log(formFields);
        try {
            const userInformationRequest = await fetch(process.env.ERRAHMA_API_AUTH_URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formFields)
            });
            const userInformation = await userInformationRequest.json();
            console.log(userInformation);
        } catch (err) {
            console.error(err);
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <Input label="Email *" required type="email" name="email" value={email} placeHolder="example@mail.com" onChange={onChangeHandler}/>
            <Input label="Password *" required type="password" name="password" value={password} placeHolder="at least 8 characters" onChange={onChangeHandler} />
            <Button className="loginButton" type="button" onClick={(event) => onSubmitHandler(event)} />
        </div>
    )
}

export default SignInForm