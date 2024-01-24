"use client";

import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, usePathname } from "@/lib/navigation";

interface MobileNavProps {
    links: {
        label: string;
        href: string;
    }[];
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ links, showSidebar, setShowSidebar }: MobileNavProps) => {
    const pathname = usePathname();

    const handleClose = () => setShowSidebar(false);

    useEffect(handleClose, [pathname]);

    return (
        <>
            {/* Overlay */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={handleClose}
                ></div>
            )}
            {/* Sidebar */}
            <div
                className={clsx(
                    "fixed h-screen z-20 right-0 top-0 bg-base-200 transition-transform duration-500",
                    !showSidebar && "translate-x-full"
                )}
            >
                <ul className="flex flex-col gap-2 text-center py-8 px-16">
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
            </div>
        </>
    );
};

export default MobileNav;
