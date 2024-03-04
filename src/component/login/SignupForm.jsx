import React, { useState, useRef, useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import OTP from "../otp";

const USER_REGEX = /^[a-zA-Z\s.'-]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const CONTACT_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SIGNUP_URL = "http://localhost:8080/api/auth/getOtp";

const SignUpForm = () => {
  const userRef = useRef();
  const errRef = useRef();
const [data, setdata] = useState({
})
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [clicking, setClicking] = useState(false);

  const handleMouseDown = () => {
    setClicking(true);
  };

  const handleMouseUp = () => {
    setClicking(false);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = CONTACT_REGEX.test(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);


    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      setdata({
        email,
        password:pwd,
        batch:2021,
        name:user,
        mobile_no:phoneNumber

      });
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({
          
          email: email,
          
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status == 200){
        return(<><OTP data = {data}></OTP></>)
      }
      setSuccess(true);
    } catch (err) {
      console.error("Registration error:", err);

      if (axios.isAxiosError(err)) {
        if (!err.response) {
          setErrMsg("No Server Response");
        } else {
          setErrMsg("Registration Failed");
        }
      } else {
        setErrMsg("An unexpected error occurred during registration");
      }

      errRef.current.focus();
    }
  };

  return (
    <div>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <NavLink to="/Login">Log In</NavLink>
          </p>
        </section>
      ) : (
        <div className=" mt-9">
          <p ref={errRef} className={errMsg ? "errmsg" : "hidden"}>
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <p className="font-semibold	">
                Name <sup>*</sup>
              </p>
              <input
                required
                type="text"
                id="name"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter name"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className="sm:w-40 md:w-52 lg:w-64 rounded-lg m-2 text-black p-1"
              />
              <div
                className={`flex bg-[#3A6944]/10 sm:w-40 md:w-52 lg:w-64   ${
                  userFocus && user && !validName ? "" : "hidden"
                }`}
              >
                <p>
                  <FaCircleInfo />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters allowed only.
                </p>
              </div>
            </label>
            <label>
              <p className="font-semibold	">
                Phone Number <sup>*</sup>
              </p>
              <input
                required
                type="tel"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone number"
                onFocus={() => setPhoneNumberFocus(true)}
                onBlur={() => setPhoneNumberFocus(false)}
                className="sm:w-40 md:w-52 lg:w-64   rounded-lg m-2 text-black p-1"
              />
              <div
                className={`flex bg-[#3A6944]/10 sm:w-40 md:w-52 lg:w-64   ${
                  phoneNumberFocus && phoneNumber && !validPhoneNumber
                    ? ""
                    : "hidden"
                }`}
              >
                <p>
                  <FaCircleInfo />
                  10 numbers only.
                </p>
              </div>
            </label>
            <label>
              <p className="font-semibold	">
                Email Address <sup>*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="sm:w-40 md:w-52 lg:w-64  rounded-lg m-2 text-black p-1"
              />
              <div
                className={`flex bg-[#3A6944]/10 sm:w-40 md:w-52 lg:w-64   ${
                  emailFocus && email && !validEmail ? "" : "hidden"
                }`}
              >
                <p>
                  <FaCircleInfo />
                  Format: xyz@domain.com
                </p>
              </div>
            </label>

            <div>
              <label htmlFor="password" className="flex flex-col  relative">
                <p className="font-semibold	">
                  Create Password <sup>*</sup>
                </p>
                <input
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Enter Password"
                  className="sm:w-40 md:w-52 lg:w-64 rounded-lg m-2 text-black p-1"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="cursor-pointer absolute   right-0  top-8	  flex items-center 
                        justify-center w-10 text-black rounded-r-sm"
                >
                  {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
                <div
                  className={`flex bg-[#3A6944]/10 sm:w-40 md:w-52 lg:w-64  ${
                    pwdFocus && !validPwd ? "" : "hidden"
                  }`}
                >
                  <p>
                    <FaCircleInfo />
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                </div>
              </label>
              <label className="flex flex-col  relative">
                <p className="font-semibold	">
                  Confirm Password <sup>*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  placeholder="Confirm Password"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="sm:w-40 md:w-52 lg:w-64  rounded-lg m-2 text-black p-1"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="cursor-pointer absolute  right-0  top-8	  flex items-center 
      justify-center w-10 text-black rounded-r-sm"
                >
                  {showConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />}
                </span>
                <div
                  className={`flex bg-[#3A6944]/10 sm:w-40 md:w-52 lg:w-64   ${
                    matchFocus && !validMatch ? "" : "hidden"
                  }`}
                >
                  <p>
                    <FaCircleInfo />
                    Must match the first password input field.
                  </p>
                </div>
              </label>
            </div>

            <button
              className={`bg-[#B99470]/30 lg:w-64 w-[90%] p-1 rounded-lg font-medium m-2 
              transition-transform transform hover:scale-95 ${
                clicking ? "transition-transform transform hover:scale-105" : ""
              }`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
