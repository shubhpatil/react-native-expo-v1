import { Text, View, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Divider, Flex } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import DarkMode from "../Dark Mode/DarkMode";

const Drawer = (props) => {
  const { navigation } = props;

  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={{ marginBottom: 20, alignItems: "center" }}>
          {/* Drawer Background Image */}
          <ImageBackground
            source={require("../../assets/DrawerBG.jpg")}
            style={{
              height: 150,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Display Picture */}
            <Image
              source={require("../../assets/dp.png")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#fff",
                marginTop: 150,
              }}
            />
          </ImageBackground>

          {/* User Name */}
          <Text style={{ fontWeight: "bold", marginTop: 50 }}>DX</Text>
          {/* <Text style={{fontWeight: 'bold'}} >{ email }</Text> */}
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => navigation.navigate("Home")}
          icon={({ color, size }) => (
            <Icon name="logout" size={size} color={color} />
          )}
        />
      </DrawerContentScrollView>
      <View>
        <Divider />
        <DarkMode />
      </View>
    </>
  );
};

export default Drawer;
