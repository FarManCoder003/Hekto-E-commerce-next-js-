"use client";
import company from "@/assets/company.png";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const SignUp = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: email,
      });
      await set(ref(db, "user/"), {
        email: email,
      });
      toast.success("Account created");
      router.push("/Login");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      toast.error("Account creation failed");
    }
  };

  return (
    <>
      <div
        className={`${josefinSans.className} w-[95%] lg:w-[544px] lg:h-[474px] mt-[48px] lg:mt-[120px] mx-auto box-shadow8 p-[24px] lg:p-[50px] text-center bg-[#F6F5FF]`}
      >
        <div className="text-[#000000] text-[32px] font-bold">Sign up</div>
        <div className="text-[#9096B2] text-[17px] font-normal pt-[7px] pb-[37px]">
          Please sign up by filling the details below.
        </div>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px]"
          placeholder="Email Address"
        />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px] mt-[23px] mb-[13px]"
          placeholder="Password"
        />
        <button
          className="w-full h-[47px] bg-[#FB2E86] rounded-[3px] text-center text-[#fff] text-[17px] font-normal mt-[23px] mb-[28px]"
          onClick={handleSubmit}
        >
          Create account
        </button>
      </div>
      <div className="my-[48px] lg:my-[83px]">
        <Image
          src={company}
          className="w-full lg:w-[904px] lg:h-[93px] mx-auto"
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SignUp;
