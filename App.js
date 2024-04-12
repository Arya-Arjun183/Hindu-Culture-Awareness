import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Menu from "./src/screens/Menu";
import Verses_Translations from "./src/screens/Verses_Translations";
import Gods_Godesses from "./src/screens/Gods_Godesses";
import Festivals from "./src/screens/Festivals";
import GitaHomePage from "./src/screens/GitaHomePage";
import Chapter_Template from "./src/screens/Chapter_Template";
import Gods_Template from "./src/screens/Gods_Template";
import Festival_Template from "./src/screens/Festival_Template";
import Science_Template from "./src/screens/Science_Template";
import Science from "./src/screens/Science";
import AppHome from "./src/screens/AppHome";

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
    <TouchableOpacity onPress={(props) => props.navigation.navigate("AppHome")}>
							<img src = {home} width={50} height={50}/>
		</TouchableOpacity>
  );
}

const navigator = createStackNavigator(
  {
    AppHome: AppHome,
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        title: `Main Menu`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Verses_Translations: {
      screen: Verses_Translations,
      navigationOptions: ({ navigation }) => ({
        title: `Verses and Translations`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Gods_Godesses: {
      screen: Gods_Godesses,
      navigationOptions: ({ navigation }) => ({
        title: `Gods and Godesses`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Festivals: {
      screen: Festivals,
      navigationOptions: ({ navigation }) => ({
        title: `Festivals`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>AppHome
      </TouchableOpacity>
      }),
    },
    GitaHomePage: {
      screen: GitaHomePage,
      navigationOptions: ({ navigation }) => ({
        title: `Gita Verses`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Chapter_Template: {
      screen: Chapter_Template,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
							<img src = {home} width={50} height={50}/>
		  </TouchableOpacity>
      }),
    },
    Gods_Template:  {
      screen: Gods_Template,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.Name}`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Festivals_Template:  {
      screen: Festival_Template,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.Name}`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Science: {
      screen: Science,
      navigationOptions: ({navigation}) => ({
        title: `The Science Behind Hinduism`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },
    Science_Template:  {
      screen: Science_Template,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.Name}`,
        headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate("AppHome")}>
        <img src = {home} width={50} height={50}/>
      </TouchableOpacity>
      }),
    },

  },
  {
    initialRouteName: "AppHome",
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
