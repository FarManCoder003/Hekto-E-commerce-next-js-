"use client";
import company from "@/assets/company.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("user", userCredential.user);
      toast.success("Login success");
      router.push(`/`);
    } catch (error) {
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div
        className={`${josefinSans.className} w-[95%] lg:w-[544px] lg:h-[494px] mt-[48px] lg:mt-[120px] mx-auto box-shadow8 p-[24px] lg:p-[50px] text-center bg-[#F6F5FF]`}
      >
        <div className="text-[#000000] text-[32px] font-bold">Login</div>
        <div className="text-[#9096B2] text-[17px] font-normal pt-[7px] pb-[37px]">
          Please login using account details below.
        </div>
        <input
          type="text"
          onChange={handleEmail}
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px]"
          placeholder="Email Address"
        />
        <input
          name="password"
          id="password"
          onChange={handlePassword}
          type="password"
          className="w-full h-[52px] pl-[13px] text-[#9096B2] text-[16px] font-normal border border-[#C2C5E1] rounded-[2px] mt-[23px] mb-[13px]"
          placeholder="Password"
        />
        <div className="text-[#9096B2] text-start text-[17px] font-normal cursor-pointer">
          Forgot your password?
        </div>
        <button
          className="w-full h-[47px] bg-[#FB2E86] rounded-[3px] text-center text-[#fff] text-[17px] font-normal mt-[23px] mb-[28px]"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <Link href="/SignUp">
          <div className="text-[#9096B2] text-[17px] font-normal">
            Don&apos;t have an Account? Create account
          </div>
        </Link>
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

export default Login;
