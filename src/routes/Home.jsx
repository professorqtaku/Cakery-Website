import HeroSection from "../components/HeroSection";
import BentoShowcase from "../components/BentoShowcase";
import NewsletterSection from "../components/NewsletterSection";

function Home() {
    return (
        <div className="bg-neutral">
            <HeroSection />
            <BentoShowcase />
            <NewsletterSection />
        </div>
    );
}

export default Home;