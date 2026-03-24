export interface FAQItem {
  id?: string;
  // support multiple naming variants used in the codebase
  q?: string; // short question (used in App.tsx)
  a?: string; // short answer (used in App.tsx)
  question?: string;
  answer?: string;
  domanda?: string;
  risposta?: string;
}
