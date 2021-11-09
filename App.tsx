import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { View } from 'react-native';
import React, { useEffect } from 'react';

import Routes from './src/routes/main.routes';
import Theme from './src/utils/uikit/themes/default';
import reactotron from 'reactotron-react-native';

reactotron.configure().useReactNative()

const App: React.FC = () => {

	useEffect(() => {
		if (__DEV__) {
			reactotron.connect()
		}
	}, [])

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
