import { useState } from "react";
import StudentLogin from "../Component/StudentLogin";
import StaffLogin from "../Component/StaffLogin";

export default function Login () {

const [loginForm, setLoginForm] = useState ("student")

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <div className="text-center">
          <h2 className="font-bold text-[17px]">Student Login Portal</h2>
          <p className="text-[13px] text-gray-400">
            Lorem Ipsum Dolor Sita Ameno De la Voir lorenzo deraiyna dereely
          </p>
        </div>
        <div className="flex flex-row bg-gray-200 rounded-md p-1 items-center w-fit gap-3">
          <button
            onClick={() => setLoginForm("student")}
            className={`${
              loginForm === "student"
                ? "bg-white text-customBlue"
                : "bg-gray-100 text-gray-600"
            } rounded-md p-1 text-[12px] font-semibold`}
          >
            Student Login
          </button>
          <button
            onClick={() => setLoginForm("staff")}
            className={`${
              loginForm === "staff"
                ? "bg-white text-customBlue"
                : "bg-gray-100 text-gray-600"
            } rounded-md p-1 text-[12px] font-semibold`}
          >
            Staff Login
          </button>
        </div>

        {/* Conditionally render either the StudentLogin or StaffLogin based on the activeForm state */}
        <div className="mt-5 w-full">
          {loginForm === "student" && <StudentLogin />}
          {loginForm === "staff" && <StaffLogin />}
          
        </div>
      </div>
    </div>
  );
}