

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Technologies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.o0zRuWWI.js","_app/immutable/chunks/scheduler.jbkPNKfn.js","_app/immutable/chunks/index.B5xtAp7f.js"];
export const stylesheets = [];
export const fonts = [];
