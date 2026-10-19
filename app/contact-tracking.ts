export type ContactMethod = "whatsapp" | "phone" | "email";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackContactClick(
  method: ContactMethod,
  placement: string,
  url: string,
) {
  if (typeof window === "undefined") return;

  const dataLayer = window.dataLayer ?? (window.dataLayer = []);
  dataLayer.push({
    event: "contact_click",
    contact_method: method,
    contact_placement: placement,
    link_url: url,
  });
}