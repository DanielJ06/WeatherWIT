interface MainProps {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface WeatherProps {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface ForecastProps {
	dt_txt: string;
	main: MainProps;
	weather: Array<WeatherProps>;
}
