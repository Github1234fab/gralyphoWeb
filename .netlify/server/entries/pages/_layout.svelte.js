import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { G as Gralypho } from "../../chunks/Gralypho.js";
const css$1 = {
  code: ".footer.svelte-1hzalez.svelte-1hzalez{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:16px;background-color:var(--primary);color:white;font-family:epilogue;gap:0px}.footer.svelte-1hzalez h4.svelte-1hzalez{margin-top:30px;font-family:'Dosis';font-weight:400;font-size:0.9rem;color:white;text-align:center;margin-bottom:50px}.wrapper-gralypho.svelte-1hzalez.svelte-1hzalez{display:flex;align-items:center;justify-content:center;margin:0 auto;margin-top:30px}.wrapper-contactez.svelte-1hzalez.svelte-1hzalez{display:flex;flex-direction:row;align-items:center;justify-content:center;text-align:center;border-radius:8px;padding:40px;gap:10px;margin-top:30px;border-top:1px solid white}.contact.svelte-1hzalez.svelte-1hzalez{text-decoration:none;border:1px solid var(--cta);color:white;font-size:1.5em;font-family:poppins;width:50px;height:50px;transform:rotate(0deg);transition:0.2s ease-in-out;padding:35px;background-color:var(--cta);border-radius:10px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.331);display:flex;align-items:center;justify-content:center}.contact.svelte-1hzalez.svelte-1hzalez:hover{animation:svelte-1hzalez-bounce 0.4s ease-in-out;font-weight:800}a.svelte-1hzalez.svelte-1hzalez{color:var(--bleuAcier);font-size:1.8em;margin:0 0px;transition:0.4s ease-in-out}.icon.svelte-1hzalez.svelte-1hzalez{color:var(--whiteGrey)}.anim.svelte-1hzalez.svelte-1hzalez:hover{animation:svelte-1hzalez-bounce 0.4s ease-in-out}@keyframes svelte-1hzalez-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}.wrapper-media.svelte-1hzalez.svelte-1hzalez{display:flex;gap:10px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Year;
  $$result.css.add(css$1);
  return `<footer class="footer svelte-1hzalez"><div class="wrapper-contactez svelte-1hzalez" data-svelte-h="svelte-xnadvt"><a href="mailto:gralypho@gmail.com " class="contact svelte-1hzalez" target="_blank"><i class="fa-regular fa-envelope icon svelte-1hzalez"></i></a> <a href="tel:0672901614" class="contact svelte-1hzalez" target="_blank"><i class="fa-solid fa-phone-volume icon svelte-1hzalez"></i></a> <a href="https://doodle.com/bp/marceau3/rv-avec-gralypho-agence-de-conception-web" class="contact svelte-1hzalez" target="_blank"><i class="fa-solid fa-mug-hot icon svelte-1hzalez"></i></a> <a href="https://fabienmarceau.com/gralyphoPhotography/index.html" class="contact svelte-1hzalez" target="_blank"><i class="fa-solid fa-camera"></i></a></div> <div class="wrapper-media svelte-1hzalez" data-svelte-h="svelte-zxgya7"><a href="https://www.facebook.com/profile.php?id=61556314663680" target="_blank" class="svelte-1hzalez"><i class="fa-brands fa-square-facebook anim icon svelte-1hzalez"></i></a> <a href="https://twitter.com/home?lang=fr" target="_blank" class="svelte-1hzalez"><i class="fa-brands fa-square-twitter anim icon svelte-1hzalez"></i></a> <a href="https://www.instagram.com/" target="_blank" class="svelte-1hzalez"><i class="fa-brands fa-square-instagram anim icon svelte-1hzalez"></i></a> </div> <div class="wrapper-gralypho svelte-1hzalez"><div class="gralypho">${validate_component(Gralypho, "Gralypho").$$render($$result, {}, {}, {})}</div></div> <h4 class="svelte-1hzalez">© ${escape(Year)} GRALYPHO. <br> Tous droits réservés.</h4> </footer>`;
});
const css = {
  code: "main.svelte-1kei2hn{background-color:white;overflow:hidden;height:auto;scroll-behavior:smooth}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1kei2hn">${slots.default ? slots.default({}) : ``} <div id="footer">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> </main>`;
});
export {
  Layout as default
};
