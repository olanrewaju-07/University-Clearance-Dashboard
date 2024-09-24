import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import StudentRegister from "./Component/StudentRegister";
import StudentLogin from "./Component/StudentLogin";
import LandingPage from "./Pages/Landingpage";
import StudentHome from "./Pages/StudentHome";
import AuthSidebar from "./Component/AuthSidebar";
import ClearanceManagement from "./Pages/ClearanceManagement";
import Document from "./Pages/Document";

export default function App() {
  return (
    <div>
      <Routes>
         
         <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentlogin" element={<StudentLogin />} />

        <Route element={<StudentLayout />}>
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/clearancemanagement" element={<ClearanceManagement />} />
          <Route path="/document" element={<Document />} />
        </Route>

      </Routes>
    </div>
  );
}



function StudentLayout() {
  return (
    <div className="flex h-fit bg-customBlue">
      <div className="w-[300px]">
        <AuthSidebar />
      </div>
      <div className="w-full lg:flex-1 tablet:flex-none">
        <Routes>
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/clearancemanagement" element={<ClearanceManagement />} />
          <Route path="/document" element={<Document />} />
        </Routes>
      </div>
    </div>
  );
}