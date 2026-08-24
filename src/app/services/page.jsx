"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaPenNib,
    FaBezierCurve,
    FaBullseye,
    FaDesktop,
    FaLightbulb,
    FaHeart,
    FaBrain,
    FaCloud,
    FaUserTie,
    FaGraduationCap,
    FaChartLine,
    FaBriefcase,
    FaShieldAlt,
    FaMobileAlt,
    FaDatabase,
    FaCheck,
    FaArrowRight,
    FaTools,
    FaLayerGroup,
    FaRocket,
    FaHeadset,
    FaSyncAlt,
    FaSearch,
} from "react-icons/fa";

const allServicesDetail = [
    {
        id: "ai-machine-learning",
        title: "AI & Machine Learning Engineering",
        category: "IT & Technology",
        tag: "Next-Gen AI",
        icon: <FaBrain />,
        tagline: "Custom generative AI, predictive models, and autonomous intelligent workflows",
        description:
            "Harness the power of enterprise artificial intelligence to automate repetitive tasks, extract high-value insights from unstructured data, and build conversational AI agents customized on your proprietary corporate knowledge.",
        deliverables: [
            "Custom LLM fine-tuning & RAG architectures",
            "Predictive analytics & forecasting engines",
            "Computer vision & document OCR pipelines",
            "Intelligent workflow automation & agentic bots",
            "Real-time fraud & anomaly detection models",
            "Enterprise AI governance & data privacy compliance",
        ],
        tools: ["PyTorch", "TensorFlow", "OpenAI", "LangChain", "HuggingFace", "Python", "Pinecone", "AWS Bedrock"],
        benefits: "Up to 65% faster operational cycle times and predictive data accuracy exceeding 94%.",
    },
    {
        id: "it-cloud-infrastructure",
        title: "IT Infrastructure, Cloud & DevOps",
        category: "IT & Technology",
        tag: "Cloud & Dev",
        icon: <FaCloud />,
        tagline: "Enterprise cloud migrations, multi-cloud management, and automated CI/CD pipelines",
        description:
            "Design, migrate, and maintain ultra-reliable cloud architectures built for zero-downtime scalability, military-grade cybersecurity, and automated infrastructure-as-code.",
        deliverables: [
            "AWS, Azure, and Google Cloud multi-cloud setups",
            "Kubernetes container orchestration & microservices",
            "Automated CI/CD pipelines (GitHub Actions, GitLab, Jenkins)",
            "Terraform & Ansible Infrastructure as Code (IaC)",
            "24/7 SIEM threat monitoring & SOC2 compliance",
            "Cloud cost optimization & FinOps audits",
        ],
        tools: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Datadog", "Cloudflare"],
        benefits: "99.99% system uptime, zero-downtime deployments, and up to 35% reduction in cloud hosting bills.",
    },
    {
        id: "staffing-recruitment",
        title: "Staffing & Executive Tech Recruitment",
        category: "Staffing & Careers",
        tag: "Talent Solutions",
        icon: <FaUserTie />,
        tagline: "Connecting high-growth tech companies with the top 1% vetted engineering & leadership talent",
        description:
            "Overcome hiring bottlenecks with our specialized technical staffing solutions. We rigorously vet software engineers, cloud architects, product managers, and executive leaders to build winning distributed teams.",
        deliverables: [
            "Direct-hire executive & tech search",
            "Contract-to-hire & flexible project staffing",
            "Dedicated offshore & nearshore engineering squads",
            "5-stage technical & culture-fit vetting",
            "Global payroll & compliance management (EOR/PEO)",
            "Guaranteed 60-day candidate replacement warranty",
        ],
        tools: ["LinkedIn Recruiter", "Greenhouse", "Lever", "HackerRank", "CodeSignal", "Deel", "Rippling"],
        benefits: "Average hiring time slashed from 60 days to 7 days, with a 96% candidate retention rate.",
    },
    {
        id: "career-services",
        title: "Career Services & Professional Coaching",
        category: "Staffing & Careers",
        tag: "Mentorship",
        icon: <FaGraduationCap />,
        tagline: "Empowering tech professionals with executive coaching, resume engineering, and interview mastery",
        description:
            "Equip candidates and internal employees with the skills required to thrive in modern tech ecosystems. We offer customized 1-on-1 career coaching, technical interview prep, and corporate upskilling programs.",
        deliverables: [
            "ATS-optimized technical resume & portfolio engineering",
            "System design & live coding mock interviews",
            "Executive salary & equity negotiation coaching",
            "Corporate leadership & technical upskilling workshops",
            "Career transition programs for AI & Cloud disciplines",
            "Personal branding & LinkedIn authority mastery",
        ],
        tools: ["Figma Portfolio Suites", "LeetCode System Prep", "Jobscan", "Loom", "Miro", "Notion Hubs"],
        benefits: "Over 88% of coached professionals land top-tier tech offers with an average 32% compensation jump.",
    },
    {
        id: "web-design",
        title: "Modern Web & Mobile App Engineering",
        category: "IT & Technology",
        tag: "Engineering",
        icon: <FaDesktop />,
        tagline: "High-performance, modern web applications and mobile apps engineered for conversion",
        description:
            "From high-throughput Next.js portals to cross-platform mobile apps, we engineer robust digital products with intuitive UI/UX, lightning-fast response times, and bulletproof responsive architecture.",
        deliverables: [
            "Fullstack Next.js, React, Node.js & TypeScript apps",
            "Native & cross-platform mobile apps (Flutter, React Native)",
            "Headless CMS, E-Commerce & GraphQL integrations",
            "Core Web Vitals & sub-second performance optimization",
            "RESTful & gRPC backend microservices architectures",
            "Progressive Web Apps (PWA) with offline support",
        ],
        tools: ["Next.js", "React", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Flutter", "GraphQL"],
        benefits: "Sub-second load times, 100/100 Core Web Vitals, and seamless multi-device user engagement.",
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing & Growth Strategy",
        category: "Marketing & Creative",
        tag: "Performance",
        icon: <FaBullseye />,
        tagline: "Data-driven performance marketing campaigns that maximize customer acquisition and ROI",
        description:
            "Drive qualified demand and measurable revenue growth through multi-channel digital marketing. We craft full-funnel strategies encompassing PPC advertising, programmatic media, and conversion rate optimization (CRO).",
        deliverables: [
            "Google Ads, Meta Ads & LinkedIn performance campaigns",
            "Conversion rate optimization (CRO) & A/B testing",
            "Multi-touch attribution modeling & analytics setup",
            "Email marketing automation & lifecycle retention funnels",
            "Programmatic display & retargeting networks",
            "Weekly ROI, CAC, and LTV performance dashboards",
        ],
        tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Mixpanel", "HubSpot", "Klaviyo", "Hotjar"],
        benefits: "Average 3.8x ROAS across paid channels and 42% reduction in customer acquisition costs (CAC).",
    },
    {
        id: "content-marketing",
        title: "Content Marketing & SEO Authority",
        category: "Marketing & Creative",
        tag: "Organic Growth",
        icon: <FaPenNib />,
        tagline: "Authoritative technical content and SEO strategies to capture organic enterprise traffic",
        description:
            "Build unstoppable search presence and industry authority. Our content strategists and technical copywriters craft thought leadership articles, case studies, whitepapers, and programmatic SEO hubs.",
        deliverables: [
            "Technical SEO audits & on-page search engine optimization",
            "Comprehensive keyword gap & competitor analysis",
            "High-impact thought leadership blog posts & whitepapers",
            "Infographics, interactive tools & downloadable assets",
            "High-authority white-hat backlink acquisition campaigns",
            "Content distribution across industry networks",
        ],
        tools: ["Ahrefs", "Semrush", "SurferSEO", "Clearscope", "Google Search Console", "WordPress", "Ghost"],
        benefits: "Consistent 200%+ organic traffic growth year-over-year and top-3 keyword rankings in high-intent queries.",
    },
    {
        id: "graphic-design",
        title: "Graphic Design & Visual Systems",
        category: "Marketing & Creative",
        tag: "Visual Design",
        icon: <FaBezierCurve />,
        tagline: "Captivating visual assets, pitch decks, and digital collateral tailored to your brand",
        description:
            "Elevate your company's visual communication with bespoke graphic design. We design high-converting marketing collateral, investor pitch decks, UI illustrations, and brand style guides that command attention.",
        deliverables: [
            "Investor pitch decks & corporate presentation decks",
            "Marketing collateral, brochures, banners & event materials",
            "Custom 2D/3D illustrations & iconography suites",
            "Social media visual templates & campaign asset kits",
            "Product packaging & merchandise design",
            "Print-ready CMYK and high-resolution digital exports",
        ],
        tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Blender", "Canva Pro"],
        benefits: "Professional, investor-ready brand polish that increases sales collateral engagement by 60%.",
    },
    {
        id: "brand-identity",
        title: "Brand Identity & Design Systems",
        category: "Marketing & Creative",
        tag: "Identity",
        icon: <FaHeart />,
        tagline: "Memorable logos, comprehensive brand guidelines, and distinctive design systems",
        description:
            "Craft a timeless brand identity that stands out in crowded marketplaces. We define your visual identity, typography hierarchies, color schemes, voice guidelines, and scalable design token systems.",
        deliverables: [
            "Primary logo, secondary marks & animated badge assets",
            "Comprehensive Brand Identity Book & Style Guidelines",
            "Color psychology palettes & typography hierarchies",
            "Voice, tone & brand messaging framework",
            "Design system tokens for web and mobile components",
            "Trademark-ready vector asset libraries",
        ],
        tools: ["Figma", "Adobe Creative Cloud", "Storybook", "Zeroheight", "FontLab"],
        benefits: "Cohesive multi-channel presence that increases brand recall and establishes immediate credibility.",
    },
    {
        id: "accounting-finance",
        title: "Accounting, Bookkeeping & Financial Advisory",
        category: "Finance & Advisory",
        tag: "Financial Suite",
        icon: <FaChartLine />,
        tagline: "Strategic financial modeling, tax compliance, and Fractional CFO advisory",
        description:
            "Gain crystal-clear visibility into your financials and maximize runway. We provide full-stack accounting services, GAAP-compliant bookkeeping, cash-flow forecasting, and strategic CFO guidance for tech enterprises.",
        deliverables: [
            "Accrual & GAAP compliant monthly bookkeeping",
            "Financial modeling, scenario analysis & runway forecasting",
            "Fractional CFO advisory & Board of Directors reporting",
            "Corporate tax filing & R&D tax credit maximization",
            "Automated payroll & multi-currency billing reconciliation",
            "Cap table management & investor due diligence preparation",
        ],
        tools: ["QuickBooks Online", "Xero", "Carta", "Bill.com", "Expensify", "Excel Advanced Models", "Fathom"],
        benefits: "100% audit-readiness, optimized tax credits, and clear financial visibility to raise capital confidently.",
    },
    {
        id: "it-consulting",
        title: "IT Consulting & Digital Transformation",
        category: "IT & Technology",
        tag: "Advisory",
        icon: <FaLightbulb />,
        tagline: "Aligning technological architectures with core business growth and operational velocity",
        description:
            "Navigate complex technological decisions with seasoned consultants. We evaluate your current software stack, identify security vulnerabilities, eliminate technical debt, and build multi-year IT roadmaps.",
        deliverables: [
            "Enterprise architecture review & legacy modernization",
            "Technical debt audits & software refactoring strategies",
            "Vendor & SaaS stack consolidation (TCO optimization)",
            "Disaster recovery & business continuity planning (BCP)",
            "Cybersecurity compliance & penetration test remediation",
            "CTO-as-a-Service & engineering leadership advisory",
        ],
        tools: ["Miro", "Lucidchart", "SonarQube", "OWASP ZAP", "AWS Well-Architected Framework", "Jira"],
        benefits: "30-50% reduction in technical debt, minimized security vulnerabilities, and unified tech stacks.",
    },
    {
        id: "business-consulting",
        title: "Enterprise Business Consulting & Growth Strategy",
        category: "Finance & Advisory",
        tag: "Strategy",
        icon: <FaBriefcase />,
        tagline: "Unlocking enterprise agility, operational excellence, and scalable go-to-market execution",
        description:
            "Accelerate company valuation and market reach. We work hand-in-hand with founders, CEOs, and executive teams to optimize internal workflows, formulate go-to-market strategies, and scale organizational throughput.",
        deliverables: [
            "Go-to-Market (GTM) strategy & competitive positioning",
            "Operational process re-engineering & SOP automation",
            "Agile transformation & cross-functional squad structuring",
            "Post-merger integration & technology alignment",
            "Unit economics & pricing optimization models",
            "Executive leadership coaching & KPI/OKR alignment",
        ],
        tools: ["Asana", "Notion", "Monday.com", "Tableau", "PowerBI", "Bain/McKinsey Frameworks"],
        benefits: "Streamlined operational efficiency, clear OKR accountability, and faster time-to-market for new ventures.",
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery & Requirements",
        desc: "We perform deep-dive discovery workshops to understand your technical specs, business metrics, and stakeholder goals.",
        icon: <FaSearch />,
    },
    {
        step: "02",
        title: "Architecture & Blueprint",
        desc: "Our architects draft detailed technical specifications, wireframes, data models, and an agile milestone roadmap.",
        icon: <FaLayerGroup />,
    },
    {
        step: "03",
        title: "Agile Sprints & Delivery",
        desc: "Cross-functional squads build deliverables in 2-week bi-weekly sprints with full transparency, staging demos, and weekly status calls.",
        icon: <FaRocket />,
    },
    {
        step: "04",
        title: "Quality Assurance & Security",
        desc: "Automated regression testing, load tests, penetration audits, and SOC2/HIPAA compliance verifications before rollout.",
        icon: <FaShieldAlt />,
    },
    {
        step: "05",
        title: "Production Deployment",
        desc: "Zero-downtime deployment pipelines, blue-green releases, and automated telemetry monitoring in live environments.",
        icon: <FaSyncAlt />,
    },
    {
        step: "06",
        title: "Continuous SLA & Optimization",
        desc: "24/7 dedicated support, continuous feature upgrades, performance tuning, and scalable long-term partnership.",
        icon: <FaHeadset />,
    },
];

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        "IT & Technology",
        "Staffing & Careers",
        "Marketing & Creative",
        "Finance & Advisory",
    ];

    const filteredServices = allServicesDetail.filter((service) => {
        const matchesCategory =
            selectedCategory === "All" || service.category === selectedCategory;
        const matchesSearch =
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-[#0c0d0e] text-white min-h-screen">
            {/* Hero Section */}
            <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden bg-gradient-to-b from-black via-[#0c0d0e] to-[#0c0d0e] border-b border-white/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#30B5AA]/10 blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block bg-[#30B5AA]/10 border border-[#30B5AA]/30 text-[#30B5AA] rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6">
                        Complete Services Suite
                    </span>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                        Enterprise Solutions Built <br />
                        <span className="text-[#30B5AA] font-sans font-extrabold">To Scale Your Business</span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                        From custom AI & software engineering to global IT staffing, performance marketing, and financial advisory — explore our unified services suite designed for ambitious enterprises.
                    </p>

                    {/* Search & Category Filter Controls */}
                    <div className="max-w-3xl mx-auto space-y-5">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by service, technology (e.g. Next.js, Python, SEO, Staffing)..."
                                className="w-full bg-[#18191c] border border-white/15 rounded-full px-6 py-4 pl-12 text-sm text-white placeholder-gray-500 outline-none focus:border-[#30B5AA] transition shadow-lg"
                            />
                            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2.5">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                                        selectedCategory === cat
                                            ? "bg-[#30B5AA] text-black shadow-md"
                                            : "bg-[#18191c] text-gray-300 hover:bg-white/10 border border-white/10"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* In-depth Services List Grid */}
            <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                            Available Capabilities ({filteredServices.length})
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">
                            Click on any service to explore deliverables, tech tools, and request a tailored quote.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#18191c] hover:bg-white hover:text-black text-white border border-white/15 px-6 py-2.5 rounded-full text-xs font-bold transition"
                    >
                        <span>Need Custom Scope?</span>
                        <FaArrowRight className="text-xs" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredServices.map((srv) => (
                        <div
                            key={srv.id}
                            id={srv.id}
                            className="bg-[#121316] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#30B5AA]/50 transition-all duration-300 group shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#30B5AA]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#30B5AA]/15 transition-all" />

                            <div>
                                {/* Card Header */}
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#30B5AA]/15 border border-[#30B5AA]/30 text-[#30B5AA] flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
                                            {srv.icon}
                                        </div>
                                        <div>
                                            <span className="text-[11px] text-[#30B5AA] font-bold uppercase tracking-wider block">
                                                {srv.category}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                                {srv.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                        {srv.tag}
                                    </span>
                                </div>

                                <p className="text-gray-300 text-xs sm:text-sm font-medium mb-3">
                                    {srv.tagline}
                                </p>

                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                                    {srv.description}
                                </p>

                                {/* Deliverables List */}
                                <div className="mb-6 pt-4 border-t border-white/10">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                                        What We Deliver:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {srv.deliverables.map((d, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2 text-xs text-gray-300"
                                            >
                                                <FaCheck className="text-[#30B5AA] text-[10px] mt-1 shrink-0" />
                                                <span>{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                                        Technologies & Frameworks:
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {srv.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg px-2.5 py-1 text-[11px] font-mono text-gray-300 transition"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Expected ROI / Impact */}
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
                                    <span className="text-[11px] font-bold uppercase text-[#30B5AA] block mb-1">
                                        Measurable Impact & ROI
                                    </span>
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        {srv.benefits}
                                    </p>
                                </div>
                            </div>

                            {/* Card CTA */}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-xs text-gray-400">
                                    Flexible monthly retainers & fixed milestones
                                </span>
                                <Link
                                    href={`/contact?service=${encodeURIComponent(srv.title)}`}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#30B5AA] hover:bg-white text-black font-bold text-xs px-6 py-3 rounded-full transition shadow-md"
                                >
                                    <span>Inquire About {srv.title.split(" ")[0]}</span>
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Enterprise Delivery Process */}
            <section className="bg-[#121316] py-24 px-6 md:px-12 border-t border-white/10 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-[#30B5AA] text-sm font-semibold uppercase tracking-widest mb-3">
                            Our Methodology
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                            How We Deliver Excellence <br className="hidden sm:inline" /> At Scale
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
                            A structured, ISO-grade delivery lifecycle that ensures zero friction, predictable milestones, and transparent client collaboration from day one.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, idx) => (
                            <div
                                key={idx}
                                className="bg-[#18191c] border border-white/10 rounded-3xl p-8 hover:border-[#30B5AA]/40 transition-all duration-300 relative group"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#30B5AA]/15 text-[#30B5AA] flex items-center justify-center text-lg font-bold">
                                        {step.icon}
                                    </div>
                                    <span className="text-2xl font-black font-mono text-white/20 group-hover:text-[#30B5AA] transition-colors">
                                        {step.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Card */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
                <div className="bg-gradient-to-r from-[#18191c] via-[#1b1e24] to-[#18191c] border border-[#30B5AA]/30 rounded-3xl p-10 sm:p-16 shadow-[0_0_40px_rgba(48,181,170,0.1)] relative overflow-hidden">
                    <span className="inline-block bg-[#30B5AA]/15 text-[#30B5AA] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                        Start Your Engagement Today
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Ready To Accelerate Your <br />
                        <span className="text-[#30B5AA]">Business Transformation?</span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Book a complimentary 30-minute scoping call with our technical leaders. We'll assess your requirements and furnish a detailed roadmap within 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#30B5AA] hover:bg-white text-black font-bold px-8 py-4 rounded-full text-sm transition shadow-lg"
                        >
                            <span>Book Consultation Call</span>
                            <FaArrowRight />
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white hover:text-black text-white font-bold px-8 py-4 rounded-full text-sm transition border border-white/10"
                        >
                            <span>View Case Studies</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
