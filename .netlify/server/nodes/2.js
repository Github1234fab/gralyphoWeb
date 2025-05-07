import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.8Tt3C8RK.js","_app/immutable/chunks/scheduler.jbkPNKfn.js","_app/immutable/chunks/index.B5xtAp7f.js","_app/immutable/chunks/Header.VGOy4QQI.js","_app/immutable/chunks/Gralypho._DUad0CJ.js","_app/immutable/chunks/each.wxpAxVyr.js","_app/immutable/chunks/Form.CNJKhfz4.js","_app/immutable/chunks/ButtonCTA.Bo2AeEnx.js","_app/immutable/chunks/LinkSiteApplication.CFxhMKML.js","_app/immutable/chunks/FaqLink.U981o1SY.js"];
export const stylesheets = ["_app/immutable/assets/2.zZvfjKpx.css","_app/immutable/assets/styles.CxcF4654.css","_app/immutable/assets/CardsSectionB.CRANViEK.css","_app/immutable/assets/BeneficeSection.C5Hbz6Fz.css","_app/immutable/assets/Difference.Cq4_aYVC.css","_app/immutable/assets/ButtonCTA.yE69egVd.css","_app/immutable/assets/Mouse.C8PnU2HM.css","_app/immutable/assets/Header.bHotvCdg.css","_app/immutable/assets/Gralypho.C5jYToah.css","_app/immutable/assets/Form.DfFBb20s.css","_app/immutable/assets/LinkSiteApplication.D7UU_kDa.css","_app/immutable/assets/FaqLink.4T2lJwKa.css"];
export const fonts = [];
