import { FaAngleDown } from "react-icons/fa";
import { departmentFiles } from "../Utils/data";
export default function HeroDocument() {
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

        <div className="flex flex-col gap-10 bg-[#F3F3F3] h-[1000px] rounded-l-3xl px-8 py-4 mt-28 mobile:px-2">
          <h2 className="font-semibold text-[16px]">Clearance Documents</h2>
          <div className="flex flex-col gap-10 bg-white p-5 rounded-md mobile:p-0">
            <h2 className="text-black opacity-60 text-[16px] mobile:ml-3 mobile:mt-3">
              Uploaded Documents
            </h2>
            <div className="flex flex-row items-center justify-between mobile:flex-col">
              <div className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold mobile:ml-3">
                  Library Clearance
                </h2>
                <div className="flex flex-col gap-3 mobile:grid mobile:grid-cols-2 ">
                  {departmentFiles.map((document, index) => (
                    <div
                      className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                      key={index}
                    >
                      <img src={document.image1} alt="" className="w-5 h-7" />
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-[13px] opacity-85">
                          {document.header}
                        </h2>
                        <div className="flex flex-row gap-4 text-black opacity-60">
                          <p className="text-[11px]">{document.date}</p>
                          <span className="text-[11px]">{document.span}</span>
                        </div>
                      </div>
                      <img
                        src={document.image2}
                        alt=""
                        className="opacity-85 text-black"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <hr className="w-[1px] h-full bg-gray-400" />

              <div className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold mobile:ml-3">
                  Department Clearance
                </h2>
                <div className="flex flex-col gap-3 mobile:grid mobile:grid-cols-2 ">
                  {departmentFiles.map((document, index) => (
                    <div
                      className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                      key={index}
                    >
                      <img src={document.image1} alt="" className="w-5 h-7" />
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-[13px]  opacity-85">
                          {document.header}
                        </h2>
                        <div className="flex flex-row gap-4 text-black opacity-60">
                          <p className="text-[11px]">{document.date}</p>
                          <span className="text-[11px]">{document.span}</span>
                        </div>
                      </div>
                      <img
                        src={document.image2}
                        alt=""
                        className=" opacity-85"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <hr className="w-[1px] h-full bg-gray-400" />
              <div className="flex flex-col gap-4">
                <h2 className="text-[16px] font-semibold mobile:ml-3">
                  Financial Clearance
                </h2>
                <div className="flex flex-col gap-3 mobile:grid mobile:grid-cols-2 ">
                  {departmentFiles.map((document, index) => (
                    <div
                      className="flex flex-row items-center gap-5 border-2 rounded-md p-2"
                      key={index}
                    >
                      <img src={document.image1} alt="" className="w-5 h-7" />
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-[13px]  opacity-85">
                          {document.header}
                        </h2>
                        <div className="flex flex-row gap-4 text-black opacity-60">
                          <p className="text-[11px]">{document.date}</p>
                          <span className="text-[11px]">{document.span}</span>
                        </div>
                      </div>
                      <img
                        src={document.image2}
                        alt=""
                        className=" opacity-85"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
