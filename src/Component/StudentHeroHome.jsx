import { FaAngleDown } from "react-icons/fa6";
import { documentFiles } from "../Utils/data";

export default function StudentHeroHome() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row bg-white items-center gap-5 w-fit p-1 rounded-2xl mt-10 absolute top-0 right-0 mr-10 mobile:mr-2">
          <img
            src="/assets/images/Avatars.svg"
            alt="Users icon"
            className="w-10"
          />
          <div className="flex flex-row gap-3 items-center">
            <h2 className="text-[15px] font-semibold opacity-85">
              Issa Abdulbasit
            </h2>
            <FaAngleDown className="text-[15px] font-semibold opacity-50" />
          </div>
        </div>

        <div className="flex flex-col gap-10 bg-[#F3F3F3] rounded-l-lg px-8 py-4 mt-28 mobile:p-0">
          <div className="flex flex-row gap-4 items-center mobile:justify-center mobile:mt-5">
            <h2 className="text-[25px] mobile:text-[16px]">
              Welcome, Abdulbasit👋
            </h2>
            <hr className="w-[1px] h-10 bg-gray-400 mobile:h-14" />
            <div className="flex flex-row items-center mobile:flex-col-reverse mobile:gap-2">
              <span className="w-[50%] text-[10px] font-semibold mobile:w-full">
                Clearance progress
              </span>
              <img src="/assets/images/15%.svg" alt="" className="w-10" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-[90%] mobile:flex-col mobile:w-full mobile:gap-6">
            <div className="flex flex-row bg-white p-2 rounded-lg items-center justify-between min-w-72 mobile:min-w-80">
              <div className="flex flex-col gap-3">
                <h2 className="text-[12px] font-semibold">Pending</h2>
                <span className="text-[12px]">financial clearance</span>
              </div>
              <img
                src="/assets/icons/receipt-clock.svg"
                alt=""
                className="w-8"
              />
            </div>
            <div className="flex flex-row bg-white p-2 rounded-lg items-center justify-between min-w-72 mobile:min-w-80">
              <div className="flex flex-col gap-3">
                <h2 className="text-[12px] font-semibold">Approve</h2>
                <span className="text-[12px]">Library clearance</span>
              </div>
              <img
                src="/assets/icons/check-decagram.svg"
                alt=""
                className="w-8"
              />
            </div>
            <div className="flex flex-row bg-white p-2 rounded-lg items-center justify-between min-w-72 mobile:min-w-80">
              <div className="flex flex-col gap-3">
                <h2 className="text-[12px] font-semibold">Incomplete</h2>
                <span className="text-[12px]">Departmental clearance</span>
              </div>
              <img
                src="/assets/icons/close-circle.svg"
                alt=""
                className="w-8"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 w-[90%] mobile:w-full">
            <div className="flex flex-col mobile:ml-8">
              <h2 className="text-[15px] font-semibold">Uploaded Documents</h2>
              <span className="text-[12px]">
                A collection of all documents you have Uploaded
              </span>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-5 mobile:grid-cols-2 mobile:px-2">
              {documentFiles.map((document, index) => (
                <div
                  className="flex flex-col gap-16 bg-white rounded-xl p-5"
                  key={index}
                >
                  <div className="flex flex-row justify-between items-center">
                    <img src={document.image1} alt="" />
                    <img src={document.image2} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[15px]">
                      {document.header}
                    </h2>
                    <div className="flex flex-row items-center gap-3">
                      <p className="text-[13px] text-black opacity-60">
                        {document.date}.
                      </p>
                      <span className="text-[13px] text-blue-500 font-semibold">
                        {document.span}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 