import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
// import DrawerComponent from "../components/Drawer/Drawer";

// ROUTES
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerComponent /> */}
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => navigation.navigate("About")} />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      backBehavior="history"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default function Navigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
