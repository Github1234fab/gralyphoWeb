import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DzIwCpUv.js","_app/immutable/chunks/BDUh-PIb.js","_app/immutable/chunks/Bw_gDFUc.js","_app/immutable/chunks/D3pCI2KE.js","_app/immutable/chunks/CBItDqpy.js","_app/immutable/chunks/ekfU8cBb.js","_app/immutable/chunks/DUT94Trf.js","_app/immutable/chunks/Dc7Wikg_.js","_app/immutable/chunks/BXWFbIZg.js","_app/immutable/chunks/_8r067aK.js"];
export const stylesheets = ["_app/immutable/assets/Gralypho.m_DKw6sP.css","_app/immutable/assets/Header.DuzQVb8P.css","_app/immutable/assets/Form.DSXQzRxz.css","_app/immutable/assets/ButtonCTA.CcnOWuJd.css","_app/immutable/assets/LinkSiteApplication.D_FJGPdq.css","_app/immutable/assets/FaqLink.ClIzB9zs.css","_app/immutable/assets/2.DB0CAWpk.css","_app/immutable/assets/styles.CiyudgzQ.css","_app/immutable/assets/CardsSectionB.CERwax3o.css","_app/immutable/assets/BeneficeSection.rJzh47u1.css","_app/immutable/assets/Difference.ahWk3-1d.css","_app/immutable/assets/Mouse.BoL90pp8.css"];
export const fonts = [];
