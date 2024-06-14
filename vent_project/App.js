import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen1 from "./src/screens/TestScreen1";
import TestScreen2 from "./src/screens/TestScreen2";
import TestScreen3 from "./src/screens/TestScreen3";
import Drawer from "./src/components/Drawer";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test1: TestScreen1,
    Test2: TestScreen2,
    Test3: TestScreen3,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
