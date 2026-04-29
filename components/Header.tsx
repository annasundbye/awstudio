"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-brown-100/95 backdrop-blur supports-[backdrop-filter]:bg-brown-100/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 -ml-4 md:-ml-12">
          <Link href="/">
            <img src="/signatur2.png" alt="" className="h-16 md:h-28 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/tjenester"
            className={`text-sm font-medium transition-colors relative ${
              pathname === "/tjenester"
                ? "text-brown-700 font-semibold"
                : "text-gray-700 hover:text-brown-600"
            }`}
          >
            Tjenester
            {pathname === "/tjenester" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brown-600 rounded-full"></div>
            )}
          </Link>
          {/* <Link
            href="/design"
            className={`text-sm font-medium transition-colors relative ${
              pathname === '/design'
                ? 'text-brown-700 font-semibold'
                : 'text-gray-700 hover:text-brown-600'
            }`}
          >
            Design
            {pathname === '/design' && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brown-600 rounded-full"></div>
            )}
          </Link> */}
          <Link
            href="/om-meg"
            className={`text-sm font-medium transition-colors relative ${
              pathname === "/om-meg"
                ? "text-brown-700 font-semibold"
                : "text-gray-700 hover:text-brown-600"
            }`}
          >
            Om meg
            {pathname === "/om-meg" && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brown-600 rounded-full"></div>
            )}
          </Link>
          <Button
            size="lg"
            className="bg-brown-400 hover:bg-brown-500 text-white"
          >
            <Link href="/om-meg#contact">Kontakt meg</Link>
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Åpne meny</span>
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 ">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-sage-50 h-fit shadow-lg rounded-lg">
            <div className="relative">
              {/* <Link href="/">
                <img src="/signatur2.png" alt="" className="h-20 w-auto" />
              </Link> */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Lukk meny</span>
              </Button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                className={`block py-2 text-lg font-medium transition-colors ${
                  pathname === "/"
                    ? "text-brown-700 font-semibold bg-brown-50 px-3 rounded-lg"
                    : "hover:text-brown-600 hover:underline"
                }`}
                onClick={() => setOpen(false)}
              >
                Hjem
              </Link>
              <Link
                href="/tjenester"
                className={`block py-2 text-lg font-medium transition-colors ${
                  pathname === "/tjenester"
                    ? "text-brown-700 font-semibold bg-brown-50 px-3 rounded-lg"
                    : "hover:text-brown-600 hover:underline"
                }`}
                onClick={() => setOpen(false)}
              >
                Tjenester
              </Link>
              {/* <Link
                href="/design"
                className={`block py-2 text-lg font-medium transition-colors ${
                  pathname === "/design"
                    ? "text-brown-700 font-semibold bg-brown-50 px-3 rounded-lg"
                    : "hover:text-brown-600 hover:underline"
                }`}
                onClick={() => setOpen(false)}
              >
                Design
              </Link> */}
              <Link
                href="/om-meg"
                className={`block py-2 text-lg font-medium transition-colors ${
                  pathname === "/om-meg"
                    ? "text-brown-700 font-semibold bg-brown-50 px-3 rounded-lg"
                    : "hover:text-brown-600 hover:underline"
                }`}
                onClick={() => setOpen(false)}
              >
                Om meg
              </Link>
              <Link
                href="/om-meg#contact"
                className="block py-2 text-lg font-medium hover:underline"
                onClick={() => setOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
