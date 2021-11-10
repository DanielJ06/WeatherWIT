import { format, parseISO } from "date-fns";
import React from "react";
import { useTheme } from "styled-components";

import { ForecastProps } from "../../utils/types/forecastResponse";

import * as S from "./styles";

type ForecastCardProps = {
	itemData: ForecastProps;
};

const ForecastCard: React.FC<ForecastCardProps> = ({ itemData }) => {
	const theme = useTheme();

	return (
		<S.Container>
			<S.WhiteText style={{ fontWeight: "bold" }}>
				{itemData.main.temp.toFixed()}°
			</S.WhiteText>
			<S.WIcon
				source={{
					uri: `https://openweathermap.org/img/wn/${itemData.weather[0].icon}@2x.png`,
				}}
			/>
			<S.WhiteText style={{ fontSize: theme.textSizes.regular }}>
				{format(parseISO(itemData.dt_txt), "M/d")}
			</S.WhiteText>
			<S.WhiteText style={{ fontSize: theme.textSizes.regular }}>
				{format(parseISO(itemData.dt_txt), "h:mm aa")}
			</S.WhiteText>
		</S.Container>
	);
};

export default ForecastCard;
