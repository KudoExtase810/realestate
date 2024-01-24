"use client";

import { locales, type Locale } from "@/i18n";
import { Link, usePathname, useRouter } from "@/lib/navigation";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import MobileNav from "./MobileNav";

const Navbar = () => {
    const t = useTranslations("Navbar");
    const [showSidebar, setShowSidebar] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    const links = [
        { label: t("home"), href: "/" },
        { label: t("about-us"), href: "/about" },
        { label: t("contact-us"), href: "https://develop.sspacess.com/form" },
        { label: t("login"), href: "https://develop.sspacess.com" },
    ];

    const openSidebar = () => setShowSidebar(true);
    return (
        <>
            <header
                className={clsx(
                    "navbar bg-base-100 px-4 md:px-8",
                    isHome && "absolute top-0 bg-opacity-50"
                )}
            >
                <div className="flex-1">
                    <Link href="/">
                        <Image
                            width={175}
                            height={30}
                            src="https://img.logoipsum.com/255.svg"
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-transcend max-md:hidden">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    className={clsx(
                                        pathname !== link.href && "text-primary"
                                    )}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <LocaleSwitcher />
                    <button
                        onClick={openSidebar}
                        className="md:hidden ml-2 text-primary"
                    >
                        <RiMenu3Fill size={28} />
                    </button>
                </div>
            </header>
            {/* Mobile nav sidebar */}
            <MobileNav
                links={links}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
        </>
    );
};

export default Navbar;

const LocaleSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = useLocale() as Locale;
    const localeFlags: Record<Locale, string> = {
        en: "/images/flags/uk.svg",
        de: "/images/flags/de.svg",
    };
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1">
                <Image
                    src={localeFlags[currentLocale]}
                    alt={currentLocale}
                    width={64 / 2.5}
                    height={42 / 2.5}
                    className="rounded-sm"
                    unoptimized
                />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content rounded-md -right-3 z-[1] menu p-2 shadow bg-base-200 mx-auto"
            >
                {locales.map((locale) => (
                    <li key={locale}>
                        <button
                            onClick={() => {
                                router.replace(pathname, { locale });
                            }}
                        >
                            {locale.toUpperCase()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
