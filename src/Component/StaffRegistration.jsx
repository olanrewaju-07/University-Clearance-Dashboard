import { useState } from "react";
import { Link } from "react-router-dom";
import { faculties, departments } from "../Utils/data";

export default function StaffRegister() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const handleSelectChange = (event) => {
    setSelectedDepartment(event.target.value);
  };
  const handleSelectFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  return (
    <div className="flex items-center justify-center p-4 md:p-10">
      <form className="w-full max-w-md md:max-w-lg lg:max-w-2xl mt-5 flex flex-col gap-4 mobile:mt-0">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">First Name</label>
            <input
              type="text"
              placeholder="Enter first name here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[15px] font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter email here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter password here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">Faculty</label>
            <select
              value={selectedFaculty}
              onChange={handleSelectFacultyChange}
              className="w-full border-none rounded-xl bg-gray-200 p-2 text-[14px] text-gray-700"
            >
              <option value="">Select a Faculty</option>
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[15px] font-semibold">Department</label>
            <select
              value={selectedDepartment}
              onChange={handleSelectChange}
              className="w-full border-none rounded-xl bg-gray-200 p-2 text-[14px] text-gray-700"
            >
              <option value="" disabled>
                Select a Department
              </option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[15px] font-semibold">Staff ID</label>
          <input
            type="text"
            placeholder="Enter staff ID here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-[12px] text-[14px]"
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <span className="text-[12px] font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-customBlue">
              Login here
            </Link>
          </span>
          <Link
            to="/home"
            className="bg-customBlue rounded-xl text-white p-2 w-[30%] text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
