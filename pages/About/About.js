import { View } from "react-native";
import { useNavigate } from "react-router-native";
import { Text, Button } from "native-base";

const About = () => {
  const navigate = useNavigate();

  return (
    <View>
      <Text>About</Text>
      <Button onPress={() => navigate(-1)}>Go Back</Button>
    </View>
  );
};

export default About;
