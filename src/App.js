import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import publicIp from "public-ip";
import { fetchData } from "./util/fetch";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserIP = async () => {
      const res = await publicIp.v4();
      const data = await fetchData(res);
      setTimeout(() => {}, 5000);
      setData(data);
    };

    fetchUserIP();
  }, [data]);

  return (
    <div className="h-screen flex flex-col">
      <header className="h-2/5 bg-yellow-400 flex items-center flex-col">
        <Search setData={setData} />
      </header>
      <div className="h-full">
        <div className="w-full flex justify-center absolute -mt-20 z-1000">
          <Display data={data} />
        </div>
        <Map data={data} />
      </div>
    </div>
  );
};

export default App;
