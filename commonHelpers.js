import{a as x,S as $,i as p}from"./assets/vendor-b42c18af.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const q=document.querySelector(".gallery-object");function y(o){const s=o.map(({largeImageURL:r,webformatURL:n,tags:e,likes:t,views:a,comments:S,downloads:E})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${n}" alt="${e}" title="${e}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${t}</span></li>
                <li class="info-cards-elements">views<span>${a}</span></li>
                <li class="info-cards-elements">comments<span>${S}</span></li>
                <li class="info-cards-elements">downloads<span>${E}</span></li>
            </ul>
            </a>
        </div>
        `).join("");q.innerHTML=s}async function g(o,s){try{const r="42613362-c652a11a2e3360cb77c84ae86",n=await x.get("https://pixabay.com/api/",{params:{key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:"15"}});if(n.data.total===0)throw new Error("No images found");return n.data}catch(r){throw r}}const d=document.querySelector(".search-form"),f=document.querySelector(".gallery-object"),L=document.querySelector(".loader"),b=document.querySelector(".loader2"),l=document.querySelector(".more-btn"),M={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};let u,i,c;document.addEventListener("DOMContentLoaded",()=>{h(),d.addEventListener("submit",o);async function o(s){s.preventDefault(),P(),f.innerHTML="",i=1,u=d.querySelector(".input-search").value;try{const r=await g(u,i);y(r.hits),c=Math.ceil(r.totalHits/15);let n=new $(".gallery-object a",M);n.on("show.simplelightbox"),n.refresh(),d.reset()}catch(r){O(r)}finally{h(),m()}}});function O(o){m(),f.innerHTML="",p.show({message:`"${o}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function P(){L.style.display="block"}function h(){L.style.display="none"}function T(){b.classList.remove("hidden")}function w(){b.classList.add("hidden")}l.addEventListener("click",async()=>{i+=1,T(),f.scrollIntoView({behavior:"smooth",block:"start"});try{const o=await g(u,i);y(o.hits),lightbox.refresh(),i>1&&(w(),m())}catch(o){console.log(o)}});function j(){i===c&&(w(),v(),p.show({message:`"We're sorry, but you've reached the end of search results."`,color:"red",position:"topRight",maxWidth:"400px"}),c=void 0)}l.addEventListener("click",j);function B(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}function m(){i>=c||c===void 0?v():B()}
//# sourceMappingURL=commonHelpers.js.map
