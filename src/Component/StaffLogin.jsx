import { Link } from "react-router-dom";

export default function StaffLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen mobile:min-h-40 px-4">
      <form className="mt-5 flex flex-col gap-4 w-full max-w-md md:w-[100%] lg:w-[40%]">
        <div className="flex flex-col">
          <label className="text-sm md:text-base font-semibold">
            Staff email
          </label>
          <input
            type="email"
            placeholder="Enter email here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm md:text-base font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter password here"
            className="w-full border-none rounded-xl bg-gray-200 p-2 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-row justify-between items-center text-sm md:text-base">
          <span className="font-semibold">
            Forget your password?{" "}
            <Link className="text-customBlue">Reset password</Link>
          </span>
          <Link
            to="/home"
            className="bg-customBlue rounded-xl text-white py-2 px-4 text-center w-28 md:w-32"
          >
            Login
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <span className="text-gray-400">Or</span>
          <span className="text-sm md:text-base font-semibold">
            Dont have an account?{" "}
            <Link to="/signup" className="text-customBlue">
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
