import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <div className="   w-[90%] mx-auto  py-1">
      <div className="flex justify-between">
        <label>{label}</label>
        <input className="w-[80%] px-1 bg-green-300" {...field} {...props} />
      </div>

      {meta.touched && meta.error ? (
        <div className={`${meta.touched && "text-left text-red-500 text-sm"} `}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
