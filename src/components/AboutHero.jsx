function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-[var(--neutral)] px-6 py-16 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
                <div className="space-y-6">
                    <span className="inline-flex rounded-full bg-[var(--tertiary-container)]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--tertiary)]">
                        Our Story
                    </span>
                    <h1 className="font-headline text-[2.75rem] sm:text-[3.75rem] leading-[0.95] font-black text-[var(--primary)]">
                        The Digital <span className="italic text-[var(--tertiary)]">Pâtissier</span>
                    </h1>
                    <div className="max-w-xl space-y-5 text-[var(--on-surface-variant)]">
                        <p className="text-lg leading-8">
                            At Munamii Cakery, each cake and each box of cupcakes that we make has a very special value for us. We not only want to bring a dessert to your table but rather a unique experience for you, which will become an unforgettable memory.
                        </p>
                        <p className="text-lg leading-8 font-semibold">
                            We have been in the pastry market for more than 8 years and now we offer you a new way to shop through our website.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 overflow-hidden rounded-[2rem] bg-[var(--surface)] patisserie-shadow">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6eEgB1jZtuxTkIc030crcfsjOJsMrTjItfLqYcYmgXIpkRfhNAu7HaC0V-2ICPaMJYfF6aoLVkUSRF657outsAK44uojsYXsMpjbb6Fx-XDSP_HuHmOz4EdafNow7pPQEVIZYRGH0jqyhgoPqxVZfd9EJZFWumy75MTYYkmp3JPIkx-YyPEZXba0g4Uj4dO9qkqt9FoSm0QOm95YLy8iM6qLEaXgy4-CnjSuNUkxJmQVX6Z4O-ASluUxSdQOWMitR9pq8tTVFwvGL"
                            alt="Exquisite layered cake"
                            className="h-[520px] w-full object-cover sm:h-[560px]"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-8 z-20 w-2/3 aspect-square overflow-hidden rounded-[1.75rem] border-8 border-[var(--surface)] bg-[var(--surface)] patisserie-shadow">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuh4eZLiLuzNzOHPkVX2boL7ny9N5uTopkoJELXFPHZK1G4J8RnweuN8RqyoNVIcXNfB5_ggiq_hYjAXnu42bCgu5DtvxcApvDkotSDQbaQ4BBfjdJss4zz0BsCebUY4VDtioTiXLSIGZ3Rl24Iu7bMQtpwknHQrhY0rdIdrgFciPS31NDVNjV8X_733Vfn7eauLopnTs0sP5ZTtXVn3aLm-RhlO8O4PDclQr7iZ7Jh8oND6WEBgVDEby-axhwf0F9MBWs2ZcGsjIV"
                            alt="Artisan cupcakes"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[var(--tertiary)]/10 blur-3xl" />
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
