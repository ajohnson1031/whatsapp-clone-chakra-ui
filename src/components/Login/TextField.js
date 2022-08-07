import { useState } from "react";
import {
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const TextField = ({ label, ...props }) => {
  const { name, placeholder, autocomplete, type = "text", toggleable } = props;
  const [field, meta] = useField(props);
  const [isHiding, setIsHiding] = useState(true);
  const [fieldType, setFieldType] = useState(type);
  const newProps = { name, placeholder, autocomplete, type: fieldType };

  const handleToggle = () => {
    setFieldType(fieldType === "password" ? "text" : "password");
    setIsHiding(!isHiding);
  };

  const viewIcon = isHiding ? (
    <ViewOffIcon pos="absolute" zIndex={2} right={2.5} onClick={handleToggle} />
  ) : (
    <ViewIcon pos="absolute" zIndex={2} right={2.5} onClick={handleToggle} />
  );

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input as={Field} {...field} {...newProps} pos="relative" />
        {toggleable && viewIcon}
      </div>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
