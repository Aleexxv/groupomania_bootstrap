export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Groupomania',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [

	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios',
		"@nuxtjs/auth-next",
		['cookie-universal-nuxt', { SameSite: 'Strict' }],
	],


	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: 'http://localhost:4000/api',
	},

	router: {
		middleware: ['auth']
	},


	auth: {
		cookie: false,
		strategies: {
			local: {
				endpoints: {
					login: { url: '/users/login', method: 'post', propertyName: 'token' },
					logout: { url: '/users/logout', method: 'post' },
					user: { url: '/users/me', method: 'get', propertyName: 'data.attributes' }
				},
				// tokenRequired: true,
				tokenType: '',
			}
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
