const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.l6bqLryi.js",app:"_app/immutable/entry/app.B3igKkHH.js",imports:["_app/immutable/entry/start.l6bqLryi.js","_app/immutable/chunks/CGH5etsN.js","_app/immutable/chunks/DTkV2bT6.js","_app/immutable/chunks/Cj_Avd8_.js","_app/immutable/entry/app.B3igKkHH.js","_app/immutable/chunks/DTkV2bT6.js","_app/immutable/chunks/DUYVFO7j.js","_app/immutable/chunks/DRb11htt.js","_app/immutable/chunks/Cj_Avd8_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-6bsfC5oE.js')),
			__memo(() => import('./chunks/1-CjXgLn0m.js')),
			__memo(() => import('./chunks/2-BRIN80Pu.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
