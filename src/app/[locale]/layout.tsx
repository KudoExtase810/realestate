import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Locale, locales } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    // https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body className={poppins.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}