import { Link } from "@/lib/navigation";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(/images/hero.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center">
                <div className="container text-center mx-auto lg:max-w-5xl">
                    <h1 className="mb-5 text-7xl font-semibold max-sm:font-bold leading-tight max-lg:text-6xl max-sm:text-3xl">
                        Find and explore your dream property at affordable
                        prices
                    </h1>
                    <p className="mb-5 sm:text-lg mx-auto lg:max-w-lg text-secondary-content">
                        Ready to live apparments in a premium location with
                        complete facilities and affordable prices.
                    </p>
                    <Link
                        href="#"
                        className="btn btn-primary flex gap-1.5 items-center group max-w-sm mx-auto"
                    >
                        <span>Get started</span>
                        <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
