"use client";

import { useSyncExternalStore } from "react";

const consentChangedEvent = "puretalk-cookie-consent-change";

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener(consentChangedEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(consentChangedEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getConsentSnapshot() {
  const consent = localStorage.getItem("puretalk-cookie-consent");
  return consent === "accepted" || consent === "declined" ? consent : null;
}

function getServerConsentSnapshot(): null {
  return null;
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const handleCookieConsent = (choice: "accepted" | "declined") => {
    localStorage.setItem("puretalk-cookie-consent", choice);
    window.dispatchEvent(new Event(consentChangedEvent));
  };

  if (consent !== null) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-description"
      className="cookie-banner fixed bottom-3 left-1/2 z-50 w-[calc(100%-24px)] max-w-[720px] -translate-x-1/2 rounded-xl border border-gray-200 bg-white px-4 py-4 text-[#292929] shadow-md sm:px-5"
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <svg
          viewBox="0 0 100 100"
          className="h-[62px] w-[62px] shrink-0 sm:h-[70px] sm:w-[70px]"
          role="img"
          aria-label="Cookie illustration"
        >
          <path
            d="M48 6C34 7 22 15 15 27 7 40 7 56 13 68c6 14 18 23 32 26 14 3 29-2 39-12 7-7 11-17 10-27-11 2-20-6-20-17C62 39 55 29 55 18c0-5-3-9-7-12Z"
            fill="#D5B27C"
            stroke="#171717"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="28" r="7" fill="#684323" stroke="#111" strokeWidth="3.5" />
          <circle cx="57" cy="40" r="7" fill="#684323" stroke="#111" strokeWidth="3.5" />
          <circle cx="30" cy="57" r="7" fill="#684323" stroke="#111" strokeWidth="3.5" />
          <circle cx="54" cy="72" r="7" fill="#684323" stroke="#111" strokeWidth="3.5" />
          <circle cx="74" cy="58" r="5" fill="#684323" stroke="#111" strokeWidth="3" />
        </svg>

        <div className="min-w-0 flex-1">
          <h2 className="text-[15px] font-semibold leading-6">Cookies!</h2>
          <p
            id="cookie-description"
            className="text-[13px] leading-[1.7] text-[#444] sm:text-[14px]"
          >
            We use cookies in order to personalize your site experience.
            <br className="hidden sm:block" /> By using our site you consent
            cookies.{" "}
            <a href="#learn-more" className="text-[#b69ae7] hover:underline">
              Learn more
            </a>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleCookieConsent("accepted")}
            className="rounded-full border-2 border-gray-200 px-3 py-2 text-[13px] font-medium text-[#08ad48] transition hover:border-green-300 hover:bg-green-50 sm:px-4 sm:text-sm"
          >
            Allow
          </button>
          <button
            onClick={() => handleCookieConsent("declined")}
            className="rounded-full border-2 border-gray-200 px-3 py-2 text-[13px] font-medium text-red-600 transition hover:border-red-200 hover:bg-red-50 sm:px-4 sm:text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
}
