import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

interface CityCardProps {
	coverUrl: string;
	cityName: string;
	country: string;
}

const CityCard: React.FC<CityCardProps> = ({ coverUrl, cityName, country }) => {
	const navigation = useNavigation<NativeStackNavigationProp<any,any>>();

	return (
		<S.CityContainer onPress={() => navigation.navigate('WeatherInfo', { cityName })}>
			<S.CityCover source={{ uri: coverUrl }} />
			<S.Gradient colors={['#00000000', '#000000']} />
			<View style={{ paddingLeft: 25 }} >
				<S.CityName>{cityName}</S.CityName>
				<S.CityCountry>{country}</S.CityCountry>
			</View>
		</S.CityContainer>
	);
}

export default CityCard;
