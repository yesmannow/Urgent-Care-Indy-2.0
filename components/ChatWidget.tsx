"use client";

import Script from "next/script";
import { useEffect } from "react";

const CHATBASE_INIT_SCRIPT = `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="NFZD3zwPCaKQY-_YxkNM3";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
`;

/** Nav bar uses z-[100000]; bubble must stay below it so nav is always on top. */
const CHATBUBBLE_Z_INDEX = "99990";
/** Mobile bottom nav height + padding so bubble sits above it. */
const MOBILE_NAV_OFFSET_PX = 92;

function useChatbaseMobilePosition() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

    const applyMobileStyles = () => {
      if (!isMobile()) return;
      const bubble = document.getElementById("chatbase-bubble-button") as HTMLElement | null;
      if (!bubble) return;
      const bottom = `calc(${MOBILE_NAV_OFFSET_PX}px + env(safe-area-inset-bottom, 0px))`;
      bubble.style.setProperty("bottom", bottom, "important");
      bubble.style.setProperty("z-index", CHATBUBBLE_Z_INDEX, "important");
      bubble.style.setProperty("right", "1rem", "important");
      bubble.setAttribute("data-mobile-positioned", "true");
    };

    applyMobileStyles();
    const observer = new MutationObserver(() => {
      if (document.getElementById("chatbase-bubble-button")) applyMobileStyles();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const interval = window.setInterval(applyMobileStyles, 500);
    const t = window.setTimeout(applyMobileStyles, 2500);
    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.clearTimeout(t);
    };
  }, []);
}

/** Inject CSS so bubble stays below nav on mobile (backup for JS). */
function useChatbaseMobileStyles() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "chatbase-mobile-overrides";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
@media (max-width: 767px) {
  #chatbase-bubble-button,
  button#chatbase-bubble-button {
    bottom: calc(5rem + 12px + env(safe-area-inset-bottom, 0px)) !important;
    right: 1rem !important;
    z-index: 99990 !important;
    width: 48px !important;
    height: 48px !important;
    min-width: 48px !important;
    min-height: 48px !important;
  }
}
`;
    document.head.appendChild(style);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);
}

export function ChatWidget() {
  useChatbaseMobileStyles();
  useChatbaseMobilePosition();
  return (
    <Script
      id="chatbase-widget"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{ __html: CHATBASE_INIT_SCRIPT }}
    />
  );
}
