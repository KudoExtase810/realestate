"use client";
import { Link, usePathname } from "@/lib/navigation";
import clsx from "clsx";
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
                        <li>
                            <Link
                                className={clsx(
                                    pathname !== link.href && "text-primary"
                                )}
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
