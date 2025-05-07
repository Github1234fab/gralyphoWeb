import { c as create_ssr_component, e as escape, f as each, v as validate_component, d as add_attribute } from "./ssr.js";
/* empty css                                        */
const css$2 = {
  code: ".wrapper.svelte-1no7o0n{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.button.svelte-1no7o0n{position:relative;display:flex;align-items:center;padding:10px 20px;color:var(--whiteGrey);font-size:var(--m);font-weight:500;cursor:pointer;border-radius:8px;border:none;text-align:left;letter-spacing:-1px;font-family:epilogue;border:2px solid rgb(100, 100, 100);background-color:transparent;box-shadow:0px 0px 40px 5px rgb(0, 0, 0)}li.svelte-1no7o0n{font-size:0.8rem;color:white;align-self:flex-start}.title.svelte-1no7o0n{font-family:epilogue;font-size:var(--m);font-weight:500;color:var(--whiteGrey);letter-spacing:0px;width:70%;line-height:25px}@keyframes svelte-1no7o0n-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}.content.svelte-1no7o0n{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:10px;border-radius:5px;margin-bottom:10px;border:1px solid grey;background-color:transparent}li.svelte-1no7o0n{font-family:'DM Sans', sans-serif;font-size:1rem;font-weight:300;padding:10px;line-height:20px;list-style-type:circle;text-align:left}@media screen and (max-width: 768px){.wrapper.svelte-1no7o0n{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.button.svelte-1no7o0n{position:relative;display:flex;align-items:center;padding:10px 20px;color:var(--whiteGrey);font-size:var(--m);font-weight:500;cursor:pointer;border-radius:8px;border:none;text-align:left;letter-spacing:-1px;font-family:epilogue;margin-bottom:10px;border:1px solid grey;background-color:transparent}}",
  map: null
};
const Accordeon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { li } = $$props;
  if ($$props.li === void 0 && $$bindings.li && li !== void 0)
    $$bindings.li(li);
  $$result.css.add(css$2);
  return `<div class="${"wrapper " + escape("", true) + " svelte-1no7o0n"}"><button class="button svelte-1no7o0n" data-svelte-h="svelte-1iprf0t"><h2 class="title svelte-1no7o0n">Détails</h2> </button> ${``} </div>`;
});
const css$1 = {
  code: ".wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;flex:1 1 calc(30%);max-height:auto;gap:50px;border-radius:10px;border:1px solid var(--cta);position:relative;overflow:hidden}.wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf::after{position:absolute;content:'';width:100%;inset:0.0600rem;background-color:var(--primary);border-radius:10px;z-index:1}.wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf::before{position:absolute;content:'';top:0;left:0;width:100%;height:100%;background-color:rgb(152, 156, 235);z-index:1}.wrapper__offer-infos-product.svelte-jg5ilf.svelte-jg5ilf{padding:20px;display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;width:100%;gap:40px;height:auto;z-index:2}.wrapper__accordeon.svelte-jg5ilf.svelte-jg5ilf{display:flex;align-items:center;justify-content:center;width:100%;margin-top:40px}.wrapper__offer-infos.svelte-jg5ilf h3.svelte-jg5ilf{font-family:'DM sans', sans-serif;font-size:1rem;letter-spacing:0px;font-weight:200;color:var(--whiteGrey);padding:0px;border-radius:10px;white-space:pre-line;padding:0px}.wrapper__offer-infos.svelte-jg5ilf h2.svelte-jg5ilf{font-family:var(--Red);font-size:2rem;letter-spacing:-1px;font-weight:600;color:var(--whiteGrey);margin-top:0px;white-space:pre-line}.name.svelte-jg5ilf.svelte-jg5ilf{font-family:var(--Red);font-size:2rem;font-weight:900;background-color:var(--blue);border:1px solid grey;color:rgb(255, 255, 255);padding:10px;margin:30px auto;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;z-index:2}.details.svelte-jg5ilf.svelte-jg5ilf{gap:0px;width:100%;flex-wrap:wrap;height:auto;display:flex;align-items:flex-start;justify-content:center;flex-direction:column;border-radius:10px 10px 0px 0px;margin-top:0px}.details.svelte-jg5ilf h4.svelte-jg5ilf{font-family:var(--Red);font-size:1rem;font-weight:700;color:white;border-radius:8px;min-width:40%}@keyframes svelte-jg5ilf-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 1020px){.wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf{height:800px;flex:1 1 48%}}@media screen and (max-width: 887px){.wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf{height:700px;flex:1 1 48%}.details.svelte-jg5ilf.svelte-jg5ilf{gap:7px;height:auto;padding:0px;display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;border-radius:10px 10px 0px 0px;margin-top:0px;width:100%}.details.svelte-jg5ilf h4.svelte-jg5ilf{font-family:var(--Red);font-size:1rem;font-weight:600;color:var(--whiteGrey);border-radius:8px;min-width:70%}.wrapper__offer-infos.svelte-jg5ilf.svelte-jg5ilf{display:flex;align-items:flex-start;justify-content:flex-start;flex-direction:column;width:100%;gap:30px;height:auto;padding:20px;border-radius:10px;border:1px solid var(--blue)}.wrapper__offer-infos.svelte-jg5ilf ul h3.svelte-jg5ilf{display:flex;flex-direction:column;gap:0px;width:50%;margin:20px auto;padding:10px;border-radius:10px}.name.svelte-jg5ilf.svelte-jg5ilf{font-size:1.2rem;padding:20px}.wrapper__offer-infos.svelte-jg5ilf h2.svelte-jg5ilf{font-size:1.5rem;line-height:33px}.wrapper__offer-infos.svelte-jg5ilf h3.svelte-jg5ilf{font-size:1rem;line-height:35px}}",
  map: null
};
const CardTarifs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { h2 } = $$props;
  let { h3 } = $$props;
  let { h4 } = $$props;
  let { li } = $$props;
  let { tarif } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.h2 === void 0 && $$bindings.h2 && h2 !== void 0)
    $$bindings.h2(h2);
  if ($$props.h3 === void 0 && $$bindings.h3 && h3 !== void 0)
    $$bindings.h3(h3);
  if ($$props.h4 === void 0 && $$bindings.h4 && h4 !== void 0)
    $$bindings.h4(h4);
  if ($$props.li === void 0 && $$bindings.li && li !== void 0)
    $$bindings.li(li);
  if ($$props.tarif === void 0 && $$bindings.tarif && tarif !== void 0)
    $$bindings.tarif(tarif);
  $$result.css.add(css$1);
  return `<div class="wrapper__offer-infos laye glow svelte-jg5ilf"><p class="name svelte-jg5ilf">${escape(name)} <br> ${escape(tarif)}</p> <div class="wrapper__offer-infos-product svelte-jg5ilf"><h2 class="svelte-jg5ilf">${escape(h2)}</h2> <h3 class="svelte-jg5ilf">${escape(h3)}</h3> <div class="details svelte-jg5ilf">${each(h4, (text) => {
    return `<h4 class="svelte-jg5ilf">${escape(text)}</h4>`;
  })} <div class="wrapper__accordeon svelte-jg5ilf">${validate_component(Accordeon, "Accordeon").$$render($$result, { li }, {}, {})}</div></div></div> </div>`;
});
const css = {
  code: ".container.svelte-17g4vce{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px;padding:10px;height:100%;background-color:var(--primary)}img.svelte-17g4vce{width:50%;height:250px;border-radius:20px;object-fit:cover;box-shadow:0px 0px 5px grey;flex:1 1 0}@media screen and (max-width: 768px){.container.svelte-17g4vce{height:auto;width:100%}img.svelte-17g4vce{width:40%;height:150px;border-radius:20px;object-fit:cover;box-shadow:0px 0px 5px grey;flex:1 1 0}}",
  map: null
};
const ImagesBlocks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { alt } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css);
  return `<div class="container svelte-17g4vce">${each(img, (image) => {
    return `<img${add_attribute("src", image, 0)}${add_attribute("alt", alt, 0)} class="svelte-17g4vce">`;
  })} </div>`;
});
export {
  CardTarifs as C,
  ImagesBlocks as I
};
