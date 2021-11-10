import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${props => props.theme.colors.white};
`;

export const SearchTitle = styled.Text`
	font-size: ${props => props.theme.textSizes.large}px;
	font-weight: 300;
	margin-bottom: 30px;
`;
