import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faBolt,
  faCog,
  faColumns,
  faMusic,
  faT,
  faPlus,
  faUserPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";

function VideoEditor() {
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);
  const [change, setchage] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    
    }
  };

  return (
    <div className="flex  w-full cursor-pointer justify-start gap-4 ">
      <div className="md:w-[5%] w-[10%] text-[8px] md:text-[15px] border-black border-r h-[100vh] bg-white z-[2] ">
        <div className=" space-y-10 mt-5 font-[20px]">
          <div className="flex justify-center">
            {!change ? (
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-500"
                onClick={() => setchage(true)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-500"
                onClick={() => setchage(false)}
              />
            )}
          </div>

          <div className="flex flex-col items-center  group cursor-pointer">
            <FontAwesomeIcon
              icon={faCog}
              className="hover:bg-blue-500 p-3 px-3 rounded-full bg-gray-300 text-white"
            />
            <span className="group-hover:text-blue-500">Setings</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <FontAwesomeIcon
              icon={faPlus}
              className="bg-gray-300 text-white px-2 py-2 font-bold rounded-md hover:bg-blue-500"
            />
            <span className="group-hover:text-blue-500">Media</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <FontAwesomeIcon
              icon={faMusic}
              className="hover:bg-blue-500 bg-gray-300 text-white px-2 py-2 font-bold rounded-md"
            />
            <span className="group-hover:text-blue-500">Music</span>
          </div>

          <div className="flex flex-col items-center  group cursor-pointer">
            <FontAwesomeIcon
              icon={faT}
              className="hover:bg-blue-500 bg-gray-300 text-white px-2 py-2 font-bold rounded-md"
            />
            <span className="group-hover:text-blue-500">Text</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <FontAwesomeIcon
              icon={faColumns}
              className="hover:bg-blue-500  bg-gray-300 text-white px-2 py-2 font-bold rounded-md"
            />
            <span className="group-hover:text-blue-500">Templates</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <FontAwesomeIcon
              icon={faColumns}
              className="hover:bg-blue-500  bg-gray-300 text-white px-2 py-2 font-bold rounded-md"
            />
            <span className="group-hover:text-blue-500">Element</span>
          </div>
        </div>
      </div>

      {/* <div className={` ${!change ? " w-full md:w-2/6 absolute lg:relative z-5" : "w-0"} `}> */}
        {/* <div
          className={`
          ${!change ? "left-0 " : "-left-[450px]"} 
          transition-all duration-1000  h-[100vh] p-5 border-black border-r relative z-[-1]`}
        > */}
          <div className={`${!change ?  " absolute md:w-[25%] w-full md:left-0 left-[32px] p-2   bg-white md:relative border-black border-r" : " hidden"} transition-all duration-500 w-[300px]`}>
          <div className="mt-4">
            <h1 className=" font-bold text-[15px] md:text-[20px]">Project Setting</h1>
            <div>
              <div className="flex flex-col mt-3 gap-4 6  text-[10px] md:text-[15px]">
                <span>Size</span>
                <select className=" rounded-xl py-3 px-3 bg-white border  ">
                  <option>Original(16.9)</option>
                </select>
              </div>

              <div className=" mt-5 space-y-12">
                <div className="text-[10px] md:text-[18px]">
                  <span className="">Background</span>
                  <div className="border  flex justify-between py-3 px-3 rounded-md">
                    <div className="flex gap-4">
                      <input type="radio" />
                      <span>Color</span>
                    </div>

                    <div className=" flex gap-4">
                      <span>#000000</span>
                      <span>B</span>
                    </div>
                  </div>
                  <div className="border  flex justify-between py-3 px-3 rounded-md">
                    <div className="flex gap-4">
                      <input type="radio" />
                      <span>Image</span>
                    </div>

                    <div className=" flex gap-4">
                      <span className="text-gray-400">update</span>
                    </div>
                  </div>
                </div>
                <div className="border  flex justify-between  py-3 px-3 rounded-md items-center text-[10px] md:text-[15px]">
                  <FontAwesomeIcon icon={faStar} />
                  <div className="flex flex-col">
                    <span>Clean Audio</span>
                    <span className="text-gray-400 text-[13px]">
                      Remove Background noise
                    </span>
                  </div>

                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-white bg-orange-500 px-3 py-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}
      {/* </div> */}

     <div className="flex flex-col md:w-[60%] w-[100%] ">
     <div className="flex justify-between items-center w-[100%] mt-5 px-5 ">
        <div className="text-[10px] md:text-[18px]   ">Project Name</div>

        <div className=" flex items-center gap-3">
          <div className="flex">
            <FontAwesomeIcon icon={faAngleLeft}  className="w-[25%] md:w-full"/>
            <FontAwesomeIcon icon={faAngleRight} className="w-[25%] md:w-full" />
          </div>
          <div className="md:py-2 md:px-4 p-1 gap-3 flex bg-gray-200 items-center rounded-sm hover:bg-orange-300">
            <span className="text-[9px] md:text-[15px]">invite</span>
            <FontAwesomeIcon icon={faUserPlus}  className="w-[25%] md:w-full"/>
          </div>

          <div className="md:py-2 md:px-6 p-1 bg-black text-white gap-3 flex  items-center rounded-sm hover:bg-orange-300">
            <span className="text-[9px] md:text-[15px]" >Done</span>
            {/* <FontAwesomeIcon icon={f}/> */}
          </div>
        </div>

      
      </div>
     <div className="flex flex-col items-baseline mt-4">
        <h1 className="md:text-[18px] text-[10px] ">Add Video</h1>
        <label htmlFor="file">
          <h1 className="bg-blue-400 md:py-1 md:px-4 mt-5 rounded-lg w-[100%] p-2 md:w-full md:text-[15px] text-[8px] text-center" >Upload</h1>
          <input
            type="file"
            onChange={handleFileChange}
            name="file"
            id="file"
            placeholder="Upload"
            className="hidden"
          />
        </label>
      </div>
      {videoSrc && (
        <div>
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            className="h-[70vh] w-[100%] mt-6"
          />
        </div>
      )}

      
     </div>
    </div>
  );
}

export default VideoEditor;
