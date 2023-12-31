import type { Config } from 'tailwindcss/types';
import { fontFamily } from 'tailwindcss/defaultTheme';

const extraColumns = {
	13: '13',
	14: '14',
	15: '15',
	16: '16',
	17: '17',
	18: '18',
	19: '19',
	20: '20',
	21: '21',
	22: '22',
	23: '23',
	24: '24',
	25: '25',
	26: '26',
	27: '27',
};

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/**/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: [
		{
			pattern: /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--haptik)', ...fontFamily.sans],
				haptik: ['var(--haptik)', ...fontFamily.sans],
				inter: ['var(--inter)', ...fontFamily.sans],
			},
			gridColumnStart: extraColumns,
			gridColumnEnd: extraColumns,
			gridTemplateColumns: {
				container: '[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]',
			},
			colors: {
				'blue-link': '#287DE4',
				'blue-medium': '#07205F',
			},
		},
	},
	plugins: [],
};
export default config;
