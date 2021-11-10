import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import CityCard from '../../components/CityCard';
import Input from '../../components/Input';
import { Cities } from '../../utils/citiesList';

import * as S from './styles';

const Main: React.FC = () => {

	const navigation = useNavigation<NativeStackNavigationProp<any,any>>();
	const [cityName, setCityName] = useState("");

	return (
		<S.Container>
			<FlatList
				ListHeaderComponent={
					<View style={{ marginBottom: 32 }}>
						<S.SearchTitle>Search a {'\n'}specific place:</S.SearchTitle>
						<Input
							btnAction={() => navigation.navigate('WeatherInfo', { cityName: cityName.trim().replace(/ /g, '%20') })}
							disabled={!cityName}
							value={cityName}
							onChangeText={setCityName}
						/>
					</View>
				}
				style={{ marginTop: 12, marginBottom: 12 }}
				data={Cities}
				showsVerticalScrollIndicator={false}
				keyExtractor={city => city.id}
				renderItem={({ item }) => (
					<CityCard 
						key={item.id} 
						cityData={item}
					/>
				)}
			/>
		</S.Container>
	);
}

export default Main;
