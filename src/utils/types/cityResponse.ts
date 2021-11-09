interface CoordProps {
	lon: number;
	lat: number;
}

interface WeatherProps {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface MainProps {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface WindProps {
	speed: number;
	deg: number;
}

interface SysProps {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

export interface CityInfoProps {
	coord: CoordProps;
  weather: Array<WeatherProps>;
  base: string;
  main: MainProps
  visibility: number;
  wind: WindProps
  dt: number;
  sys: SysProps;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}