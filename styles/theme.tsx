import { theme as chakraTheme } from "@chakra-ui/react";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const config: Partial<ThemeConfig> = {
	useSystemColorMode: true,
	initialColorMode: "light",
};

const fluidType = (minFont: any, maxFont: any) => {
	let XX = 768 / 100;
	let YY = (100 * (maxFont - minFont)) / (1920 - 768);
	let ZZ = minFont / 16;
	return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const styles = {
	global: (props: any) => ({
		body: {
			color: mode("#000000", "#FFFFFF")(props),
			bg: mode("#FFFFFF", "#000000")(props),
		},

		"::-webkit-scrollbar": {
			width: "8px",
			background: mode("#FFFFFF", "#000000")(props),
		},
		"::-webkit-scrollbar-thumb": {
			background: mode("#000000", "#FFFFFF")(props),
			borderadius: "8px",
		},
	}),
};

const components = {
	Drawer: {
		// setup light/dark mode component defaults
		baseStyle: (props: any) => ({
			dialog: {
				bg: mode("white", "#111111")(props),
			},
		}),
	},

	Menu: {
		baseStyle: (props: any) => ({
			list: {
				bg: mode("white", "#111111")(props),
			},
		}),
	},

	Modal: {
		baseStyle: (props: any) => ({
			dialog: {
				bg: mode("white", "#111111")(props),
			},
		}),
	},

	Popover: {
		baseStyle: (props: any) => ({
			content: {
				bg: mode("white", "#111111")(props),
			},
		}),
	},
};

const fonts = {
	...chakraTheme.fonts,
	body: `Rubik,-apple-system,BlinkMacSystemFont,"Rubik",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
	heading: `Rubik,-apple-system,BlinkMacSystemFont,"Rubik",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
	base: "0em",
	sm: "30em",
	md: "48em",
	lg: "80em",
	xl: "80em",
});

const overrides = {
	...chakraTheme,
	styles,
	config,
	fonts,
	breakpoints,
	components,
	fontWeights: {
		normal: 300,
		medium: 600,
		bold: 700,
	},
	fontSizes: {
		// xs: fluidType(6, 12),
		// sm: fluidType(7, 14),
		// md: fluidType(8, 16),
		// lg: fluidType(9, 18),
		// xl: fluidType(10, 20),
		// '2xl': fluidType(12, 24),
		// '3xl': fluidType(14, 28),
		// '4xl': fluidType(18, 36),
		// '5xl': fluidType(20, 40),
		// '6xl': fluidType(24, 48),
		// '7xl': fluidType(32, 64),
		// '8xl': fluidType(36, 72),
		display: fluidType(80, 144),
		display2: fluidType(24, 36),
		display3: fluidType(16, 24),
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
