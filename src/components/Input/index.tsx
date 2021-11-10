import React from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps, View } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components";

interface CityInputProps extends TextInputProps {
	btnAction: Function;
	disabled: boolean;
}

const Input: React.FC<CityInputProps> = ({ btnAction, disabled, ...rest }) => {
	const theme = useTheme();

	return (
		<View style={{ flexDirection: "row" }}>
			<S.InputContainer>
				<Feather size={18} name="search" />
				<S.InputField {...rest} />
			</S.InputContainer>
			<S.GoBtn disabled={disabled} onPress={() => btnAction()}>
				<Feather color={theme.colors.white} size={18} name="chevron-right" />
			</S.GoBtn>
		</View>
	);
};

export default Input;
