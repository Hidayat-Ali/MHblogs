const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["abc.png","blog-bg.jpeg","favicon.png","git.svg","linkedin.svg","salam.png","salam.webp","twitter.svg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.BrTYFYqi.js",app:"_app/immutable/entry/app.RsM5rThh.js",imports:["_app/immutable/entry/start.BrTYFYqi.js","_app/immutable/chunks/DDewazuq.js","_app/immutable/chunks/BJJP7Q0Q.js","_app/immutable/chunks/Cm0tu0xa.js","_app/immutable/entry/app.RsM5rThh.js","_app/immutable/chunks/BJJP7Q0Q.js","_app/immutable/chunks/Cxn-fYAn.js","_app/immutable/chunks/BJOssxvh.js","_app/immutable/chunks/CBgqLuRN.js","_app/immutable/chunks/BGoREh7s.js","_app/immutable/chunks/Cm0tu0xa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-ChknhgJl.js')),
			__memo(() => import('./chunks/1-B7l7nO9n.js')),
			__memo(() => import('./chunks/2-6ZkxVQ6R.js')),
			__memo(() => import('./chunks/3-C-mNPEBm.js')),
			__memo(() => import('./chunks/4-C43SQD-F.js')),
			__memo(() => import('./chunks/5-BNWvQFAH.js')),
			__memo(() => import('./chunks/6-B1JA3OIb.js'))
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
