import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { View } from 'react-native';

import Routes from './src/routes/main.routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar style="dark" />
			<View
				style={{
					height: Constants.statusBarHeight,
					width: '100%',
				}}
			/>
			<Routes />
		</NavigationContainer>
	);
}

export default App;
