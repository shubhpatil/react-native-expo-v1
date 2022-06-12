import {
  Text,
  HStack,
  Center,
  Heading,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import DarkMode from "../../components/Dark Mode/DarkMode";
import { Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setIncrementCounter } from "../../redux/AppReducer";

const Home = ({ navigation }) => {
  const appRedux = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to NativeBase</Heading>
        <HStack space={2} alignItems="center">
          <Text>Edit DX</Text>
          <Box
            _web={{
              _text: {
                fontFamily: "monospace",
                fontSize: "sm",
              },
            }}
            px={2}
            py={1}
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}
          >
            App.js
          </Box>
          <Text>and save to reload.</Text>
        </HStack>
        <Button onPress={() => dispatch(setIncrementCounter())}>
          {"Counter " + appRedux.counter}
        </Button>
        <Button onPress={() => navigation.navigate("About")}>Goto About</Button>
        <DarkMode />
      </VStack>
    </Center>
  );
};

export default Home;
