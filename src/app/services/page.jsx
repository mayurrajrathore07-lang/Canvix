"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    FaBrain,
    FaCloud,
    FaShieldAlt,
    FaCode,
    FaUserTie,
    FaGraduationCap,
    FaBullseye,
    FaBezierCurve,
    FaPenNib,
    FaChartLine,
    FaLightbulb,
    FaBriefcase,
    FaSearch,
    FaTimes,
    FaComments,
    FaArrowRight,
    FaCheck,
    FaTools,
    FaRocket,
    FaLayerGroup,
    FaSyncAlt,
    FaHeadset,
} from "react-icons/fa";

const allServicesDetail = [
    {
        id: "ai-machine-learning",
        title: "AI & Machine Learning Engineering",
        category: "IT & TECHNOLOGY",
        tag: "NEXT-GEN AI",
        icon: <FaBrain />,
        theme: {
            iconBg: "bg-[#2E1065]/60",
            iconBorder: "border-[#6E56CF]/40",
            iconColor: "text-[#A78BFA]",
            accent: "#6E56CF",
        },
        tagline: "Custom generative AI, predictive models, and autonomous intelligent workflows",
        description:
            "Harness the power of enterprise artificial intelligence to automate repetitive tasks, extract high-value insights from unstructured data, and build conversational AI agents customized on your proprietary corporate knowledge.",
        deliverables: [
            "Custom LLM fine-tuning & RAG architectures",
            "Predictive analytics & forecasting engines",
            "AI agent development & automation",
            "NLP, Computer Vision & Deep Learning solutions",
        ],
        tools: ["PyTorch", "TensorFlow", "OpenAI", "LangChain", "HuggingFace", "Python", "Pinecone", "AWS Bedrock"],
        benefits: "Up to 65% faster operational cycle times and predictive data accuracy exceeding 94%.",
    },
    {
        id: "it-cloud-infrastructure",
        title: "IT Infrastructure, Cloud & DevOps",
        category: "IT & TECHNOLOGY",
        tag: "CLOUD & DEV",
        icon: <FaCloud />,
        theme: {
            iconBg: "bg-[#0C4A6E]/60",
            iconBorder: "border-[#38BDF8]/40",
            iconColor: "text-[#38BDF8]",
            accent: "#38BDF8",
        },
        tagline: "Enterprise cloud migrations, multi-cloud management, and automated CI/CD pipelines",
        description:
            "Design, migrate, and maintain ultra-reliable cloud architectures built for zero-downtime scalability, military-grade cybersecurity, and automated infrastructure-as-code.",
        deliverables: [
            "AWS, Azure, and Google Cloud multi-cloud setups",
            "Kubernetes container orchestration & microservices",
            "Automated CI/CD pipelines/GitHub Actions",
            "Terraform & Ansible infrastructure as code",
        ],
        tools: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Datadog", "Cloudflare"],
        benefits: "99.99% system uptime, zero-downtime deployments, and up to 35% reduction in cloud hosting bills.",
    },
    {
        id: "cybersecurity-compliance",
        title: "Cybersecurity & Risk Compliance",
        category: "IT & TECHNOLOGY",
        tag: "SECURITY",
        icon: <FaShieldAlt />,
        theme: {
            iconBg: "bg-[#064E3B]/60",
            iconBorder: "border-[#34D399]/40",
            iconColor: "text-[#34D399]",
            accent: "#34D399",
        },
        tagline: "Proactive threat detection, SOC2/ISO compliance, and zero-trust security architecture",
        description:
            "Protect enterprise digital assets with round-the-clock SIEM threat monitoring, penetration testing, automated vulnerability patching, and strict regulatory compliance management.",
        deliverables: [
            "Zero-Trust architecture & network defense",
            "SOC2 Type II, ISO27001 & HIPAA compliance",
            "Penetration testing & vulnerability audits",
            "24/7 SIEM monitoring & incident response",
        ],
        tools: ["CrowdStrike", "Palo Alto Networks", "Splunk", "Vanta", "Wireshark", "Metasploit", "Cloudflare Zero Trust"],
        benefits: "100% compliance audit readiness and proactive prevention against enterprise cyber attacks.",
    },
    {
        id: "custom-software-dev",
        title: "Custom Software & Mobile Development",
        category: "IT & TECHNOLOGY",
        tag: "DEVELOPMENT",
        icon: <FaCode />,
        theme: {
            iconBg: "bg-[#431407]/60",
            iconBorder: "border-[#FB923C]/40",
            iconColor: "text-[#FB923C]",
            accent: "#FB923C",
        },
        tagline: "High-performance web apps, cross-platform mobile apps, and microservice APIs",
        description:
            "Engineer resilient, scalable applications using Next.js, React Native, Node.js, and GraphQL. Built for sub-second response times, zero-downtime releases, and high-concurrency enterprise scale.",
        deliverables: [
            "Full-stack web applications & enterprise portals",
            "iOS & Android mobile apps (React Native/Flutter)",
            "Scalable RESTful & GraphQL API microservices",
            "Headless CMS & high-throughput e-commerce",
        ],
        tools: ["Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "GraphQL", "Redis", "TailwindCSS"],
        benefits: "Sub-second loading times, 100/100 Lighthouse performance, and seamless multi-platform user experiences.",
    },
    {
        id: "staffing-recruitment",
        title: "Staffing & Executive Tech Recruitment",
        category: "STAFFING & CAREERS",
        tag: "TALENT SOLUTIONS",
        icon: <FaUserTie />,
        theme: {
            iconBg: "bg-[#1E1B4B]/60",
            iconBorder: "border-[#818CF8]/40",
            iconColor: "text-[#818CF8]",
            accent: "#818CF8",
        },
        tagline: "Connecting high-growth tech companies with top 1% vetted engineering talent",
        description:
            "Overcome hiring bottlenecks with specialized technical staffing solutions. We rigorously vet software engineers, cloud architects, product leaders, and executives for remote and on-site roles.",
        deliverables: [
            "Direct-hire executive & tech search",
            "Contract-to-hire & flexible team augmentation",
            "Dedicated offshore & nearshore engineering squads",
            "Global payroll & compliance management (EOR/PEO)",
        ],
        tools: ["LinkedIn Recruiter", "Greenhouse", "Lever", "HackerRank", "CodeSignal", "Deel", "Rippling"],
        benefits: "Average hiring turnaround slashed from 60 days to 7 days with a 96% retention rate.",
    },
    {
        id: "career-coaching",
        title: "Career Services & Executive Coaching",
        category: "STAFFING & CAREERS",
        tag: "MENTORSHIP",
        icon: <FaGraduationCap />,
        theme: {
            iconBg: "bg-[#4C1D95]/60",
            iconBorder: "border-[#C084FC]/40",
            iconColor: "text-[#C084FC]",
            accent: "#C084FC",
        },
        tagline: "1-on-1 technical career coaching, ATS resume optimization, and interview prep",
        description:
            "Equip candidates and corporate teams with skills required to excel in modern tech ecosystems. We deliver customized executive coaching, system design prep, and salary negotiation strategies.",
        deliverables: [
            "ATS-optimized technical resume engineering",
            "System design & live coding mock interviews",
            "Executive salary & equity negotiation coaching",
            "Corporate technical leadership workshops",
        ],
        tools: ["Figma Portfolios", "LeetCode System Prep", "Jobscan", "Loom", "Miro", "Notion Hubs"],
        benefits: "Over 88% of coached professionals land top-tier tech offers with an average 32% compensation increase.",
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing & Growth Strategy",
        category: "MARKETING & CREATIVE",
        tag: "PERFORMANCE",
        icon: <FaBullseye />,
        theme: {
            iconBg: "bg-[#831843]/60",
            iconBorder: "border-[#F472B6]/40",
            iconColor: "text-[#F472B6]",
            accent: "#F472B6",
        },
        tagline: "Data-driven performance marketing campaigns that maximize acquisition and ROI",
        description:
            "Drive qualified demand and measurable revenue growth through multi-channel digital marketing. We craft full-funnel strategies encompassing PPC advertising, programmatic media, and CRO.",
        deliverables: [
            "Google Ads, Meta Ads & LinkedIn performance campaigns",
            "Conversion rate optimization (CRO) & A/B testing",
            "Lifecycle email marketing & funnel automation",
            "Multi-touch attribution & custom ROI dashboards",
        ],
        tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Mixpanel", "HubSpot", "Klaviyo", "Hotjar"],
        benefits: "Average 3.8x ROAS across paid channels and 42% reduction in customer acquisition costs (CAC).",
    },
    {
        id: "brand-identity",
        title: "Brand Identity & Graphic Design",
        category: "MARKETING & CREATIVE",
        tag: "BRANDING",
        icon: <FaBezierCurve />,
        theme: {
            iconBg: "bg-[#451A03]/60",
            iconBorder: "border-[#FBBF24]/40",
            iconColor: "text-[#FBBF24]",
            accent: "#FBBF24",
        },
        tagline: "Bespoke brand guidelines, visual identity systems, and investor pitch decks",
        description:
            "Elevate your company's visual communication with bespoke graphic design. We design high-converting marketing collateral, investor pitch decks, UI illustrations, and brand style guides.",
        deliverables: [
            "Primary logo, badge & icon vector suites",
            "Comprehensive Brand Identity Book & Style Guidelines",
            "Investor pitch decks & corporate presentations",
            "Design system tokens for web and mobile",
        ],
        tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Blender", "Storybook"],
        benefits: "Professional, investor-ready brand polish that increases sales collateral conversion by 60%.",
    },
    {
        id: "content-seo",
        title: "Content Marketing & Technical SEO",
        category: "MARKETING & CREATIVE",
        tag: "ORGANIC GROWTH",
        icon: <FaPenNib />,
        theme: {
            iconBg: "bg-[#134E4A]/60",
            iconBorder: "border-[#2DD4BF]/40",
            iconColor: "text-[#2DD4BF]",
            accent: "#2DD4BF",
        },
        tagline: "Authoritative technical content and SEO strategies to dominate search results",
        description:
            "Build unstoppable search presence and organic authority. Our content strategists and technical copywriters craft thought leadership articles, whitepapers, case studies, and programmatic SEO hubs.",
        deliverables: [
            "Technical SEO audits & speed optimization",
            "Enterprise keyword gap & intent research",
            "Thought-leadership articles & whitepapers",
            "High-authority white-hat backlink campaigns",
        ],
        tools: ["Ahrefs", "Semrush", "SurferSEO", "Clearscope", "Google Search Console", "WordPress", "Ghost"],
        benefits: "Consistent 200%+ organic traffic growth year-over-year and top-3 rankings for high-intent terms.",
    },
    {
        id: "accounting-cfo",
        title: "Accounting & Fractional CFO Advisory",
        category: "FINANCE & ADVISORY",
        tag: "FINANCIAL SUITE",
        icon: <FaChartLine />,
        theme: {
            iconBg: "bg-[#064E3B]/60",
            iconBorder: "border-[#34D399]/40",
            iconColor: "text-[#34D399]",
            accent: "#34D399",
        },
        tagline: "GAAP-compliant bookkeeping, financial modeling, and Fractional CFO leadership",
        description:
            "Gain crystal-clear visibility into your financials and maximize runway. We provide full-stack accounting services, GAAP-compliant bookkeeping, cash-flow forecasting, and strategic CFO guidance.",
        deliverables: [
            "Accrual & GAAP compliant monthly bookkeeping",
            "Financial modeling, scenario analysis & runway forecasting",
            "Fractional CFO advisory & Board reporting",
            "Corporate tax filing & R&D tax credit maximization",
        ],
        tools: ["QuickBooks Online", "Xero", "Carta", "Bill.com", "Expensify", "Excel Advanced", "Fathom"],
        benefits: "100% audit-readiness, optimized tax credits, and clear financial metrics to raise capital confidently.",
    },
    {
        id: "it-consulting",
        title: "IT Consulting & Digital Transformation",
        category: "IT & TECHNOLOGY",
        tag: "ADVISORY",
        icon: <FaLightbulb />,
        theme: {
            iconBg: "bg-[#713F12]/60",
            iconBorder: "border-[#FACC15]/40",
            iconColor: "text-[#FACC15]",
            accent: "#FACC15",
        },
        tagline: "Strategic enterprise architecture reviews and legacy stack modernization",
        description:
            "Navigate complex technological decisions with seasoned consultants. We evaluate software stacks, eliminate technical debt, consolidate SaaS vendors, and draft multi-year digital transformation roadmaps.",
        deliverables: [
            "Enterprise architecture & legacy modernization",
            "Technical debt audits & refactoring strategies",
            "SaaS stack consolidation & TCO reduction",
            "CTO-as-a-Service & engineering leadership",
        ],
        tools: ["Miro", "Lucidchart", "SonarQube", "OWASP ZAP", "AWS Well-Architected Framework", "Jira"],
        benefits: "30-50% reduction in technical debt, minimized security vulnerabilities, and unified tech stacks.",
    },
    {
        id: "business-consulting",
        title: "Enterprise Growth & Business Strategy",
        category: "FINANCE & ADVISORY",
        tag: "STRATEGY",
        icon: <FaBriefcase />,
        theme: {
            iconBg: "bg-[#1E293B]/60",
            iconBorder: "border-[#94A3B8]/40",
            iconColor: "text-[#94A3B8]",
            accent: "#94A3B8",
        },
        tagline: "Go-to-market execution, process automation, and organizational throughput",
        description:
            "Accelerate company valuation and market reach. We work hand-in-hand with founders, CEOs, and executive teams to optimize internal workflows, formulate GTM strategies, and scale organizational throughput.",
        deliverables: [
            "Go-to-Market (GTM) strategy & competitive positioning",
            "Operational process re-engineering & SOP automation",
            "Unit economics & pricing optimization models",
            "Agile transformation & squad structuring",
        ],
        tools: ["Asana", "Notion", "Monday.com", "Tableau", "PowerBI", "McKinsey/Bain Frameworks"],
        benefits: "Streamlined operational efficiency, clear OKR accountability, and faster time-to-market for new ventures.",
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery & Requirements",
        desc: "Deep-dive scoping workshops to align technical specifications, success metrics, and project roadmaps.",
        icon: <FaSearch />,
    },
    {
        step: "02",
        title: "Architecture & Blueprint",
        desc: "Drafting scalable system architectures, design tokens, data flow models, and sprint milestones.",
        icon: <FaLayerGroup />,
    },
    {
        step: "03",
        title: "Agile Execution & Delivery",
        desc: "Cross-functional engineering squads delivering bi-weekly code releases with full staging transparency.",
        icon: <FaRocket />,
    },
    {
        step: "04",
        title: "QA & Security Governance",
        desc: "Automated regression testing, SOC2/ISO audit compliance checks, and vulnerability penetration tests.",
        icon: <FaShieldAlt />,
    },
    {
        step: "05",
        title: "Zero-Downtime Launch",
        desc: "Blue-green deployment pipelines, telemetry setup, and live performance monitoring.",
        icon: <FaSyncAlt />,
    },
    {
        step: "06",
        title: "Continuous SLA & Scaling",
        desc: "24/7 infrastructure support, automated security patches, and ongoing performance optimizations.",
        icon: <FaHeadset />,
    },
];

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedModalService, setSelectedModalService] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        if (selectedModalService) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => document.body.classList.remove("modal-open");
    }, [selectedModalService]);

    const categories = [
        { label: "ALL", value: "ALL" },
        { label: "IT & TECHNOLOGY", value: "IT & TECHNOLOGY" },
        { label: "STAFFING & CAREERS", value: "STAFFING & CAREERS" },
        { label: "MARKETING & CREATIVE", value: "MARKETING & CREATIVE" },
        { label: "FINANCE & ADVISORY", value: "FINANCE & ADVISORY" },
    ];

    const filteredServices = allServicesDetail.filter((service) => {
        const matchesCategory =
            selectedCategory === "ALL" || service.category === selectedCategory;
        const matchesSearch =
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-[#FAF9FF] text-[#0B0F19] min-h-screen relative font-sans antialiased selection:bg-[#6E56CF] selection:text-white">
            {/* Header Section matching screenshot */}
            <section className="pt-10 pb-6 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto relative">
                {/* Background ambient lighting blobs */}
                <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#6E56CF]/10 via-[#818CF8]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute top-20 right-24 hidden lg:block opacity-25 pointer-events-none -z-10">
                    <div className="grid grid-cols-6 gap-3">
                        {Array.from({ length: 36 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#6E56CF]" />
                        ))}
                    </div>
                </div>

                {/* Badge */}
                <div className="mb-4">
                    <span className="inline-block bg-[#EFEBFF] text-[#6E56CF] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                        WHAT WE DO
                    </span>
                </div>

                {/* Main Heading Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0F19] tracking-tight leading-none flex flex-wrap items-baseline gap-3">
                            <span>Available Capabilities</span>
                            <span className="text-[#6E56CF]">({allServicesDetail.length})</span>
                        </h1>
                        {/* Purple Underline Bar */}
                        <div className="w-14 h-[4px] bg-[#6E56CF] rounded-full mt-3 mb-4" />

                        <p className="text-gray-600 text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                            Click on any service to explore deliverables, tech tools, and request a tailored quote.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <Link
                            href="/contact?type=custom-scope"
                            className="inline-flex items-center gap-2 bg-white hover:bg-[#F3F0FF] text-[#6E56CF] border border-[#DDD6FE] hover:border-[#C4B5FD] px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm group"
                        >
                            <span>Need Custom Scope?</span>
                            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Filter and Search Bar Controls */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 pb-2 border-t border-purple-100/60">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                                    selectedCategory === cat.value
                                        ? "bg-[#6E56CF] text-white shadow-sm"
                                        : "bg-white text-gray-600 hover:bg-purple-50 hover:text-[#6E56CF] border border-gray-200/80"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative min-w-[240px] md:w-72">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search capability or keyword..."
                            className="w-full bg-white border border-gray-200 rounded-full py-2 pl-9 pr-8 text-xs text-[#0B0F19] placeholder-gray-400 outline-none focus:border-[#6E56CF] focus:ring-2 focus:ring-[#6E56CF]/10 transition-all shadow-xs"
                        />
                        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0B0F19] p-1"
                            >
                                <FaTimes className="text-xs" />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* 2-Column Dark Cards Grid matching screenshot */}
            <section className="py-8 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
                {filteredServices.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-md mx-auto my-12">
                        <p className="text-gray-500 text-sm font-medium mb-4">
                            No capabilities matched your filter "{searchQuery}".
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("ALL");
                                setSearchQuery("");
                            }}
                            className="bg-[#6E56CF] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#5B45FF] transition"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {filteredServices.map((srv) => (
                            <div
                                key={srv.id}
                                id={srv.id}
                                className="bg-[#0B0F19] border border-slate-800/80 rounded-[28px] p-7 sm:p-9 text-white shadow-2xl flex flex-col justify-between hover:border-[#6E56CF]/50 transition-all duration-300 relative group overflow-hidden"
                            >
                                <div>
                                    {/* Top Header of Card */}
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <div className="flex items-center gap-4">
                                            {/* Category Icon */}
                                            <div
                                                className={`w-13 h-13 rounded-2xl ${srv.theme.iconBg} border ${srv.theme.iconBorder} ${srv.theme.iconColor} flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform duration-300`}
                                            >
                                                {srv.icon}
                                            </div>

                                            {/* Titles */}
                                            <div>
                                                <span className="text-[11px] font-bold tracking-widest uppercase text-[#818CF8] block mb-0.5">
                                                    {srv.category}
                                                </span>
                                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                                                    {srv.title}
                                                </h2>
                                            </div>
                                        </div>

                                        {/* Right Tag Pill */}
                                        <span className="border border-white/15 bg-white/5 text-gray-300 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider px-3.5 py-1.5 rounded-full uppercase shrink-0 self-start text-center">
                                            {srv.tag}
                                        </span>
                                    </div>

                                    {/* Tagline / Subtitle */}
                                    <p className="text-gray-200 text-sm font-semibold mb-3 leading-relaxed">
                                        {srv.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                        {srv.description}
                                    </p>

                                    {/* Divider Line */}
                                    <hr className="border-t border-white/10 my-6" />

                                    {/* What We Deliver Section */}
                                    <div className="mb-6">
                                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#818CF8] mb-4 block">
                                            WHAT WE DELIVER:
                                        </span>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {srv.deliverables.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-medium leading-tight">
                                                    <div className="w-4 h-4 rounded-full bg-[#1E1B4B] border border-[#6E56CF]/50 text-[#A78BFA] flex items-center justify-center text-[9px] shrink-0 mt-0.5">
                                                        <FaCheck />
                                                    </div>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Explore Service Link CTA */}
                                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedModalService(srv)}
                                        className="text-[#818CF8] hover:text-white font-semibold text-sm inline-flex items-center gap-2 transition group/link cursor-pointer"
                                    >
                                        <span>Explore Service</span>
                                        <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                                    </button>

                                    <Link
                                        href={`/contact?service=${encodeURIComponent(srv.title)}`}
                                        className="text-xs text-gray-400 hover:text-gray-200 transition underline underline-offset-4"
                                    >
                                        Inquire Quote
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Structured Methodology & Process Section */}
            <section className="bg-[#0B0F19] text-white py-20 px-6 md:px-12 lg:px-16 mt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="bg-[#6E56CF]/20 text-[#A78BFA] border border-[#6E56CF]/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block mb-4">
                            OUR METHODOLOGY
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                            How We Deliver Enterprise Excellence
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
                            A battle-tested 6-step engineering framework guaranteeing rapid velocity, predictable milestones, and uncompromised cybersecurity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((p, idx) => (
                            <div
                                key={idx}
                                className="bg-[#121726] border border-white/10 rounded-2xl p-7 hover:border-[#6E56CF]/60 transition duration-300 relative group"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#6E56CF]/20 text-[#A78BFA] flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                                        {p.icon}
                                    </div>
                                    <span className="text-xl font-mono font-extrabold text-white/20 group-hover:text-[#6E56CF] transition-colors">
                                        {p.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready to Accelerate CTA Card */}
            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-[#0B0F19] via-[#151928] to-[#0B0F19] border border-[#6E56CF]/30 rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#6E56CF]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none" />

                    <span className="bg-[#6E56CF]/20 text-[#A78BFA] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block mb-4">
                        TAILORED SOLUTIONS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                        Need Custom Scope or Dedicated Teams?
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Speak directly with our technical leads to architect a custom solution, review tech stacks, and receive a comprehensive proposal within 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-[#6E56CF] hover:bg-[#5B45FF] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                        >
                            <span>Book Technical Consultation</span>
                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all border border-white/10 flex items-center justify-center"
                        >
                            <span>Explore Portfolio</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Floating Action Button bottom right matching screenshot */}
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#5B45FF] hover:bg-[#4C36E0] text-white rounded-full shadow-2xl flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none ring-4 ring-[#5B45FF]/20"
                aria-label="Open Chat"
            >
                {isChatOpen ? <FaTimes /> : <FaComments />}
            </button>

            {/* Quick Chat Drawer / Popup */}
            {isChatOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-[#0B0F19] border border-slate-800 rounded-3xl shadow-2xl p-6 text-white animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#6E56CF] flex items-center justify-center text-white font-bold text-sm">
                                C
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Canvix Advisory</h4>
                                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Online now
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsChatOpen(false)}
                            className="text-gray-400 hover:text-white p-1"
                        >
                            <FaTimes className="text-sm" />
                        </button>
                    </div>
                    <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                        Hi there! Looking for specific deliverable scopes or custom engineering team pricing? Let us know what you need.
                    </p>
                    <div className="space-y-2 mb-4">
                        <Link
                            href="/contact?ref=chat-custom-quote"
                            className="block w-full text-center bg-[#6E56CF] hover:bg-[#5B45FF] text-white text-xs font-bold py-2.5 rounded-xl transition"
                        >
                            Request Custom Quote
                        </Link>
                        <Link
                            href="/contact?ref=chat-[#6E56CF]"
                            className="block w-full text-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 rounded-xl transition border border-white/10"
                        >
                            Schedule 1-on-1 Call
                        </Link>
                    </div>
                </div>
            )}

            {/* Service Detail Modal */}
            {selectedModalService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setSelectedModalService(null)}
                            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition"
                        >
                            <FaTimes />
                        </button>

                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-2xl ${selectedModalService.theme.iconBg} border ${selectedModalService.theme.iconBorder} ${selectedModalService.theme.iconColor} flex items-center justify-center text-xl shrink-0`}>
                                {selectedModalService.icon}
                            </div>
                            <div>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-[#818CF8]">
                                    {selectedModalService.category}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                    {selectedModalService.title}
                                </h3>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm font-semibold mb-4">
                            {selectedModalService.tagline}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                            {selectedModalService.description}
                        </p>

                        {/* Deliverables */}
                        <div className="mb-6 pt-4 border-t border-white/10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#818CF8] mb-3">
                                KEY DELIVERABLES INCLUDED:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {selectedModalService.deliverables.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-medium">
                                        <FaCheck className="text-[#818CF8] text-[10px] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6 pt-4 border-t border-white/10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                                <FaTools className="text-xs text-[#818CF8]" />
                                <span>TECH STACK & TOOLS USED:</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedModalService.tools.map((t, idx) => (
                                    <span key={idx} className="bg-white/10 border border-white/10 rounded-lg px-3 py-1 text-xs font-mono text-gray-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Expected Impact */}
                        <div className="bg-[#6E56CF]/10 border border-[#6E56CF]/30 rounded-2xl p-4 mb-6">
                            <span className="text-xs font-bold uppercase text-[#A78BFA] block mb-1">
                                MEASURABLE ROI & BUSINESS BENEFIT:
                            </span>
                            <p className="text-xs text-gray-300 leading-relaxed">
                                {selectedModalService.benefits}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <button
                                onClick={() => setSelectedModalService(null)}
                                className="w-full sm:w-auto text-xs text-gray-400 hover:text-white transition"
                            >
                                Close Preview
                            </button>
                            <Link
                                href={`/contact?service=${encodeURIComponent(selectedModalService.title)}`}
                                className="w-full sm:w-auto bg-[#6E56CF] hover:bg-[#5B45FF] text-white font-bold text-xs px-6 py-3 rounded-full text-center transition shadow-md"
                            >
                                Request Detailed Scope & Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
