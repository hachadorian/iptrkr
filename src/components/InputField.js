import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const InputField = (props) => {
  return (
    <form className="relative text-gray-700">
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="w-full rounded-lg bg-white py-3 px-4"
        placeholder={props.placeholder}
      />
      <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg">
        <MdOutlineArrowForwardIos />
      </button>
    </form>
  );
};

export default InputField;
