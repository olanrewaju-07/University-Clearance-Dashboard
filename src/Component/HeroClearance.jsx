 import { FaAngleDown } from "react-icons/fa";
 import { departmentFiles, financialFiles, libraryFiles } from "../Utils/data";
import { FaCirclePlus } from "react-icons/fa6";
export default function HeroClearance (){
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

        <div className="flex flex-col gap-10 bg-[#F3F3F3] rounded-l-lg px-8 py-4 mt-28 mobile:px-1">
          <h2 className="font-semibold text-[16px]">Clearance Management</h2>
          <div className="flex flex-col gap-10 w-[90%] mobile:w-full">
            <div className="flex flex-col gap-2">
              <h2 className="text-black opacity-60 font-semibold">
                Clearance Progress
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3">
                  <h2 className="font-semibold text-[15px] opacity-90">
                    Departmental Clearance
                  </h2>
                  <div className="flex flex-row gap-80 items-center mobile:flex-col mobile:gap-2 mobile:items-center">
                    <img
                      src="/assets/icons/Sharts.svg"
                      alt=""
                      className="w-10"
                    />
                    <span className="text-green-700 font-semibold">
                      Completed
                    </span>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3">
                  <h2 className="font-semibold text-[15px] opacity-90">
                    Library Clearance
                  </h2>
                  <div className="flex flex-row gap-[340px] items-center mobile:flex-col mobile:gap-2 mobile:items-center">
                    <img
                      src="/assets/icons/Sharts (1).svg"
                      alt=""
                      className="w-10"
                    />
                    <span className="text-yellow-300 font-semibold">
                      Pending
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3">
                  <h2 className="font-semibold text-[15px] opacity-90">
                    Fees Clearance
                  </h2>
                  <div className="flex flex-row gap-[310px] items-center mobile:flex-col mobile:gap-2 mobile:items-center">
                    <img
                      src="/assets/icons/Sharts (2).svg"
                      alt=""
                      className="w-10"
                    />
                    <span className="text-red-700 font-semibold">
                      Incomplete
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <h2 className="text-black font-semibold">Clearance Document</h2>
              <div className="flex flex-col gap-4 bg-white rounded-lg px-8 py-4 mt-5 mobile:px-1">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-black text-[13px] opacity-60">
                    Select the document to upload
                  </span>
                  <button className="p-2 bg-customBlue text-white font-semibold rounded-md mobile:p-2 mobile:px-1.2 mobile:text-[11px]">
                    submit documents
                  </button>
                </div>
                <div className="flex flex-col gap-2 mt-10">
                  <h2 className="text-[15px] font-bold">Library clearance</h2>
                  <div className="flex flex-row gap-5 mobile:grid mobile:grid-cols-2 ">
                    {libraryFiles.map((document, index) => (
                      <div
                        className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                        key={index}
                      >
                        <img src={document.image1} alt="" className="w-5 h-7" />
                        <div className="flex flex-col">
                          <h2 className="font-semibold text-[13px]">
                            {document.header}
                          </h2>
                          <div className="flex flex-row gap-4 text-black opacity-60">
                            <p className="text-[11px]">{document.date}</p>
                            <span className="text-[11px]">{document.span}</span>
                          </div>
                        </div>
                        <img src={document.image2} alt="" />
                      </div>
                    ))}
                    <div className="flex flex-row border border-dotted border-customBlue rounded-md items-center p-3.5 gap-2 text-black opacity-60">
                      <FaCirclePlus />
                      <span className="text-[14px]">Upload document</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-10">
                  <h2 className="text-[15px] font-bold">
                    Departmental clearance
                  </h2>
                  <div className="grid grid-cols-4 gap-4 mt-2  mobile:grid mobile:grid-cols-2 ">
                    {departmentFiles.map((document, index) => (
                      <div
                        className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                        key={index}
                      >
                        <img src={document.image1} alt="" className="w-5 h-7" />
                        <div className="flex flex-col">
                          <h2 className="font-semibold text-[13px]">
                            {document.header}
                          </h2>
                          <div className="flex flex-row gap-4 text-black opacity-60">
                            <p className="text-[11px]">{document.date}</p>
                            <span className="text-[11px]">{document.span}</span>
                          </div>
                        </div>
                        <img src={document.image2} alt="" />
                      </div>
                    ))}
                    <div className="flex flex-row border border-dotted border-customBlue rounded-md items-center p-4 text-black opacity-60 gap-4 w-fit">
                      <FaCirclePlus />
                      <span className="text-[14px]">Upload document</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <h2 className="text-[15px] font-bold">
                    Finanacial clearance
                  </h2>
                  <div className="grid grid-cols-4 gap-4 mt-2  mobile:grid mobile:grid-cols-2 ">
                    {financialFiles.map((document, index) => (
                      <div
                        className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                        key={index}
                      >
                        <img src={document.image1} alt="" className="w-5 h-7" />
                        <div className="flex flex-col">
                          <h2 className="font-semibold text-[13px]">
                            {document.header}
                          </h2>
                          <div className="flex flex-row gap-4 text-black opacity-60">
                            <p className="text-[11px]">{document.date}</p>
                            <span className="text-[11px]">{document.span}</span>
                          </div>
                        </div>
                        <img src={document.image2} alt="" />
                      </div>
                    ))}
                    <div className="flex flex-row border border-dotted border-customBlue rounded-md items-center p-4 text-black opacity-60 gap-4 w-fit">
                      <FaCirclePlus />
                      <span className="text-[14px]">Upload document</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}