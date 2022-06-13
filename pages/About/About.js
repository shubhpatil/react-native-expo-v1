import { View, Text } from "react-native";
import { Button } from "native-base";

const About = ({ navigation }) => {
  return (
    <View>
      <Text>About</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </View>
  );
};

export default About;
