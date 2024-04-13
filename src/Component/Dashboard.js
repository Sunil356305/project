import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faPlus,
  faHouse,
  faFolder,
  faWifi3,
  faBolt,
  faAngleLeft,
  faMagnifyingGlass,
  faXmark,
  faUserPlus,
  faQuestion,
  faBell,
  faScissors,
  faVideoCamera,
  faWifi,
  faMicrophone,
  faBars,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import img2 from ".//Images/p.png";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [change, setchange] = useState(true);
  return (
    <div className="flex  space-x-8 ite">
      {/* <FontAwesomeIcon
            icon={faBars}
            onClick={() => setchange((change) => !change)}
          /> */}
      <div
        className={`${
          change
            ? "sm:w-[30%] w-full  overflow-hidden "
            : "sm:w-[5%]   overflow-hidden space-y-8"
        } left_side transition-all duration-500 justify-start flex-col  flex items-start h-[100vh] shadow-2xl  md:p-4  bg-white space-y-4 absolute md:relative `}
      >
        <div className=" flex w-full justify-between items-center">
          <p className="w-6/12">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setchange((change) => !change)}
            />
          </p>
          <p
            className={`${
              !change ? "hidden" : ""
            } text-[23px] w-6/12 font-bold `}
          >
            VEED.IO
          </p>
        </div>
        <div className=" w-full flex justify-between items-center ">
          <p
            className={` bg-green-500 text-white px-2 py-2  rounded-md font-bold`}
          >
            S
          </p>
          <div>
            <span className={`${!change ? "hidden" : "inline-block "} `}>
              {" "}
              Sunil mehra
            </span>
          </div>
        </div>

        <div className=" space-y-5 w-full flex items-start justify-center flex-col  capitalize cursor-pointer">
          <div className="flex  justify-between bg-blue-400 text-white w-full p-2 items-center rounded-md">
            <p className={`w-[10%] ${change ? "text-center" : "text-left"}`}>
              <FontAwesomeIcon icon={faPlus} className="" />
            </p>
            <p
              className={` ${
                !change ? "hidden" : "inline-block "
              } w-6/12  whitespace-nowrap text-right transition-all duration-500`}
            >
              New Videos
            </p>
          </div>
          <div className=" flex w-full justify-start  items-center gap-4 hover:bg-gray-200 p-2 rounded-md">
            <p className="">
              <FontAwesomeIcon icon={faHouse} />
            </p>
            <p
              className={` ${
                !change ? "hidden" : "inline-block "
              } transition-all duration-500`}
            >
              Home
            </p>
          </div>

          <div className=" flex  items-center w-full justify-start gap-4 hover:bg-gray-200 p-2 rounded-md">
            <FontAwesomeIcon icon={faPlus} />
            <span
              className={` ${
                !change ? "hidden" : "inline-block "
              }  transition-all duration-500`}
            >
              Template
            </span>
          </div>
          <div className=" flex  items-center w-full justify-start gap-4 hover:bg-gray-200 p-2 rounded-md">
            <FontAwesomeIcon icon={faFolder} />
            <span
              className={`  ${
                !change ? "hidden" : "inline-block "
              } transition-all duration-500`}
            >
              All videos
            </span>
          </div>
          <div className=" flex  items-center w-full justify-start gap-4 hover:bg-gray-200 p-2 rounded-md">
            <FontAwesomeIcon icon={faWifi3} />
            <span
              className={` ${
                !change ? "hidden" : "inline-block "
              }  whitespace-nowrap`}
            >
              Podcast & Shows
            </span>
          </div>
          <div className=" flex   gap-4 hover:bg-gray-200 p-1nh justify-between rounded-md">
          <FontAwesomeIcon
              icon={faBolt}
              className={` text-white bg-orange-500 p-2 rounded-md`}
            />
            <div className={` ${
                !change ? "hidden" : "inline-block "
              }  whitespace-nowrap`}>
              
              <span className={``}>Brand Kit</span>
            </div>
            
          </div>
        </div>
      </div>

      <div className="right_menu w-[90%] mt-5 px-3">
        <div className="hidden lg:block">
          <div className="nav flex justify-between px-3 ">
            <div className="flex  items-center gap-3 w-[15%] ">
              <FontAwesomeIcon icon={faAngleLeft} />
              <div className="border flex justify-between items-center px-3  bg-white rounded-md">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <input
                    type="text"
                    className="py-2 px-5 outline-none"
                    placeholder="search"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="px-2 py-1 rounded-full bg-gray-300"
                />
              </div>
            </div>
            <div className="flex w-[30%] justify-between items-center">
              <div className="py-2 px-4 gap-3 flex bg-gray-200 items-center rounded-sm hover:bg-orange-300">
                <span>Upgrade</span>
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <div className="py-2 px-4 gap-3 flex bg-gray-200 items-center rounded-sm hover:bg-orange-300">
                <span>invite</span>
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <FontAwesomeIcon icon={faQuestion} />
              <FontAwesomeIcon icon={faBell} />
              <span className="border py-2 px-3 rounded-full bg-purple-300">
                SM
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[30px] mt-8">
            Lets Create Some <span className="font-bold">Videos!</span>
          </h1>
          <div className="mt-5 flex gap-5 flex-wrap">
            <Link to="/gh">
              <div className=" flex justify-between w-[200px] items-center bg-gray-200 py-3 px-4 rounded-lg ">
                <FontAwesomeIcon
                  icon={faScissors}
                  className="bg-pink-300 rounded-lg px-2 py-2 "
                />
                <span>Create Project</span>
              </div>
            </Link>
            <Link to="/gh">
            <div className=" flex justify-between w-[200px] items-center bg-gray-200 py-3 px-4 rounded-lg ">
              <FontAwesomeIcon
                icon={faVideoCamera}
                className="bg-pink-300 rounded-lg px-2 py-2 "
              />
              <span>Record Video</span>
            </div>
            </Link>
            
           <Link to="/gh">
           <div className=" flex justify-between w-[200px] items-center bg-gray-200 py-3 px-4 rounded-lg ">
              <FontAwesomeIcon
                icon={faWifi}
                className="bg-pink-300 rounded-lg px-2 py-2 "
              />
              <span>Golive</span>
            </div>
           </Link>
           <Link to = "/gh">
           
           <div className=" flex justify-between w-[200px] items-center bg-gray-200 py-3 px-4 rounded-lg ">
              <FontAwesomeIcon
                icon={faMicrophone}
                className="bg-pink-300 rounded-lg px-2 py-2 "
              />
              <span>Record Podcast</span>
            </div>
           </Link>
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-9  items-center">
            <div className="">My Recents Videos</div>
            <div className="flex  gap-2 items-center">
              <span>All Videos</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>

          <Link to = "/gh">
          <img src={img2} className="mt-3 rounded-md" />
          </Link>
          <span className=" capitilize ">project name</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
