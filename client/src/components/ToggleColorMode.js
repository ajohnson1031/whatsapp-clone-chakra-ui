import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon =
    colorMode === "dark" ? (
      <SunIcon color="orange.300" />
    ) : (
      <MoonIcon color="blue.500" />
    );

  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
    >
      {icon}
    </Button>
  );
};

export default ToggleColorMode;
