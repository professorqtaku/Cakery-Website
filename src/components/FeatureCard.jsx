function FeatureCard({ icon, title, description, variant = 'surface', className = '' }) {
    const variantClasses = {
        surface: 'bg-[var(--surface)] text-[var(--on-surface)] border border-[var(--surface-variant)]/60',
        tertiary: 'bg-[var(--tertiary-container)]/5 text-[var(--tertiary)] border border-[var(--tertiary-container)]/20',
        primary: 'bg-[var(--primary-container)] text-[var(--on-primary)]',
    };

    return (
        <div className={`rounded-[2rem] p-8 ${variantClasses[variant]} ${className}`}>
            <span className="material-icons text-4xl">{icon}</span>
            <h3 className="mt-5 text-2xl font-headline font-bold">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--on-surface-variant)]">{description}</p>
        </div>
    );
}

export default FeatureCard;
