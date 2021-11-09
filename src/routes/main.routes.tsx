import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import Main from '../pages/Main';
import WeatherInfo from '../pages/WeatherInfo';

const MainStack = createNativeStackNavigator()

const MainRoutes: React.FC = () => {
  return (
    <MainStack.Navigator
			initialRouteName="Home"
    >
			<MainStack.Screen component={Main} name="Home" />
			<MainStack.Screen options={{ title: " " }} component={WeatherInfo} name="WeatherInfo" />
    </MainStack.Navigator>
  );
}

export default MainRoutes;
