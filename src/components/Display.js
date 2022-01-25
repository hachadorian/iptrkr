import React from "react";

const Display = ({ data }) => {
  return (
    <div className="w-3/4 bg-white rounded-xl grid lg:grid-cols-4 divide-x py-8 font-Rubik lg:text-left text-center">
      <div className="flex flex-col lg:pl-8">
        <div className="text-gray-400 font-bold text-sm pb-2">IP ADDRESS</div>
        <div className="text-black font-bold text-lg">
          {data ? data.ip : "0.0.0.0"}
        </div>
      </div>
      <div className="flex flex-col lg:pl-8">
        <div className="text-gray-400 font-bold text-sm pb-2">LOCATION</div>
        <div className="text-black font-bold text-lg">
          <div>
            {data
              ? `${data.location.city}, ${data.location.region}`
              : "Location, Region"}
          </div>
          <div>{data ? data.location.postalCode : "Postal Code"}</div>
        </div>
      </div>
      <div className="flex flex-col lg:pl-8">
        <div className="text-gray-400 font-bold text-sm pb-2">TIMEZONE</div>
        <div className="text-black font-bold text-lg">
          UTC {data ? data.location.timezone : "-05:00"}
        </div>
      </div>
      <div className="flex flex-col lg:pl-8">
        <div className="text-gray-400 font-bold text-sm pb-2">ISP</div>
        <div className="text-black font-bold text-lg">
          <div>{data ? data.isp : "Internet Provider"}</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
