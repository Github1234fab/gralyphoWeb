import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Mouse.svelte_svelte_type_style_lang.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
const serviceWeb = "/_app/immutable/assets/mediaWeb.BQpbU0yc.png";
const css = {
  code: ".medias-section.svelte-1xz270j.svelte-1xz270j{display:flex;justify-content:center;align-items:center;gap:0px;height:auto}.container.svelte-1xz270j.svelte-1xz270j{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:100px;margin-top:30px}.media-img.svelte-1xz270j.svelte-1xz270j{max-width:50%;max-height:100%;border-radius:3%;margin-top:20px;margin-bottom:50px}.wrapper-medias.svelte-1xz270j h1.svelte-1xz270j{font-family:var(--Radio);font-size:var(--l);font-weight:700;text-align:center;color:var(--primary);margin-top:15px;margin-bottom:30px;line-height:39px}.wrapper-medias.svelte-1xz270j.svelte-1xz270j{font-family:var(--Poppins);text-align:center;color:var(--primay);margin-top:15px;max-width:80%;min-height:100%}.wrapper-button.svelte-1xz270j.svelte-1xz270j{display:flex;justify-content:center;align-items:center;margin-top:50px;margin-bottom:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section class="medias-section svelte-1xz270j"><div class="container svelte-1xz270j"><img${add_attribute("src", serviceWeb, 0)} alt="" class="media-img svelte-1xz270j"> <div class="wrapper-medias svelte-1xz270j"><h1 class="svelte-1xz270j" data-svelte-h="svelte-15jsk25">Rédaction</h1> <p data-svelte-h="svelte-v3q4av">Écrire pour les médias sociaux n&#39;est pas une mince affaire. Nous savons tous que pour se
				faire connaître il faut &quot;poster&quot; sur les réseaux sociaux. Mais &quot;poster&quot; quoi?! Que dire, que
				faire, quoi écrire, comment et sur quel sujet? <br>
				Ça c&#39;est notre métier et nous sommes là pour vous aider. <br><br>Nous rédigeons pour
				vous des contenus adaptés à votre cible, à votre secteur d&#39;activité, à votre image de
				marque. <br>Nous savons comment écrire pour les réseaux sociaux, comment les utiliser,
				comment les exploiter. <br> Nous savons comment les faire vivre et comment les faire
				grandir. <br> Nous savons comment les faire parler de vous. <br>Nous savons comment les
				faire vous aimer. <br>Nous savons comment les faire vous suivre. <br> Nous savons comment
				les faire vous acheter. Nous savons comment les faire vous recommander!!</p> <div class="wrapper-button svelte-1xz270j">${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div></div> <div class="wrapper-medias svelte-1xz270j"><h1 class="svelte-1xz270j" data-svelte-h="svelte-118rnx8">Poster des images et des vidéos</h1> <p data-svelte-h="svelte-1tez26w">Comment réaliser des vidéos, des photos? Quels contenus poster, quelle qualité d&#39;image,
				comment les filmer, quel contenu, pour quelle raison, etc? <br><br>Nous créons des
				contenus médias sur mesure et nous les postons sur les réseaux sociaux selon une fréquence
				que nous déterminons ensemble, selon vos objectifs. <br>C&#39;est un travail en collaboration
				qui vous permettra de rayonner à coup sûr sur les réseaux sociaux!</p> <div class="wrapper-button svelte-1xz270j">${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div></div> <div class="wrapper-medias svelte-1xz270j"><h1 class="svelte-1xz270j" data-svelte-h="svelte-lakezo">Campagne publicitaires</h1> <p data-svelte-h="svelte-93lxna">Vous avez sûrement déjà entendu parler de Google AdWords vous permettant de lancer des
				campagnes payantes pour atteindre ovtre cible en première page des navigateurs web. <br>Il
				existe d&#39;autres moyens automatisés pour atteindre votre but. Que ce soit de faire parler de
				vous, de lancer un évènement, d&#39;anticiper sur une période ou un évènement. Les campagnes
				publicitaires vous permettent à la fois d&#39;être visible et de toucher votre coeur de cible.
				Nous sommes là pour vous aider à déterminer la stratégie à adopter, le budget à allouer, les
				mots clés à utiliser, les médias à cibler, les périodes à privilégier, etc. <br><br>Nous
				sommes là pour vous aider à atteindre vos objectifs.</p> <div class="wrapper-button svelte-1xz270j">${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div></div> <div class="wrapper-medias svelte-1xz270j"><h1 class="svelte-1xz270j" data-svelte-h="svelte-1efjdd4">Formation et coaching</h1> <p data-svelte-h="svelte-9bdbhg">Si vous souhaitez devenir autonome sur les réseaux sociaux, nous vous proposons des
				formations et du coaching. <br>Nous vous apprenons à utiliser les réseaux sociaux, à les
				exploiter, à les faire vivre, à les faire grandir. <br>La formation vous rendra autonome
				et le coaching vous apportera l&#39;accompagnement nécessaire pour atteindre votre cible.</p> <div class="wrapper-button svelte-1xz270j">${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div></div></div> </section>`;
});
export {
  Page as default
};
