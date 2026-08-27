export const metadata = {
  title: "Terms & Conditions | Canvix",
  description: "The terms and conditions governing your use of Canvix's website and services.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using the Canvix website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our site or services.",
  },
  {
    heading: "Our Services",
    body: "Canvix provides digital product engineering, design, marketing, and staffing services. Specific engagements are governed by separate signed agreements between Canvix and the client.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website, including text, graphics, logos, and code, is the property of Canvix unless otherwise noted, and may not be reproduced without permission.",
  },
  {
    heading: "Limitation of Liability",
    body: "Canvix is not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.",
  },
  {
    heading: "Contact Us",
    body: "Questions about these Terms & Conditions can be sent to hello@canvix.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <p className="text-accent-purple text-xs font-semibold uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Terms & Conditions</h1>
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
