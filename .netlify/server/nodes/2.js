import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Cn5vj6kq.js","_app/immutable/chunks/scheduler.4vs3tl4s.js","_app/immutable/chunks/index.BhdhDtp0.js","_app/immutable/chunks/Gralypho.BKZ317DS.js","_app/immutable/chunks/Mouse.svelte_svelte_type_style_lang.Uy6HRqyo.js","_app/immutable/chunks/each.BgC4wBcv.js","_app/immutable/chunks/ButtonCTA.C3We3tW-.js","_app/immutable/chunks/Form.ByScRbdc.js"];
export const stylesheets = ["_app/immutable/assets/2.BZY1LuYk.css","_app/immutable/assets/Csection.CzkkMm0J.css","_app/immutable/assets/CardsSectionB.DZXTrsk_.css","_app/immutable/assets/BeneficeSection.C5Hbz6Fz.css","_app/immutable/assets/Gralypho.D42Hf5ha.css","_app/immutable/assets/Mouse.Bj5hbGiA.css","_app/immutable/assets/ButtonCTA.CUgc0MPF.css","_app/immutable/assets/Form.mqcQBsK1.css"];
export const fonts = [];
