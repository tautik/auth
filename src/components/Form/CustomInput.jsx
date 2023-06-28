import React from "react";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <div className="flex justify-between bg-red-200 w-[90%] mx-auto  py-1">
      <label>{label}</label>
      <input className="w-[80%] px-1 bg-green-300" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
