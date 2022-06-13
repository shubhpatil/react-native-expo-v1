import { Text, HStack, Switch, useColorMode } from "native-base";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack px={5} my={5} alignItems="center">
      <Text color="light.600">Darkmode</Text>
      <Switch
        ml="auto"
        isChecked={colorMode !== "light"}
        onToggle={toggleColorMode}
      />
    </HStack>
  );
};

export default DarkMode;
