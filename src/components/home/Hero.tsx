import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
    const t = useTranslations("Home");
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
                    <h1 className="font-transcend mb-5 text-7xl font-black max-sm:font-boldREMOVED leading-tight max-lg:text-6xl max-sm:text-3xl">
                        {t("heading")}
                    </h1>
                    <p className="mb-5 sm:text-lg mx-auto lg:max-w-lg text-secondary-content">
                        {t("description")}
                    </p>
                    <Link
                        href="#"
                        className="font-transcend group gold-effect mx-auto"
                    >
                        <span className="z-10">{t("button")}</span>
                        <FaChevronRight className="z-10 transition-transform duration-300 group-hover:translate-x-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
