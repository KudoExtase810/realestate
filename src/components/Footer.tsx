"use client";

import { Link, usePathname } from "@/lib/navigation";
import Image from "next/image";
import React from "react";

const Footer = () => {
    const pathname = usePathname();
    const visibleFooterPaths = ["/about"];

    if (!visibleFooterPaths.includes(pathname)) return null;

    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <Link href="/">
                    <Image
                        width={175}
                        height={30}
                        className="mb-2.5"
                        src="/images/logo.png"
                        alt="logo"
                    />
                </Link>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <Link href="#" className="link link-hover">
                    Branding
                </Link>
                <Link href="#" className="link link-hover">
                    Design
                </Link>
                <Link href="#" className="link link-hover">
                    Marketing
                </Link>
                <Link href="#" className="link link-hover">
                    Advertisement
                </Link>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <Link href="#" className="link link-hover">
                    About us
                </Link>
                <Link href="#" className="link link-hover">
                    Contact
                </Link>
                <Link href="#" className="link link-hover">
                    Jobs
                </Link>
                <Link href="#" className="link link-hover">
                    Press kit
                </Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <Link href="#" className="link link-hover">
                    Terms of use
                </Link>
                <Link href="#" className="link link-hover">
                    Privacy policy
                </Link>
                <Link href="#" className="link link-hover">
                    Cookie policy
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;
