/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			width: {
				"3xscreen": "300vw",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0, transform: "translateX(-100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeInLeft: {
					"0%": { opacity: 0, transform: "translateX(-100%)" },
					"50%": { opacity: 0.3 },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				carouselLeft: {
					"0%": { opacity: 1, transform: "translateX(0)" },
					"32%": { opacity: 1, transform: "translateX(0)" },
					"33%": { opacity: 1, transform: "translateX(-33%)" },
					"65%": { opacity: 1, transform: "translateX(-33%)" },
					"66%": { opacity: 1, transform: "translateX(-66%)" },
					"99%": { opacity: 1, transform: "translateX(-66%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in forwards",
				fadeInLeft: "fadeInLeft 1s ease-in forwards",
				carouselLeft: "carouselLeft 15s ease-in infinite forwards",
			},
		},
	},
	variants: {
		animation: ["motion-safe"],
	},
	plugins: [],
};
