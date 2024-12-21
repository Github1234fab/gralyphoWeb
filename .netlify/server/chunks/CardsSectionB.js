import { c as create_ssr_component, e as escape, d as add_attribute } from "./ssr.js";
/* empty css                                            */
const arrowDown = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%20%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M169.4%20470.6c12.5%2012.5%2032.8%2012.5%2045.3%200l160-160c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L224%20370.8%20224%2064c0-17.7-14.3-32-32-32s-32%2014.3-32%2032l0%20306.7L54.6%20265.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3l160%20160z'%20fill='%23009df8'%20stroke-width='3'/%3e%3c/svg%3e";
const css = {
  code: ".wrapper.svelte-izwwx1.svelte-izwwx1{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw}.button.svelte-izwwx1.svelte-izwwx1{position:relative;display:flex;align-items:center;padding:40px;color:var(--colorH);font-size:var(--m);font-weight:500;cursor:pointer;border-radius:8px;border-top:none;border-right:none;border-left:none;border-bottom:1px rgb(219, 219, 219) solid;background-color:white;width:90%;height:100px;text-align:left;letter-spacing:-1px;font-family:epilogue;margin-bottom:10px}.button-after.svelte-izwwx1.svelte-izwwx1{position:absolute;content:'{buttonText}';color:var(--secondary);font-size:1em;font-weight:bolder;right:50px;display:flex;align-items:center;justify-content:center;padding:10px}.button-after.svelte-izwwx1 img.svelte-izwwx1{margin-top:12px;height:23px}.button-after.svelte-izwwx1 img.svelte-izwwx1:hover{animation:svelte-izwwx1-bounce 0.4s}@keyframes svelte-izwwx1-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}.content.svelte-izwwx1.svelte-izwwx1{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:10px;border-radius:5px;margin-bottom:10px;border:none}.p.svelte-izwwx1.svelte-izwwx1{font-family:Heebo;text-align:left;font-size:var(--m);font-weight:300;color:var(--primary);margin:0px;background-color:var(--whiteGrey);padding:30px;width:90%}@media screen and (max-width: 768px){.wrapper.svelte-izwwx1.svelte-izwwx1{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw}.button.svelte-izwwx1.svelte-izwwx1{font-size:1em}.button-after.svelte-izwwx1.svelte-izwwx1{right:0px;margin-top:-30px}}",
  map: null
};
const CardsSectionB = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { p } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  $$result.css.add(css);
  return `<div class="${"wrapper " + escape("", true) + " svelte-izwwx1"}"><button class="button svelte-izwwx1">${escape(title)} <span class="button-after svelte-izwwx1">${`<img${add_attribute("src", arrowDown, 0)} alt="Arrow Down" class="svelte-izwwx1">`}</span></button> ${``} </div>`;
});
export {
  CardsSectionB as C
};
