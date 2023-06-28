import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import axios from "axios";

import { baseUrl } from "../config/serverConfig";

import Swal from "sweetalert2";
import { advancedSchema } from "./schema";

const SignUpForm = () => {
  return (
    <div className="bg-blue-50 w-[24rem] h-[28rem]">
      <Formik
        initialValues={{ email: "", password: "", position: "", name: "" }}
        validationSchema={advancedSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();

          try {
            const response = await axios.post(`${baseUrl}/v1/signup`, values);
            if (response.status === 201) {
              console.log(response.data);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Succesfully Registered",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } catch (err) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: err,
              showConfirmButton: false,
              timer: 1500,
            });
          }
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
