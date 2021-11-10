import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface CityCardProps {
	cityData: CityProps;
}

interface CityProps {
	id: string;
	name: string;
	country: string;
	cover: string;
}

const CityCard: React.FC<CityCardProps> = ({ cityData }) => {

	const theme = useTheme();
	const navigation = useNavigation<NativeStackNavigationProp<any,any>>();

	return (
		<S.CityContainer onPress={() => navigation.navigate('WeatherInfo', { cityName: cityData.name })}>
			<S.CityCover source={{ uri: cityData.cover }} />
			<S.Gradient colors={[theme.colors.transparent, theme.colors.black]} />
			<View style={{ paddingLeft: 25 }} >
				<S.CityName>{cityData.name}</S.CityName>
				<S.CityCountry>{cityData.country}</S.CityCountry>
			</View>
		</S.CityContainer>
	);
}

export default memo(CityCard);
