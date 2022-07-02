import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Verses_Translations from "./src/screens/Verses_Translations";
import Gods_Godesses from "./src/screens/Gods_Godesses";
import Festivals from "./src/screens/Festivals";
import GitaHomePage from "./src/screens/GitaHomePage";
import Chapter_Template from "./src/screens/Gita-Chapters/Chapter_Template";
import Vishnu from "./src/screens/Gods_Godesses_SubPages/Vishnu";

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Verses_Translations: Verses_Translations,
    Gods_Godesses: Gods_Godesses,
    Festivals: Festivals,
    GitaHomePage:GitaHomePage,
    Chapter_Template:Chapter_Template,
    Vishnu: Vishnu,

  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      title: "",
    },
  }
);

export default createAppContainer(navigator);
