import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Services
import API from "../../service/infoApi";
import FORECAST_API from "../../service/forecastApi";

// Interfaces
import { CityInfoProps } from "../../utils/types/cityResponse";
import { ForecastProps } from "../../utils/types/forecastResponse";

import * as S from "./styles";
import ForecastCard from "../../components/ForecastCard";
import { useTheme } from "styled-components";

const { width } = Dimensions.get("window");

type WeatherProps = {
	WeatherInfo: {
		cityName: string;
	};
};

const WeatherInfo: React.FC = () => {
	const routes = useRoute<RouteProp<WeatherProps, "WeatherInfo">>();
	const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
	const theme = useTheme();

	const [info, setInfo] = useState<CityInfoProps>();
	const [forecastData, setForecastData] = useState<ForecastProps[]>();

	useEffect(() => {
		navigation.setOptions({ title: routes.params.cityName });
	}, []);

	useEffect(() => {
		async function loadCityInfo() {
			const { data } = await API.get(
				`&q=${routes.params.cityName}&units=metric`
			);
			const forecast = await FORECAST_API.get(
				`&q=${routes.params.cityName}&units=metric`
			);
			setForecastData(forecast.data.list);
			setInfo(data);
		}
		loadCityInfo();
	}, []);

	return (
		<>
			{info && forecastData ? (
				<S.Container>
					<S.SectionTitle>Current Weather</S.SectionTitle>
					<S.TempContainer>
						<S.ConditionContainer>
							<S.ConditionIcon
								source={{
									uri: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
								}}
							/>
							<S.ConditionText>
								{info.weather[0].main}
							</S.ConditionText>
							<Text style={{ color: theme.colors.white }}>
								{info.weather[0].description}
							</Text>
						</S.ConditionContainer>

						<S.NumberContainer>
							<S.CelsiusText>{info.main.temp.toFixed(1)}°</S.CelsiusText>
							<Text style={{ color: theme.colors.white }}>
								Feels like {info.main.feels_like.toFixed(1)}°
							</Text>
						</S.NumberContainer>
					</S.TempContainer>

					<S.InfoContainer>
						<S.InfoAligner>
							<Feather name="wind" size={21} />
							<S.InfoValue>{info.wind.speed}</S.InfoValue>
							<S.InfoValue style={{ fontSize: theme.textSizes.xsmall }}>SPEED</S.InfoValue>
						</S.InfoAligner>
						<S.InfoAligner>
							<Feather name="droplet" size={21} />
							<S.InfoValue>{info.main.humidity}%</S.InfoValue>
							<S.InfoValue style={{ fontSize: theme.textSizes.xsmall }}>HUMIDITY</S.InfoValue>
						</S.InfoAligner>
						<S.InfoAligner>
							<Ionicons name="timer-outline" size={21} />
							<S.InfoValue>{info.main.pressure}</S.InfoValue>
							<S.InfoValue style={{ fontSize: theme.textSizes.xsmall }}>PRESSURE</S.InfoValue>
						</S.InfoAligner>
					</S.InfoContainer>

					<S.SectionTitle>Future Weather</S.SectionTitle>
					<FlatList
						style={{
							flexGrow: 0,
							marginTop: 35,
							marginHorizontal: 15,
						}}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={forecastData}
						keyExtractor={(fData) => fData.dt_txt}
						renderItem={({ item }) => <ForecastCard itemData={item} />}
					/>
				</S.Container>
			) : (
				<S.LoadingContainer>
					<LottieView 
						autoPlay
						loop
						source={require('../../utils/lotties/weather_loading.json')}
					/>
				</S.LoadingContainer>
			)}
		</>
	);
};

export default WeatherInfo;
