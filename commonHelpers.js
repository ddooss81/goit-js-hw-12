import{S as u,i as h}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y=document.querySelector(".gallery-o"),g=document.querySelector(".search-form");new u(".gallery-o");const L={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function $(i){const r=i.map(({largeImageURL:s,webformatURL:e,tags:t,likes:o,views:m,comments:f,downloads:p})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${e}" alt="${t}" title="${t}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${o}</span></li>
                <li class="info-cards-elements">views<span>${m}</span></li>
                <li class="info-cards-elements">comments<span>${f}</span></li>
                <li class="info-cards-elements">downloads<span>${p}</span></li>
            </ul>
            </a>
        </div>
        `).join("");y.innerHTML=r;const n=new u(".gallery-o a",L);n.on("show.simplelightbox"),n.refresh(),g.reset()}function b(i){const r="https://pixabay.com/api/",s=`?key=42613362-c652a11a2e3360cb77c84ae86&q=${i}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=r+s+e;return fetch(t).then(o=>o.json()).then(o=>{if(o.total===0)throw new Error("No images found");return o})}const a=document.querySelector(".search-form"),l=document.querySelector(".gallery-o"),d=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{c(),a.addEventListener("submit",i);function i(n){n.preventDefault(),S(),l.innerHTML="";const s=a.querySelector(".input-search").value.trim();b(s).then(e=>{$(e.hits)}).catch(e=>{r(e)}).finally(()=>{c()})}function r(n){l.innerHTML="",h.show({message:`❌ "${n.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function S(){d.style.display="block"}function c(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
