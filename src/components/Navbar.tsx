"use client";

import { locales, type Locale } from "@/i18n";
import { Link, usePathname, useRouter } from "@/lib/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";
import Image from "next/image";

const Navbar = () => {
    const links = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
    ];
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
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
                <ul className="menu menu-horizontal px-1">
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
            </div>
        </header>
    );
};

export default Navbar;

const LocaleSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = useLocale() as Locale;
    const localeFlags: Record<Locale, string> = {
        en: "/images/flags/gb.svg",
        de: "/images/flags/de.svg",
    };
    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1">
                <Image
                    src={localeFlags[currentLocale]}
                    alt={currentLocale}
                    width={64 / 2}
                    height={42 / 2}
                    className="rounded-sm"
                    unoptimized
                />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content rounded-md -right-3 z-[1] menu p-2 shadow bg-base-100 mx-auto"
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
