import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formSchema } from "../../../common";
import { http } from "../../services";
import TextField from "./TextField";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        http
          .post("auth/login", { ...values })
          .catch((err) => {
            return;
          })
          .then((res) => {
            if (!res || !res.ok || res.status >= 400) return;
            return res.json();
          })
          .then((data) => {
            if (!data) return;
            console.table(data);
          });
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
          placeholder="Enter username..."
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
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button
            onClick={() => navigate("/register")}
            rightIcon={<ArrowForwardIcon />}
          >
            Register
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Login;
