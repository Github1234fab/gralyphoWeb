export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","creativity.png","creativity7.ico","favicon.png","favicon3.png","favivon2.png","fusee.avif","fusee.jpg","fuseeguyane.jpg","fuséeguyane.jpg","logoGralypho.jpeg","logoGralypho2.jpeg","robots.txt","rocketShip.png","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.HHDf67PC.js","app":"_app/immutable/entry/app.M8r5qeYU.js","imports":["_app/immutable/entry/start.HHDf67PC.js","_app/immutable/chunks/entry.yAGZ-NRD.js","_app/immutable/chunks/scheduler.jbkPNKfn.js","_app/immutable/chunks/index.D8242Frp.js","_app/immutable/entry/app.M8r5qeYU.js","_app/immutable/chunks/scheduler.jbkPNKfn.js","_app/immutable/chunks/index.B5xtAp7f.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js'))
		],
		routes: [
			{
				id: "/Design-site-web",
				pattern: /^\/Design-site-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/FAQ",
				pattern: /^\/FAQ\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/SuccesForm",
				pattern: /^\/SuccesForm\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Technologies",
				pattern: /^\/Technologies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/agence-web-Lyon-creation-site-internet-seo",
				pattern: /^\/agence-web-Lyon-creation-site-internet-seo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/agence-web-monts-du-Lyonnais",
				pattern: /^\/agence-web-monts-du-Lyonnais\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/agence-web-region-Lyonnaise",
				pattern: /^\/agence-web-region-Lyonnaise\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/community-management",
				pattern: /^\/community-management\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/creation-site-application-Lyon",
				pattern: /^\/creation-site-application-Lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/creation-site-web-lyon",
				pattern: /^\/creation-site-web-lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/site-internet-CMS",
				pattern: /^\/site-internet-CMS\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/site-internet-Lyon",
				pattern: /^\/site-internet-Lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/types-site-web",
				pattern: /^\/types-site-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/webmaster-monts-du-lyonnais-lyon-ouest",
				pattern: /^\/webmaster-monts-du-lyonnais-lyon-ouest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/webmaster-ouest-lyonnais",
				pattern: /^\/webmaster-ouest-lyonnais\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
