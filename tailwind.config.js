/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sst_bold: ["sst_arabic_bold"],
			},
			colors: {
				darkHeader: "#2B2B2B",
				darkSubHeader: "#7A8784",
				blueBtnHoverBG: "#042B4D",
				blueBtnBG: "#003462",
				lightBlue: "#4789C8",
				darkHeader2: "#3F4B48",
				greenBtn: "#63BE6A",
			},
		},
	},
	plugins: [],
};
