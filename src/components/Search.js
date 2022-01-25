import React, { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { fetchData } from "../util/fetch";

const Search = ({ setData }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchData(search);
    setData(data);
  };

  return (
    <form className="w-1/2 flex flex-col font-Rubik" onSubmit={handleSubmit}>
      <div className="text-white font-bold text-3xl py-8 text-center">
        IP Address Tracker
      </div>
      <div className="relative">
        <input
          name="ip"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg bg-white py-3 px-4"
          placeholder="Search for any IP address or domain"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </form>
  );
};

export default Search;
