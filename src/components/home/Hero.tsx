import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
    const t = useTranslations("Home");
    return (
        <section className="hero min-h-screen relative">
            <div className="hero-overlay bg-opacity-60 z-[2]"></div>
            <div className="hero-content text-center z-[3]">
                <div className="container text-center mx-auto lg:max-w-5xl">
                    <h1 className="uppercase mb-4 text-7xl font-black max-sm:font-boldREMOVED leading-tight max-lg:text-6xl max-sm:text-3xl">
                        {t("heading")}
                    </h1>
                    <p className="mb-5 sm:text-lg mx-auto lg:max-w-lg text-secondary-content">
                        {t("description")}
                    </p>
                    <Link href="/about" className="group gold-effect mx-auto">
                        <span className="z-10">{t("button")}</span>
                        <FaChevronRight className="z-10 transition-transform duration-300 group-hover:translate-x-3" />
                    </Link>
                </div>
            </div>
            <video
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                className="object-cover w-full h-full absolute inset-0"
            >
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Hero;
