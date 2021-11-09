import 'styled-components';

declare module 'styled-components' {

	export interface DefaultTheme {

		colors: {
			lightBlue: string;
			white: string;
			black: string;
			transparent: string;
		}

		textSizes: {
			xsmall: number,
			small: number,
			regular: number,
			medium: number,
			big: number,
			bigger: number,
			large: number,
			xlarge: number,
		}

	}

}
