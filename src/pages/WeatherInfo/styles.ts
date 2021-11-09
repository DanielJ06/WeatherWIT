import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled.ScrollView`
	flex: 1;
`;

export const TempContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-self: center;

	width: ${width * 0.9}px; 
	height: ${height * 0.2}px;

	margin-top: 25px;
	padding: 20px;

	border-radius: 15px;

	background-color: ${props => props.theme.colors.lightBlue};
`;

export const InfoContainer = styled.View`
	width: ${width * 0.9}px;
	
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	align-self: center;

	padding: 25px;
	margin-top: 20px;

	background-color: ${props => props.theme.colors.white};
	border-radius: 15px;
`;

export const InfoAligner = styled.View`
	flex-direction: column;
	align-items: center;
`;

export const InfoValue = styled.Text`
	margin-top: 10px;
	color: ${props => props.theme.colors.black};
`;

export const ConditionContainer = styled.View`
	align-items: center;
`;

export const ConditionText = styled.Text`
	color: ${props => props.theme.colors.white};
	font-weight: bold;
	font-size: ${props => props.theme.textSizes.medium}px;
`;

export const ConditionIcon = styled.Image`
	width: 80px;
	height: 80px;
`;

export const NumberContainer = styled.View`
	align-items: center;
`;

export const CelsiusText = styled.Text`
	color: ${props => props.theme.colors.white};
	font-weight: bold;
	font-size: ${props => props.theme.textSizes.xlarge}px;
`;

export const SectionTitle = styled.Text`
	font-size: ${props => props.theme.textSizes.bigger}px;
	font-weight: 300;

	margin-top: 20px;
	margin-left: 20px;
	align-self: flex-start;
`;

export const LoadingContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
