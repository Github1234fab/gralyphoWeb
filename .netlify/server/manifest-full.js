export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["creativity.png","creativity7.ico","favicon.png","favivon2.png","fusee.jpg","fuseeguyane.jpg","fuséeguyane.jpg","robots.txt","rocketShip.png","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bo3iByw_.js","app":"_app/immutable/entry/app.BHcFMhF1.js","imports":["_app/immutable/entry/start.Bo3iByw_.js","_app/immutable/chunks/entry.Beji9GGs.js","_app/immutable/chunks/scheduler.4vs3tl4s.js","_app/immutable/chunks/index.CBaNHT0i.js","_app/immutable/entry/app.BHcFMhF1.js","_app/immutable/chunks/scheduler.4vs3tl4s.js","_app/immutable/chunks/index.BhdhDtp0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
			__memo(() => import('./nodes/15.js'))
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
				id: "/Design-site-web-thurins",
				pattern: /^\/Design-site-web-thurins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Digital-infos",
				pattern: /^\/Digital-infos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Media-infos",
				pattern: /^\/Media-infos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Medias-sociaux-thurins-web",
				pattern: /^\/Medias-sociaux-thurins-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Referencement-seo-sea-thurins-web",
				pattern: /^\/Referencement-seo-sea-thurins-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/SuccesForm",
				pattern: /^\/SuccesForm\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Tarifs-creation-site-web-lyon",
				pattern: /^\/Tarifs-creation-site-web-lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Technologies",
				pattern: /^\/Technologies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/creation-application-web-lyon",
				pattern: /^\/creation-application-web-lyon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/creation-logos-publicite-communication-thurins-web",
				pattern: /^\/creation-logos-publicite-communication-thurins-web\/?$/,
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
				id: "/creation-site-web-ouest-lyonnais",
				pattern: /^\/creation-site-web-ouest-lyonnais\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/strategie-communication-web",
				pattern: /^\/strategie-communication-web\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
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
