import { useState } from "react";
import { Link } from "react-router-dom";
import { faculties, departments } from "../Utils/data";

export default function StudentRegister() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const handleSelectChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSelectFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <form className="mt-5 flex flex-col gap-4 w-full max-w-lg">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm md:text-base font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter email here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password here"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              Faculty
            </label>
            <select
              value={selectedFaculty}
              onChange={handleSelectFacultyChange}
              className="w-full border-none rounded-xl bg-gray-200 p-2 text-sm"
            >
              <option value="">Select an option</option>
              {faculties.map((faculty, index) => (
                <option key={index} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-sm md:text-base font-semibold">
              Department
            </label>
            <select
              value={selectedDepartment}
              onChange={handleSelectChange}
              className="w-full border-none rounded-xl bg-gray-200 p-2 text-sm"
            >
              <option value="" disabled>
                Select an option
              </option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm md:text-base font-semibold">Staff ID</label>
          <input
            type="text"
            placeholder="Enter staff ID here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-4">
          <span className="text-xs md:text-sm font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-customBlue">
              Login here
            </Link>
          </span>
          <Link
            to="/studenthome"
            className="bg-customBlue rounded-xl text-white py-2 px-4 w-full md:w-auto text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
