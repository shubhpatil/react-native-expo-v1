import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";
import DrawerComponent from "../components/Drawer/Drawer";

// ROUTES
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

// Navigators
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// Custom Drawer
const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerComponent />
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => navigation.navigate("About")} />
    </DrawerContentScrollView>
  );
};

// Drawer Navigator
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="history"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "front", // "slide"
        swipeEnabled: true,
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

// Stack Navigator
// const MyStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Login"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Drawer" component={MyDrawer} />
//     </Stack.Navigator>
//   );
// };

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
