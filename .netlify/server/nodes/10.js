

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Technologies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.uWs4EVGO.js","_app/immutable/chunks/scheduler.4vs3tl4s.js","_app/immutable/chunks/index.BhdhDtp0.js"];
export const stylesheets = [];
export const fonts = [];
