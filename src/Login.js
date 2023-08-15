import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { RiFacebookCircleFill, RiMicrosoftFill } from "react-icons/ri"
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi"
import LoginImage from "../Images/animate.json"
import Lottie from "lottie-react"
const Login = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [txt, setTxt] = useState(false)

  // form validations
  const nameRegex = /^[A-Za-z ]{4,}$/
  const emailRegex = /^[A-Za-z0-9.%_+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/

  const validateName = nameRegex.test(name)
  const validateEmail = emailRegex.test(email)
  const validatePassword = passRegex.test(password)

  const handleName = (e) => {
    const usrval = e.target.value
    setName(usrval)
  }
  const handleEmail = (e) => {
    const usrval = e.target.value
    setEmail(usrval)
  }
  const handlePassword = (e) => {
    const usrval = e.target.value
    setPassword(usrval)
  }

  const SubmitForm = (e) => {
    e.preventDefault()
    if (validateName && validateEmail && validatePassword) {
      console.log("Sucess")
      setName("")
      setEmail("")
      setPassword("")
      navigate("/")
    }
  }

  return (
    <div className="loginLayout">
      <div className="logincontainer">
        <div className="namelayout">
          {/* <img src={LoginImage} alt="LoginImage" className="formImg" /> */}
          <Lottie animationData={LoginImage} className="formImg" />
        </div>
        <div className="vericalline"></div>
        <div className="formlayout">
          <form action="" onSubmit={SubmitForm}>
            <h4 className="formheading">ShopEasy </h4>
            <p className="formPara">Simple to Shop & Easy to Use</p>
            <input
              className="formInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleName}
            />
            <h5 className="Validator">
              {name.length > 1 && !validateName
                ? "* Please enter valid name "
                : ""}
            </h5>
            <input
              className="formInput"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
            <h5 className="Validator">
              {email.length > 1 && !validateEmail
                ? "* Please enter valid email "
                : ""}
            </h5>

            <input
              className="formInput passwords"
              type={txt ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <span className="passicons">
              {txt ? (
                <PiEyeBold onClick={() => setTxt(!txt)} size={20} />
              ) : (
                <PiEyeClosedBold onClick={() => setTxt(!txt)} size={20} />
              )}
            </span>
            <h5 className="Validator">
              {password.length > 1 && !validatePassword
                ? "* Password should contain [A-Z,0-9, !@#$%^&*]"
                : ""}
            </h5>

            <button className="fornbtn">Submit</button>
            <hr />
            <h5 className="formsmallheading"> Login using other methods</h5>
            <div className="iconss">
              <FcGoogle className="icons" size={30} />
              <RiFacebookCircleFill className="icons" size={30} />
              <RiMicrosoftFill className="icons" size={30} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
