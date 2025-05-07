import * as server from '../entries/pages/blog/_page.server.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/nodes/10.DNy7Php-.js","_app/immutable/chunks/BDUh-PIb.js","_app/immutable/chunks/Bw_gDFUc.js","_app/immutable/chunks/ekfU8cBb.js"];
export const stylesheets = ["_app/immutable/assets/10._7X4PDom.css"];
export const fonts = [];
