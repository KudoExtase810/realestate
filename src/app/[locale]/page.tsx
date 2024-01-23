import { Locale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "@/components/home/Hero";

export default function Home({
    params: { locale },
}: {
    params: { locale: Locale };
}) {
    // https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
    unstable_setRequestLocale(locale);
    return (
        <>
            <Hero />
        </>
    );
}
