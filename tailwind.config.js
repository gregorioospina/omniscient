/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			keyframes: {
				throbbingBackground: {
					"0%": {
						height: "300px",
						width: "300px",
						transform: "translateX('50%')",
						backgroundFilter: "blur('40px')",
					},
					"100%": {
						height: "270px",
						width: "270px",
						transform: "translateX('20%')",
						backgroundFilter: "blur('900px')",
					},
				},
			},
			animation: {
				throbbing: "throbbingBackground 1s infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
