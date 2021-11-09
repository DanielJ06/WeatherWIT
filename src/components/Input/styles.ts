import styled from 'styled-components/native';

export const InputContainer = styled.View`
	flex-direction: row;
	align-items: center;

	padding-left: 15px;
	padding-right: 15px;

	flex: 1;
	height: 48px;
	
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;

	background-color: #EEE;
`;

export const GoBtn = styled.TouchableOpacity`
	background-color: ${props => props.theme.colors.lightBlue};
	padding: 15px;

	align-items: center;
	justify-content: center;

	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
`;

export const InputField = styled.TextInput`
	flex: 1;
	font-size: ${props => props.theme.textSizes.regular}px;
	margin-left: 15px; 
`;

