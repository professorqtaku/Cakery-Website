import { useState } from "react";

function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="bg-neutral py-24 relative">
            <div className="max-w-5xl mx-auto px-8">
                <div className="bg-tertiary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-lg">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <span className="text-xs tracking-widest uppercase mb-4 block font-semibold text-secondary">The Secret Ingredient</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Join Our Kitchen Journal</h2>
                        <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto">
                            Subscribe to receive exclusive seasonal recipes, early access to limited edition bakes, and artisanal inspiration straight to your inbox.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow px-6 py-4 rounded-lg bg-white text-on-surface border-none focus:ring-2 focus:ring-secondary text-lg outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all whitespace-nowrap shadow-lg"
                            >
                                Subscribe Now
                            </button>
                        </form>

                        {submitted && (
                            <p className="mt-4 text-green-100 font-semibold">
                                ✓ Thanks for subscribing! Check your email for confirmation.
                            </p>
                        )}

                        <p className="mt-6 text-secondary/80 text-sm italic">
                            We value your privacy like our family recipes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;