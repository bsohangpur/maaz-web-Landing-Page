import React from "react";
import { Box, Grid, Button } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormSubmit, Loading } from "../utils";
import { useForm, ValidationError } from "@formspree/react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [btnToggle, setBtnToggle] = React.useState(false);

  const [state, handleSubmit] = useForm("mjvdjndb");
  if (state.succeeded) {
    return <FormSubmit />;
  }

  return (
    <Box id="contactus" className="py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
      <Box className="relative max-w-4xl mx-auto">
        <Box className="rounded-lg overflow-hidden">
          <Box className="px-4 py-5 sm:p-6">
            <Box>
              {btnToggle ? (
                <Box style={{ height: "70vh" }} className="">
                  <Loading />
                </Box>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ touched, errors }) => (
                    <Form
                      onSubmit={handleSubmit}
                      method="post"
                      encType="multipart/form-data"
                      className="flex justify-center items-center"
                    >
                      <Box className="w-full">
                        <Grid className="grid">
                          <label htmlFor="name" className="text-lg">
                            Name
                          </label>
                          <Field
                            name="name"
                            className="h-10 w-full border-2 my-1 pl-2 outline-none"
                            type="text"
                          />
                          <ErrorMessage
                            name="name"
                            component="Box"
                            className="text-red-500 text-xs"
                          />
                          <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                          />
                        </Grid>
                        <Grid className="grid">
                          <label htmlFor="email" className="text-lg">
                            Email
                          </label>
                          <Field
                            name="email"
                            className="h-10 w-full border-2 my-1 pl-2 outline-none"
                            type="text"
                          />
                          <ErrorMessage
                            name="email"
                            component="Box"
                            className="text-red-500 text-xs"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </Grid>
                        <Grid className="grid">
                          <label htmlFor="phone" className="text-lg">
                            phone
                          </label>
                          <Field
                            name="phone"
                            className="h-10 w-full border-2 my-1 pl-2 outline-none"
                            type="number"
                          />
                          <ErrorMessage
                            name="phone"
                            component="Box"
                            className="text-red-500 text-xs"
                          />
                          <ValidationError
                            prefix="phone"
                            field="phone"
                            errors={state.errors}
                          />
                        </Grid>
                        <Grid className="grid">
                          <label htmlFor="message" className="text-lg">
                            Message
                          </label>
                          <Field
                            name="message"
                            as="textarea"
                            className="h-36 w-full border-2 my-1 pl-2 pt-2 outline-none"
                            rows="10"
                          />
                          <ErrorMessage
                            name="message"
                            component="Box"
                            className="text-red-500 text-xs"
                          />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                        </Grid>
                        <Grid className="grid">
                          <Box className="w-full flex justify-center items-center">
                            <Button
                              type="submit"
                              bg="#6D5843"
                              disabled={btnToggle}
                              className="my-4 w-36 h-10 text-gray-50 hover:text-[#6D5843] disabled:bg-slate-200 disabled:text-black"
                            >
                              Submit
                            </Button>
                          </Box>
                        </Grid>
                      </Box>
                    </Form>
                  )}
                </Formik>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
