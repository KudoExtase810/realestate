import Image from "next/image";

const HeaderSection = () => {
    return (
        <section className="hero section-padding">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-8">
                <Image
                    alt="Dubai"
                    height={720}
                    width={450}
                    quality={100}
                    src="/images/dubai.jpg"
                    className="max-w-full rounded-lg"
                />
                <div className="max-lg:text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <p className="py-6 text-secondary-content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas numquam, cumque dolor tempore
                        necessitatibus pariatur, quaerat vel ea optio itaque
                        alias provident nesciunt laboriosam eum? Ipsa, ipsam
                        vel!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
