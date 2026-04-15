function Footer({ className = "" }) {
    return (
        <footer className={`mt-auto w-full bg-[var(--surface)] py-12 ${className}`}>
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12">
                <div className="space-y-2 text-center md:text-left">
                    <p className="text-xl font-semibold text-[var(--primary)]">Munamii Cakery</p>
                    <p className="text-sm text-[var(--on-surface-variant)]">© 2024 Munamii Cakery. The Digital Pâtissier.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--secondary)]">
                    <a className="transition hover:text-[var(--primary)]" href="#">Instagram</a>
                    <a className="transition hover:text-[var(--primary)]" href="#">Facebook</a>
                    <a className="transition hover:text-[var(--primary)]" href="#">Pinterest</a>
                    <a className="transition hover:text-[var(--primary)]" href="mailto:hello@munamii.com">Email: hello@munamii.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
