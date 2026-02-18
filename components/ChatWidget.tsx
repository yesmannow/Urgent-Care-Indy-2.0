"use client";

import Script from "next/script";

const CHATBASE_INIT_SCRIPT = `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="NFZD3zwPCaKQY-_YxkNM3";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
`;

export function ChatWidget() {
  return (
    <Script
      id="chatbase-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: CHATBASE_INIT_SCRIPT }}
    />
  );
}
