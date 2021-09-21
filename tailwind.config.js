module.exports = {
	mode: "jit",
	purge: ["./src/**"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
			"2sm": { max: "439px" },
			desktop: "1280px",
		},
		extend: {
			colors: {
				primary: "rgba(255, 150, 0, 1)",
			},
			minWidth: {
				img: "500px",
			},
			maxHeight: {
				img: "1000px",
			},
			backgroundImage: {
				principal: "url('/headerDesktop.webp')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
