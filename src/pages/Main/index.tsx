import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import CityCard from '../../components/CityCard';

import { Cities } from '../../utils/citiesList';

const Main: React.FC = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }} >
			<FlatList
				ListHeaderComponent={
					<>
						<Text>Hello, user!</Text>
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
