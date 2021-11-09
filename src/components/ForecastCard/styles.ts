import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;

	padding-top: 20px;
	padding-bottom: 20px;
	padding-left: 25px;
	padding-right: 25px;

	margin-left: 5px;
	margin-right: 5px;

	background-color: ${props => props.theme.colors.lightBlue};
	border-radius: 15px;
`;

export const WhiteText = styled.Text`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.textSizes.big}px;
`;

export const WIcon = styled.Image`
	width: 64px;
	height: 64px;
`;
