import React, { useState } from "react";
// import userLogin from '../../util/apiCalls.js'

const LoginForm = (props) => {
    console.log(props);
    
    const [emailValue, handleEmailChange] = useState("");
    const [passwordValue, handlePassowrdChange] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const newUser = {email: emailValue, passowrd: passwordValue}
        const loginResponse = await userLogin(newUser)
        if(loginResponse) {
            console.log(loginResponse);
            // userName = loginResponse
            // userId = loginResponse
            resetInputs();
        } else {

        }
      }

    const resetInputs = () => {
        handleEmailChange('')
        handlePassowrdChange('')
    }

    const checkEmail = () => {
         const emailSplit = emailValue.split('')
         const startIncludesSearch = emailSplit.findIndex(character => character === '@')
         return emailSplit.includes('@') && emailSplit.includes('.', startIncludesSearch) ? true : false
       }

    const canBeSubmitted = () => {
          return (checkEmail() && passwordValue.length > 6 )
        }

    const isEnabled = canBeSubmitted()

    return (
        <form className='Form'>
            <label htmlFor="email" className="form-login email-login__label">
                Email
            </label>
            <input
                className="emailForm"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                onChange={ e => handleEmailChange(e.target.value)}
                value={emailValue}
            />
             <label htmlFor="password" className="form-login passowrd-login__label">
                Password
            </label>
            <input
                className="emailForm"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                onChange={ e => handlePassowrdChange(e.target.value)}
                value={passwordValue}
            />
            <button
                type="button"
                className="loginFormBtn"
                disabled={!isEnabled}
                onClick={(e) => handleSubmit(e)}
                >
                Submit
            </button>
       </form>
    )
}

export default LoginForm;