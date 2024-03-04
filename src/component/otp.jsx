import React, { useState } from "react";
import { RiInboxArchiveFill } from "react-icons/ri";
import axios from "axios";

// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../../../redux/userSlice';
import SyncLoader from "react-spinners/SyncLoader";
import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
function OTP({ signupData }) {
//   const dispatch = useDispatch();

  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  // const [timer, setTimer] = useState(60);

  const handleChange = (e) => {
    const value = e.target.value;
    const index = parseInt(e.target.dataset.index, 10);

    if (!isNaN(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;

      if (value === "" && index > 0) {

        document.getElementById(`otpInput_${index - 1}`).focus();
      } else if (index < otp.length - 1 && value !== "") {

        document.getElementById(`otpInput_${index + 1}`).focus();
      }

      setOtp(newOtp);
    }
  };
  function ConcatenateArr(arr, N) {
    // Convert the array of OTP digits to a string
    const strOtp = arr.join("");

    // Parse the string as an integer
    const numOtp = parseInt(strOtp, 10);

    return numOtp;
  }


  // const submitOtp = async () => {
  //   setLoading(true);
  //   const numOtp = ConcatenateArr(otp, 6);
  //   console.log(numOtp)
  //   signupData.otp = numOtp;
  //   signupData.role = "client";
  //   console.log(signupData)
  //   const response = await axios.post("http://localhost:8080/api/auth/signup", signupData)
  //   if (response.status == 200) {
  //     const user = response.data.user
  //     const token = response.data.token

  //     localStorage.setItem('token', token);
  //     dispatch(login({ user, token }));
  //     router.push('/dashboard')
  //   } else if(response.status === 400){
  //     toast("Wrong OTP");
  //     setLoading(false);
  //   }
  //   console.log(response);
  //   setLoading(false);
  // };

  const submitOtp = async () => {
   
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", signupData);
      if (response.status === 200) {
        console.log("done")
      } 
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle 400 response here
        toast("Wrong OTP");
      } else {
        // Handle other errors here
        toast(error);
        console.error("An error occurred:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center">
      {loading ? (<SyncLoader color="#36d7b7" />) : (
        <div className="border-2 border-[var(--bgSoft)] w-[40%] m-auto rounded-xl py-5 
      bg-[var(--bgSoft)] shadow-2xl ">
          <div className="flex  justify-center items-center gap-2">
            <h1 className="text-xl text-center font-medium ">
              Check your mail box for the OTP
            </h1>
            <RiInboxArchiveFill />

          </div>

          <div className="w-[80%] m-auto flex flex-row shadow-2xl gap-2 my-5">
            {otp.map((data, i) => (
              <input
                id={`otpInput_${i}`}
                type="text"
                name="otp"
                className="border-2  w-12 h-12 text-2xl rounded-xl m-auto text-black text-center"
                maxLength={1}
                key={i}
                value={data}
                data-index={i}
                onChange={handleChange}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className="w-[80%] m-auto flex flex-row gap-2 justify-center my-5">
            {/* <p className="text-lg">
            {timer > 0 ? `Resend OTP in ${timer} seconds` : "Resend OTP"}
          </p> */}
            <button
              onClick={submitOtp}
              size="lg"
              variant="ghost"
              className="bg-gray-300/20 px-8 py-2 rounded-lg mt-4 hover:bg-gray-400/30 w-1/3
            transition-transform transform hover:scale-105"
            // disabled={timer > 0}
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OTP;
