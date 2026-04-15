import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-neutral py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left Content */}
                <div className="md:col-span-7 z-10">
                    <span className="text-xs tracking-widest uppercase mb-6 block font-semibold text-primary">Welcome to the Craft</span>
                    <h1 className="text-6xl md:text-8xl font-black text-primary leading-none tracking-tighter mb-8">
                        The Digital <br />
                        <span className="text-secondary">Pâtissier</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-xl leading-relaxed mb-10 font-medium">
                        Hi! Welcome to Munamii Cakery! We offer you the most delicious cakes and cupcakes for all kinds of events and celebrations. Browse around to discover what you would like to buy.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link
                            to="/products"
                            className="bg-primary text-white px-10 py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-all patisserie-shadow flex items-center gap-3"
                        >
                            Explore Collections
                            <span className="material-icons text-xl">arrow_forward</span>
                        </Link>
                        <Link
                            to="/about"
                            className="bg-tertiary text-secondary px-10 py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-all patisserie-shadow flex items-center gap-3"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>

                {/* Right Images */}
                <div className="md:col-span-5 relative">
                    {/* Main Image */}
                    <div className="aspect-[4/5] bg-neutral/10 rounded-2xl overflow-hidden patisserie-shadow transform rotate-2 translate-x-4">
                        <img
                            alt="Signature Cake"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYnilJZfXSof_9Vf86RMJ-UZNEpDYBJws7zLOc79XlYFbLGDwVwS-0Y_1cn6T1zeAwX0t5xIQEhGM3BOhJqV3A9o4zcQo6omlQwz3T0rbq3HoQROd52cAWVjYKXcTRBU-h9kz4Xtnppeo2lg8zNRe1PydOnUKJY1FdlObZ47ioQ3AEtE9l6IOdtuMnpATbxfua86hCNvysOMm8uUc1y0M5JBaZ8cQnPpNKFPSKptlRc0iQajnfPMdS1tLzxct-h0a6jKQiIZZit0Cd"
                        />
                    </div>

                    {/* Secondary Image */}
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-tertiary rounded-2xl overflow-hidden patisserie-shadow -rotate-6 hidden md:block">
                        <img
                            alt="Cupcakes"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hesMTSci-3wR2Gkihyc41EpL8U2LyySGadWvNxzI_9SNt6fQ84omoCfIYc-JeZAr_pJmdXOD5xsprsS6lcDBampF5LnULml08SwBgO3J02DBEJA0LaUTeRxR2lXXDgeXBWeQZtf_C3UP596xTAZIFsaJuRyBfPnafVQ6wJWzKUOXgC86IA9I4FUExc7gdfP16XFz6n4B3ioAAppKVKegtfexiI3BvgyDG9M0ze1DAda4HSNA-kIchWRW5mamiUC52ighY5cpm3-K"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;