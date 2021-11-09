import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
	align-items: center;

	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 25px;
	padding-right: 25px;

	margin-left: 5px;
	margin-right: 5px;

	background-color: #5D71F6;
	border-radius: 15px;
`;

export const WhiteText = styled.Text`
	color: #FFF;
	font-size: 20px;
`;

export const WIcon = styled.Image`
	width: 64px;
	height: 64px;
`;
