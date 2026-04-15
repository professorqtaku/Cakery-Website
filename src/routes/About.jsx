import AboutHero from '../components/AboutHero';
import FeatureCard from '../components/FeatureCard';

function About() {
    return (
        <div className="bg-[var(--neutral)] text-[var(--on-surface)]">
            <AboutHero />

            <section className="bg-[var(--surface-container-low)] py-24 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                    <div className="grid gap-6">
                        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--surface)] p-10 patisserie-shadow min-h-[24rem]">
                            <div className="absolute inset-0 opacity-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMAtWTvC67wVIC7MDZmquijBrS23pH1sI15jqt_hvxYSaLHG3ws6BAr7B6-2xVqOkp3IC5QXNMOCucPsOGcH_6H1dcLkXmHWs6zG49gKdkmMKqdLOyq4lme75NuU3CX8yF5Q6bYZiwIYB3o4yVzbIkqPG82GuzQ7KfQdeLI54JK0f-0whf05DRZJcPCL39dgBmkdZ0gtWSAJ8DpHkblSMQcTXLcfmR-DX9KA97yAPCudBXT0LYG0XVjjrIQGacSxUFZ8IYLP04F8lK"
                                    alt="Baker's hands"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                                <div className="space-y-4">
                                    <span className="material-icons text-4xl text-[var(--primary)]">auto_awesome</span>
                                    <h3 className="font-headline text-3xl font-bold text-[var(--primary)]">8 Years of Refinement</h3>
                                    <p className="max-w-2xl text-[var(--on-surface-variant)]">
                                        Our journey began in a small home kitchen. Today, every recipe is a testament to nearly a decade of perfecting textures, flavors, and the art of the bake.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <FeatureCard
                            icon="auto_awesome"
                            title="Unforgettable Memories"
                            description="We don't just bake; we create the centerpiece for your most cherished celebrations. Your joy is our ultimate ingredient."
                            variant="tertiary"
                        />
                        <FeatureCard
                            icon="shopping_cart_checkout"
                            title="Digital Pâtisserie"
                            description="Experience our new seamless online ordering system, designed to bring artisanal excellence to your doorstep."
                            variant="primary"
                        />
                    </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
                    <div className="rounded-[2rem] bg-[var(--surface)] p-10 border border-[var(--outline)]">
                        <div className="grid gap-8 md:grid-cols-[1fr_1fr] items-center">
                            <div className="aspect-video overflow-hidden rounded-[1.5rem]">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRnV0pMp-lVBunMdqAsGiBArl9OfMW3wxzQMVzIbCAX02JEPty6iAamFR-b_p9XGGPekNxcjH4gA7fdCJwhEgyh-2ERFoJKz5rpW4rBOT3pcopufsH97_YoYm1UbUeCUwPR_P2J7x6BCDmaDB8XWWvSZga8qIbPxV0TwULulLOdYuGyoeqT5PgvpckYho33SUxaCClGGhz8igajXhK51sWFhPMHjs1_XHOioO5iGuvwzWI0hvoi8qKwobt1VW6SVE4nUclDcMHrLg6"
                                    alt="Delicious pastry"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl font-bold text-[var(--primary)] mb-4">Crafted for You</h3>
                                <p className="text-[var(--on-surface-variant)] text-sm leading-7">
                                    Every order is custom-made. We focus on the unique experience mentioned in our core philosophy, ensuring no two cakes are ever exactly the same.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-headline text-4xl sm:text-5xl font-black text-[var(--primary)] tracking-tight">Ready to create a memory?</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--on-surface-variant)]">
                        Browse our latest collection of cakes and cupcakes, curated for your next special moment.
                    </p>
                    <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="/products"
                            className="inline-flex rounded-full bg-[var(--primary)] px-10 py-4 text-[var(--on-primary)] font-semibold shadow-lg transition hover:bg-[var(--primary-container)]"
                        >
                            Explore Products
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex rounded-full border-2 border-[var(--primary)] px-10 py-4 text-[var(--primary)] font-semibold transition hover:bg-[var(--primary)]/10"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
