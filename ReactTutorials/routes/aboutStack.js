import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: 'About GameZone'
    },
  },
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;