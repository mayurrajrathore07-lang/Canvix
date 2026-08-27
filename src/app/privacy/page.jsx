export const metadata = {
  title: "Privacy Policy | Canvix",
  description: "How Canvix collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: "When you contact us, request a consultation, or subscribe to our newsletter, we collect information such as your name, email address, phone number, and any message you provide.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use the information you provide to respond to inquiries, deliver the services you request, send updates you've opted into, and improve our website and offerings.",
  },
  {
    heading: "Sharing Your Information",
    body: "We do not sell your personal information. We may share it with trusted service providers who help us operate our business (e.g. hosting, email delivery), and only to the extent necessary for them to perform those services.",
  },
  {
    heading: "Cookies",
    body: "Our website may use cookies to remember your preferences and understand how visitors use our site. See our Cookies Policy for details.",
  },
  {
    heading: "Your Rights",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us at hello@canvix.com.",
  },
  {
    heading: "Contact Us",
    body: "If you have questions about this Privacy Policy, reach out to us at hello@canvix.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-accent-purple text-xs font-semibold uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
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
