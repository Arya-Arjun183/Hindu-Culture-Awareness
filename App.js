import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Verses_Translations from "./src/screens/Verses_Translations";
import Gods_Godesses from "./src/screens/Gods_Godesses";
import Festivals from "./src/screens/Festivals";
import GitaHomePage from "./src/screens/GitaHomePage";
import Chapter_Template from "./src/screens/Chapter_Template";
import Vishnu from "./src/screens/Gods_Godesses_SubPages/Vishnu";

import { Image, TouchableOpacity} from 'react-native';
import home from './assets/favicon.png';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./src/screens/icons/gita-icon.jpeg')}
    />
  );
}
const HomeButton = (props) => {
  return (
    <TouchableOpacity onPress={(props) => props.navigation.navigate("HomeScreen")}>
							<img src = {home} width={50} height={50}/>
		</TouchableOpacity>
  );
}

const navigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    
    Verses_Translations: {
      screen: Verses_Translations,
      navigationOptions: ({ navigation }) => ({
        title: `Verses and Translations`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Gods_Godesses: {
      screen: Gods_Godesses,
      navigationOptions: ({ navigation }) => ({
        title: `Gods and Godesses`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Festivals: {
      screen: Festivals,
      navigationOptions: ({ navigation }) => ({
        title: `Festivals`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    GitaHomePage: {
      screen: GitaHomePage,
      navigationOptions: ({ navigation }) => ({
        title: `Gita Verses`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Chapter_Template: {
      screen: Chapter_Template,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
							<img src = {home} width={50} height={50}/>
		  </TouchableOpacity>
      }),
    },
    Vishnu:  {
      screen: Vishnu,
      navigationOptions: ({ navigation }) => ({
        title: 'Vishnu',
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },

  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions:  {
      title: "",
      headerStyle: {
        backgroundColor: 'darkorange',
      },
      headerTitleAlign: 'center',
      fontSize: 50,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(navigator);
