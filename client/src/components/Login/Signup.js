import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { formSchema } from "@whatsapp-clone-chakra-ui/common";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { http } from "../../services";
import TextField from "./TextField";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "", confirmPassword: "" }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        http
          .post("auth/register", { ...values })
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
