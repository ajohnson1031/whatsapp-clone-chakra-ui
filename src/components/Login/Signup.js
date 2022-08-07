import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "./TextField";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username must be between 6 and 30 characters")
          .max(30, "Username must be between 6 and 30 characters"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password must be between 6 and 12 characters")
          .max(12, "Password must be between 6 and 12 characters"),
        confirmPassword: Yup.string()
          .required("Password confirmation field required")
          .min(6, "Password must be between 6 and 12 characters")
          .max(12, "Password must be between 6 and 12 characters")
          .oneOf([Yup.ref("password"), null], "Password fields must match"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        // actions.resetForm();
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Sign Up</Heading>
        <TextField
          name="username"
          placeholder="Enter desired username..."
          autoComplete="off"
          label="Username"
        />

        <TextField
          name="password"
          placeholder="Enter password..."
          autoComplete="off"
          label="Password"
          type="password"
          toggleable={true}
        />

        <TextField
          name="confirmPassword"
          placeholder="Re-enter password..."
          autoComplete="off"
          label="Confirm Password"
          type="password"
          toggleable={true}
        />
        <ButtonGroup pt="1rem">
          <Button onClick={() => navigate("/")} leftIcon={<ArrowBackIcon />}>
            Back
          </Button>
          <Button colorScheme="teal" type="submit">
            Create Account
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default SignUp;
