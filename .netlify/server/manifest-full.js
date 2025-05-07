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
		client: {start:"_app/immutable/entry/start.ChLBgBV6.js",app:"_app/immutable/entry/app.TgpidJmB.js",imports:["_app/immutable/entry/start.ChLBgBV6.js","_app/immutable/chunks/Dp0ZpxP2.js","_app/immutable/chunks/BDUh-PIb.js","_app/immutable/chunks/D_Zoznmf.js","_app/immutable/entry/app.TgpidJmB.js","_app/immutable/chunks/BDUh-PIb.js","_app/immutable/chunks/Bw_gDFUc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
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
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Design-site-web",
				pattern: /^\/Design-site-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/FAQ",
				pattern: /^\/FAQ\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/SuccesForm",
				pattern: /^\/SuccesForm\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Technologies",
				pattern: /^\/Technologies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/agence-web-Lyon-creation-site-internet-seo",
				pattern: /^\/agence-web-Lyon-creation-site-internet-seo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/agence-web-monts-du-Lyonnais",
				pattern: /^\/agence-web-monts-du-Lyonnais\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/agence-web-region-Lyonnaise",
				pattern: /^\/agence-web-region-Lyonnaise\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/community-management",
				pattern: /^\/community-management\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/creation-application",
				pattern: /^\/creation-application\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/creation-design-logos",
				pattern: /^\/creation-design-logos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/creation-site-application-Lyon",
				pattern: /^\/creation-site-application-Lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/creation-site-internet",
				pattern: /^\/creation-site-internet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/creation-site-web-lyon",
				pattern: /^\/creation-site-web-lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/etude-strategie-digitale",
				pattern: /^\/etude-strategie-digitale\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/gestion-media-sociaux",
				pattern: /^\/gestion-media-sociaux\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/referencement-seo-sea",
				pattern: /^\/referencement-seo-sea\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/site-internet-CMS",
				pattern: /^\/site-internet-CMS\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/site-internet-Lyon",
				pattern: /^\/site-internet-Lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/tarifs",
				pattern: /^\/tarifs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/types-site-web",
				pattern: /^\/types-site-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/webmaster-monts-du-lyonnais-lyon-ouest",
				pattern: /^\/webmaster-monts-du-lyonnais-lyon-ouest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/webmaster-ouest-lyonnais",
				pattern: /^\/webmaster-ouest-lyonnais\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
