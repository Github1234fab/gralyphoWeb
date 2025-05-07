import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/11.CuYXs6xA.js","_app/immutable/chunks/BDUh-PIb.js","_app/immutable/chunks/Bw_gDFUc.js"];
export const stylesheets = ["_app/immutable/assets/11.8AeEXdtI.css"];
export const fonts = [];
