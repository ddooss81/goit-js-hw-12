import{a as q,S as g,i as L}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const b=document.querySelector(".gallery-object");document.querySelector(".search-form");function O(n){const s=n.map(({largeImageURL:t,webformatURL:r,tags:e,likes:o,views:i,comments:u,downloads:m})=>`
        <div class="gallery">
            <a href="${t}">
            <img src="${r}" alt="${e}" title="${e}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${o}</span></li>
                <li class="info-cards-elements">views<span>${i}</span></li>
                <li class="info-cards-elements">comments<span>${u}</span></li>
                <li class="info-cards-elements">downloads<span>${m}</span></li>
            </ul>
            </a>
        </div>
        `).join("");b.innerHTML=s}function P(n){const t=n.hits.map(({largeImageURL:r,webformatURL:e,tags:o,likes:i,views:u,comments:m,downloads:M})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${e}" alt="${o}" title="${o}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${i}</span></li>
                <li class="info-cards-elements">views<span>${u}</span></li>
                <li class="info-cards-elements">comments<span>${m}</span></li>
                <li class="info-cards-elements">downloads<span>${M}</span></li>
            </ul>
            </a>
        </div>
        `).join("");b.insertAdjacentHTML("beforeend",t)}async function w(n,s){try{const t="42613362-c652a11a2e3360cb77c84ae86",r=await q.get("https://pixabay.com/api/",{params:{key:t,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:"15"}});if(r.data.total===0)throw new Error("No images found");return r.data}catch(t){throw t}}const c=document.querySelector(".search-form"),h=document.querySelector(".gallery-object"),v=document.querySelector(".loader"),$=document.querySelector(".loader2"),d=document.querySelector(".more-btn"),S={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};let f,a,l;document.addEventListener("DOMContentLoaded",()=>{y(),c.addEventListener("submit",n);async function n(s){s.preventDefault(),B(),h.innerHTML="",a=1,f=c.querySelector(".input-search").value;try{const t=await w(f,a);O(t.hits),l=Math.ceil(t.totalHits/15);let r=new g(".gallery-object a",S);r.on("show.simplelightbox"),r.refresh(),c.reset()}catch(t){j(t)}finally{y(),p()}}});function j(n){p(),h.innerHTML="",L.show({message:`"${n}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function B(){v.style.display="block"}function y(){v.style.display="none"}function T(){$.classList.remove("hidden")}function E(){$.classList.add("hidden")}d.addEventListener("click",async()=>{a+=1,T();try{const n=await w(f,a);P(n);let s=new g(".gallery-object a",S);s.on("show.simplelightbox"),s.refresh(),c.reset();const t=h.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2}),a>1&&(E(),p())}catch(n){console.log(n)}});function H(){a===l&&(E(),x(),L.show({message:`"We're sorry, but you've reached the end of search results."`,color:"red",position:"topRight",maxWidth:"400px"}),l=void 0)}d.addEventListener("click",H);function k(){d.classList.remove("hidden")}function x(){d.classList.add("hidden")}function p(){a>=l||l===void 0?x():k()}
//# sourceMappingURL=commonHelpers.js.map
