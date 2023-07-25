import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import landcruiserImage from "../../assets/landcruiser.jpg"
import "./authentication.styles.css"

const Authentication = () => {
  return (
    <div className="authentication-container">
        <div className="left-side-wrapper">
            <div className="left-side-header">
                <div className="logo-container">
                    <img 
                        src="https://uploads-ssl.webflow.com/640a889f0502c2db408f3b7b/640b436d0771bd7308e56581_transparent%20logo.png" 
                        alt="errahma group logo"
                        className="logo"
                    ></img>
                </div>
                <h1 className="company-name"><span className="colored-text">E</span>RRAHMA <span className="colored-text">G</span>ROUP</h1>
                
            </div>
            <div className="form-wrapper">
                <h1 className="sign-in-header-text">Sign In</h1>
                <p className="sign-in-header-paragraph">start managing your products <span className="colored-text">faster</span> and <span className="colored-text">better</span></p>
                <SignInForm className="form-container"></SignInForm>
            </div>
        </div>
            <img className="img" src={landcruiserImage} alt="landcruiser" />
        {/* <div className="img"></div> */}
        
    </div>
  )
}

export default Authentication