import React from "react";

function ProjectDetailsDescription({ project }) {
    const listItems = [
        "One who avoids a pain that produces no resultant pleasure.",
        "laborious physical exercise",
        "One who avoids a pain that produces no resultant...",
        "which of us ever undertakes laborious...",
        "Avoids pleasure itself, because it is...",
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80",
    ];

    return (
        <section className="bg-[#0c0d0e] py-12 md:py-16 px-4 sm:px-6 md:px-8 text-white">
            <div className="max-w-4xl mx-auto space-y-12 sm:space-y-14">
                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-4">
                        01. The Challenge
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-4">
                        02. The Solution
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        Temporibus autem quibusdam aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 list-disc pl-5">
                        {listItems.map((item, idx) => (
                            <li key={idx} className="leading-relaxed">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-4">
                        03. The Result
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        When our power of choice is untrammeled and when nothing prevents us from being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    {galleryImages.map((imgUrl, i) => (
                        <div
                            key={i}
                            className="w-full h-56 sm:h-64 md:h-72 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-sm"
                        >
                            <img
                                src={imgUrl}
                                alt={`Gallery detail ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsDescription;

