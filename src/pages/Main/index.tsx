import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import CityCard from '../../components/CityCard';
import Input from '../../components/Input';

import { Cities } from '../../utils/citiesList';

const Main: React.FC = () => {

	const navigation = useNavigation<NativeStackNavigationProp<any,any>>();
	const [cityName, setCityName] = useState("");

	return (
		<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }} >
			<FlatList
				ListHeaderComponent={
					<>
						<Text>Hello, user!</Text>
						<Input 
							btnAction={() => navigation.navigate('WeatherInfo', { cityName: cityName.trim().replace(/ /g, '%20') })}
							disabled={!cityName}
							value={cityName}
							onChangeText={setCityName}
						/>
					</>
				}
				style={{ marginTop: 12, marginBottom: 12 }}
				data={Cities}
				showsVerticalScrollIndicator={false}
				keyExtractor={city => city.id}
				renderItem={({ item }) => (
					<CityCard 
						key={item.id} 
						coverUrl={item.cover} 
						cityName={item.name}
						country={item.country}
					/>
				)}
			/>
		</View>
	);
}

export default Main;
