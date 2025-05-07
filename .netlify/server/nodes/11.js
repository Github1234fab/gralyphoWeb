import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.CfZ3kYYI.js","_app/immutable/chunks/scheduler.jbkPNKfn.js","_app/immutable/chunks/index.B5xtAp7f.js"];
export const stylesheets = ["_app/immutable/assets/11.DyiYU1fH.css"];
export const fonts = [];
