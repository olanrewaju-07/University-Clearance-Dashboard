import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";

export default function HeroHomepage (){
  return (
    <div className="">
      <AuthHeader />
      <section className="bg-white h-[50vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Fast & Easy Clearance</h2>
        <p className="text-lg text-gray-700 mb-6">
          Upload your certificates and get cleared in no time.
        </p>
        <Link
          to="signup"
          className="px-6 py-3 bg-customBlue text-white rounded-lg text-xl"
        >
          Start Clearance
        </Link>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-md shadow-blue-800">
              <h4 className="text-2xl font-semibold mb-2">Upload Documents</h4>
              <p>Upload admission and level-transfer certificates easily.</p>
            </div>
            <div className="p-6 shadow-md shadow-blue-800">
              <h4 className="text-2xl font-semibold mb-2">Get Verified</h4>
              <p>Our system will verify your documents with admin approval.</p>
            </div>
            <div className="p-6 shadow-md shadow-blue-800">
              <h4 className="text-2xl font-semibold mb-2">
                Proceed with Clearance
              </h4>
              <p>
                Once approved, move to the next step in your clearance journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-customBlue text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 UniClearance. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms
            </a>{" "}
            |
            <a href="#" className="text-gray-400 hover:text-white ml-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}