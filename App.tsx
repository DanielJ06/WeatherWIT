import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { View } from 'react-native';
import React from 'react';

import Routes from './src/routes/main.routes';
import Theme from './src/utils/uikit/themes/default';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={Theme} >
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
		</ThemeProvider>
	);
}

export default App;
