import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import Navigationbar from "./Navigationbar";
import TextField from "./TextField";

function Contact() {
  const serviceID = "service_s8lh0ww";
  const tempelateID = "template_qm0ynx9";
  const USERID = "user_ioKxj7d8pfyJDQmo10C2s";

  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    message: Yup.string()
      .min(7, "More details are always helpful.")
      .required("Required")
  });
  const handleSubmit = (e) => {
    emailjs.send(serviceID, tempelateID, e, USERID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    return false;
  };
  return (
    <div>
      <Navigationbar />
      <h2 className="mt-5 text-center">Contact Us</h2>
      <div className="mt-5 container">
        <div className="form">
          <Formik
            initialValues={{
              name: " ",
              email: " ",
              message: " "
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form autoComplete="off">
                <TextField
                  type="text"
                  label="Name"
                  placeholder=""
                  name="name"
                />
                <TextField
                  type="email"
                  label="Email"
                  placeholder=""
                  name="email"
                />
                <TextField
                  rows="4"
                  label="Message"
                  placeholder=""
                  name="message"
                />
                <button
                  className="btn btn-block btn-primary btn-lg custom-btn mt-5 pull-right"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
