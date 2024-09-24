import { useState } from "react";
import StudentRegister from "../Component/StudentRegister";
import StaffRegister from "../Component/StaffRegistration";

export default function Signup() {
  // Set the default state to show the Student registration form
  const [activeForm, setActiveForm] = useState("student");

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        <div className="text-center">
          <h2 className="font-bold text-[17px]">Student Registration Portal</h2>
          <p className="text-[13px] text-gray-400">
            Lorem Ipsum Dolor Sita Ameno De la Voir lorenzo deraiyna dereely
          </p>
        </div>
        <div className="flex flex-row bg-gray-200 rounded-md p-1 items-center w-fit gap-3">
          <button
            onClick={() => setActiveForm("student")}
            className={`${
              activeForm === "student"
                ? "bg-white text-customBlue"
                : "bg-gray-100 text-gray-600"
            } rounded-md p-1 text-[12px] font-semibold`}
          >
            Student Registration
          </button>
          <button
            onClick={() => setActiveForm("staff")}
            className={`${
              activeForm === "staff"
                ? "bg-white text-customBlue"
                : "bg-gray-100 text-gray-600"
            } rounded-md p-1 text-[12px] font-semibold`}
          >
            Staff Registration
          </button>
        </div>

        {/* Conditionally render either the StudentRegister or StaffRegister based on the activeForm state */}
        <div className="mt-5 w-full">
          {activeForm === "student" && <StudentRegister />}
          {activeForm === "staff" && <StaffRegister />}
        </div>
      </div>
    </div>
  );
}
