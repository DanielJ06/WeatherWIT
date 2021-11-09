import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const CityContainer = styled.TouchableOpacity`
	width: ${width * 0.9}px;
	height: ${height * 0.6}px;
	margin-top: 12px;
	margin-bottom: 12px;
	border-radius: 15px;

	justify-content: flex-end;
`;

export const CityName = styled.Text`
	font-size: 38px;
	font-weight: bold;
	color: #FFF;
`;

export const CityCountry = styled.Text`
	font-size: 18px;
	color: #FFF;
	margin-bottom: 21px;
`;

export const CityCover = styled.Image`
	width: 100%;
	height: 100%;
	background-color: antiquewhite;
	position: absolute;
	border-radius: 15px;
`;

export const Gradient = styled(LinearGradient)`
	height: 100%; 
	width: 100%; 
	position: absolute; 
	border-radius: 15px;
`;
