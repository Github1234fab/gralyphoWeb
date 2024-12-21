import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
/* empty css                                       */
const css = {
  code: ".card-services.svelte-199e1wm{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;flex:1 1 calc(50% - 20px);max-width:calc(40% - 20px);background-color:white;overflow:hidden;padding:20px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1)}.wrapper-text.svelte-199e1wm{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:20px}.text-services.svelte-199e1wm{font-family:epilogue;font-weight:700;color:var(--primary);font-size:var(--m);text-align:left;letter-spacing:-0.05em}.description-services.svelte-199e1wm{font-family:poppins;font-weight:400;color:var(--primary);font-size:var(--s);text-align:left;letter-spacing:-0em;margin-top:20px}.img-services.svelte-199e1wm{width:auto;height:200px}.button-service.svelte-199e1wm{min-width:150px;height:50px;color:var(--colorC);border:2px solid var(--whiteGrey);background-color:var(--cta);border-radius:8px;color:var(--whiteGrey);font-family:epilogue;font-weight:500;font-size:1rem;cursor:pointer;box-shadow:0px 0px 10px rgba(76, 76, 76, 0.35);margin-top:40px;margin-bottom:30px}.button-service.svelte-199e1wm:hover{animation:svelte-199e1wm-bounce 0.4s ease-in-out}@keyframes svelte-199e1wm-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1.1) translateY(-2px)}50%{transform:scale(1) translateY(-2px)}75%{transform:scale(1.1) translateY(-2px)}100%{transform:scale(1) translateY(-2px)}}@media screen and (max-width: 768px){.card-services.svelte-199e1wm{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;flex:none;max-width:90%;min-height:0%}}",
  map: null
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { img } = $$props;
  let { description } = $$props;
  let { lien } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.lien === void 0 && $$bindings.lien && lien !== void 0)
    $$bindings.lien(lien);
  $$result.css.add(css);
  return `<div class="card-services svelte-199e1wm"><div class="wrapper-text svelte-199e1wm"><div class="text-services svelte-199e1wm">${escape(text)}</div> <p class="description-services svelte-199e1wm">${escape(description)}</p></div> <img class="img-services svelte-199e1wm"${add_attribute("src", img, 0)} alt=""> <a${add_attribute("href", lien, 0)}><button class="button-service svelte-199e1wm" data-svelte-h="svelte-1w7mb7r">En savoir +</button></a> </div>`;
});
export {
  Services as S
};
