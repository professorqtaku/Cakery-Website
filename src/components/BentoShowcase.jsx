import { Link } from "react-router-dom";

function BentoShowcase() {
    const showcaseItems = [
        {
            id: 1,
            title: "Grand Wedding Tiers",
            subtitle: "Celebrations",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAXcmJAAIXxPbOT3XA0Zh_HP1M_KQZZMYoUUMw724-cHPEw0twkUKZ2J3qH3PhHpxiL38X2VbUvS-EhzN_HQ7O_dxiF-GvV4F7UtBBAYbyQGcC90sNNXwuD0q_TTcRXsnGGiOeWNR6CuL72Ad7dnZ9-5dNUEbgZFjlQBzWItn5t69ZzHFpE6-zICvil4loMzYdBL51TUutpBZ-Ngo_tTqY3l7Ahv-YWl3ZeNvR9v3JdH3FtJaldiQKYRRyTDufLfb5jSE0hte4-Kt",
            size: "large",
            textColor: "text-white"
        },
        {
            id: 2,
            title: "Petite Pâtisserie",
            subtitle: "Everyday Joy",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5QRVWZtgENIMc6FDQMJE5eA9N1Bi_gxhjnJhYTXqhMLxG1qbHvBmc-_GTmglvpv88EWJ9O4ozwvziXsDjpqyBtRcVHBZRiOJIuvAI8aEikGOIoL31hzVwlKADcva_fX8FegGj9fMGusjeqtOkuQNx1PR1JhpS3SrDs30NqvR-FV3g9V5dH9x50PV_V1YIn78I8PTxrVcqtQvHS31b9-cSTirgJoqfz3CoaHBpZF-PHWViScKMeywcwCS10IpP4TQoPUdNB27j0jx2",
            size: "medium",
            textColor: "text-white"
        },
        {
            id: 3,
            title: "Artisan Cocoa",
            subtitle: "",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmgI-WSGe0sRUGV7Wgy9Ly1zoxnDva632cfBx0mvDHagIpEojzeM0gSix1RhBLtP7Hq3S4pDFFmbExneB0cqk_y_cxzBwQf0gaGeD6UB_ZyCn0_QIUnfGLsGiB2m7GcSWMCP2ndQcaPa_nmOkfLwmWJpeth1rcvHQSEu2UG07YnTPFlMEbq_ZFzJVG1q2clO_Q2CmtgSOztTsS2XpB_ir_wo1IVzA4bCItPKhNPSToymMPJLth4gjt1lC_-L0YU0U7f1oQw5meLfvG",
            size: "small",
            textColor: "text-white"
        },
        {
            id: 4,
            title: "Bespoke Detail",
            subtitle: "",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1uSTsdyI_OhGNIA8sdkO4CIynFKrWdd4tYbU6OMYU9AYSu8THzJiNgvc9b4dUDcNpAL5zE6aRcn-KsYc2bXdgXtIiqOuWaomcHvXurHLh1HBs0Gykonnfb0YSFEBjiOSArzaonrSdjZ3pbgs6EqSi0nb06OBTTLjWJbMGBEB8Ook-2GD3QpCEDsQglKMr-YNjfVJTifmWoWnvHuCkqQ-v3WZrZysQp1wQjcyCJ6xH5Ax6la6DvyHlDXqpEaNjgw8bZZbpcnu0hXGZ",
            size: "small",
            textColor: "text-white"
        }
    ];

    return (
        <section className="bg-neutral/20 py-24">
            <div className="max-w-7xl mx-auto px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">Curated Confections</h2>
                        <p className="text-secondary text-lg">Every creation is a dialogue between precision and passion, designed to elevate your most cherished moments.</p>
                    </div>
                    <Link to="/products" className="text-primary font-bold border-b-2 border-tertiary pb-1 hover:text-tertiary transition-all">
                        View All Products
                    </Link>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {/* Item 1 - Large (2x2) */}
                    <div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden bg-neutral shadow-lg">
                        <img
                            alt={showcaseItems[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={showcaseItems[0].image}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
                            <p className="text-xs uppercase tracking-widest mb-2 opacity-80">{showcaseItems[0].subtitle}</p>
                            <h3 className="text-3xl font-bold">{showcaseItems[0].title}</h3>
                        </div>
                    </div>

                    {/* Item 2 - Medium (2x1) */}
                    <div className="md:col-span-2 group relative rounded-2xl overflow-hidden bg-neutral shadow-lg">
                        <img
                            alt={showcaseItems[1].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={showcaseItems[1].image}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-secondary/80 to-transparent text-white">
                            <p className="text-xs uppercase tracking-widest mb-2 opacity-80">{showcaseItems[1].subtitle}</p>
                            <h3 className="text-2xl font-bold">{showcaseItems[1].title}</h3>
                        </div>
                    </div>

                    {/* Item 3 - Small (1x1) */}
                    <div className="group relative rounded-2xl overflow-hidden bg-neutral shadow-lg">
                        <img
                            alt={showcaseItems[2].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={showcaseItems[2].image}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-on-surface/60 to-transparent text-white">
                            <h3 className="text-xl font-bold">{showcaseItems[2].title}</h3>
                        </div>
                    </div>

                    {/* Item 4 - Small (1x1) */}
                    <div className="group relative rounded-2xl overflow-hidden bg-neutral shadow-lg">
                        <img
                            alt={showcaseItems[3].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={showcaseItems[3].image}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-tertiary/60 to-transparent text-white">
                            <h3 className="text-xl font-bold">{showcaseItems[3].title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BentoShowcase;