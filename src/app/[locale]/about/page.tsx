import { Locale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

import HeaderSection from "@/components/about/HeaderSection";
import Team from "@/components/about/Team";
import Details from "@/components/about/Details";

const About = ({ params: { locale } }: { params: { locale: Locale } }) => {
    // https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
    unstable_setRequestLocale(locale);
    return (
        <div className="container mx-auto w-fit">
            {/* <HeaderSection /> */}
            <section className="section-padding flex max-lg:flex-col-reverse gap-8 px-4">
                <Team />
                <Details />
            </section>
        </div>
    );
};

export default About;
