import { Text, View, Image, ImageBackground } from "react-native";

const Drawer = () => {
  return (
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
      {/* <Text style={{fontWeight: 'bold', marginTop:50}} >{ username }</Text>
                <Text style={{fontWeight: 'bold'}} >{ email }</Text> */}
    </View>
  );
};

export default Drawer;
