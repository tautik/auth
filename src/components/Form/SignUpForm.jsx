import { Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const SignUpForm = () => {
  return (
    <div className="bg-blue-50 w-[24rem] h-[28rem]">
      <Formik
        initialValues={{ email: "", password: "", position: "", name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form className="flex flex-col justify-evenly items-center h-full">
            <CustomInput label="Name" name="name" type="text" />
            <CustomInput label="Email" name="email" type="email" />
            <CustomInput label="Password" name="password" type="password" />
            <CustomSelect label="Position" name="position" type="text">
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="other">Other</option>
            </CustomSelect>

            <button className="px-2 py-2 bg-black text-white" type="submit">
              Submit here
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
