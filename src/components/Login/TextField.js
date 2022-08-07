import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { useState } from "react";

const TextField = ({ label, ...props }) => {
  const { name, placeholder, autoComplete, type = "text", toggleable } = props;
  const [field, meta] = useField(props);
  const [isHiding, setIsHiding] = useState(true);
  const [fieldType, setFieldType] = useState(type);
  const newProps = { name, placeholder, autoComplete, type: fieldType };

  const handleToggle = () => {
    setFieldType(fieldType === "password" ? "text" : "password");
    setIsHiding(!isHiding);
  };

  const viewIconProps = {
    pos: "absolute",
    zIndex: 2,
    right: 2.5,
    onClick: handleToggle,
    color: "gray.500",
  };

  const viewIcon = isHiding ? (
    <ViewOffIcon {...viewIconProps} />
  ) : (
    <ViewIcon {...viewIconProps} />
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
