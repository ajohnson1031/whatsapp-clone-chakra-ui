import { VStack, ButtonGroup, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username must be between 6 and 30 characters")
          .max(30, "Username must be between 6 and 30 characters"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password must be between 6 and 12 characters")
          .max(12, "Password must be between 6 and 12 characters"),
      })}
      onSubmit={(values, actions) => {
        actions.alert(JSON.stringify(values, null, 2));
        actions.resetForm();
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
        <Heading>Log In</Heading>
        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />

        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
        />
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button onClick={() => navigate("/register")}>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;