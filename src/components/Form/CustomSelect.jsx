// import React from "react";
// import { useField } from "formik";

// const CustomSelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="flex gap-x-3">
//       <label>{label}</label>
//       <select {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// export default CustomSelect;

import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex gap-x-3">
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
export default CustomSelect;
