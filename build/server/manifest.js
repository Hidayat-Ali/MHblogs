const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abc.png","blog-bg.jpeg","favicon.ico","favicon.png","git.svg","linkedin.svg","salam.png","salam.webp","twitter.svg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.6iuD_7T6.js",app:"_app/immutable/entry/app.BbbwVj02.js",imports:["_app/immutable/entry/start.6iuD_7T6.js","_app/immutable/chunks/OlJYcpW0.js","_app/immutable/chunks/BACdDkjB.js","_app/immutable/chunks/B5GwWq68.js","_app/immutable/entry/app.BbbwVj02.js","_app/immutable/chunks/BACdDkjB.js","_app/immutable/chunks/D_nXeGhm.js","_app/immutable/chunks/BGAgWMwB.js","_app/immutable/chunks/CbLfxgj4.js","_app/immutable/chunks/BaRU1dVR.js","_app/immutable/chunks/B5GwWq68.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Bnw_W1xK.js')),
			__memo(() => import('./chunks/1-CxKb2QeQ.js')),
			__memo(() => import('./chunks/2-D_C7VGM-.js')),
			__memo(() => import('./chunks/3-B80esb98.js')),
			__memo(() => import('./chunks/4-CpteUWNK.js')),
			__memo(() => import('./chunks/5-saz235O5.js')),
			__memo(() => import('./chunks/6-DzGIQipV.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-ZvOEB0LA.js'))
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
