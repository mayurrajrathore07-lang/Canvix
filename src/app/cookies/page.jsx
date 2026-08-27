export const metadata = {
  title: "Cookies Policy | Canvix",
  description: "How Canvix uses cookies and similar technologies on this website.",
};

const SECTIONS = [
  {
    heading: "What Are Cookies",
    body: "Cookies are small text files stored on your device that help websites remember information about your visit, such as preferences and session state.",
  },
  {
    heading: "How We Use Cookies",
    body: "We use cookies to keep our website running smoothly, remember your preferences, and understand how visitors interact with our site so we can improve it.",
  },
  {
    heading: "Third-Party Cookies",
    body: "Some cookies may be set by third-party services we use, such as analytics providers, to help us understand site traffic and usage patterns.",
  },
  {
    heading: "Managing Cookies",
    body: "Most browsers let you control or disable cookies through their settings. Disabling cookies may affect how parts of our website function.",
  },
  {
    heading: "Contact Us",
    body: "If you have questions about our use of cookies, contact us at hello@canvix.com.",
  },
];

export default function CookiesPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-accent-purple text-xs font-semibold uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Cookies Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.heading}>
              <h2 className="text-lg font-bold mb-2">{s.heading}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
