"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-brown-100/95 backdrop-blur supports-[backdrop-filter]:bg-brown-100/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 -ml-4 md:-ml-16">
          <Link href="/">
            <img
              src="/logo-pink2.png"
              alt=""
              className="h-32 md:h-52 w-auto translate-y-2 md:translate-y-4"
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/tjenester"
            className="text-sm font-medium transition-colors hover:text-brown-600"
          >
            Tjenester
          </Link>
          <Link
            href="/design"
            className="text-sm font-medium transition-colors hover:text-brown-600"
          >
            Design
          </Link>
          <Link
            href="/om-meg"
            className="text-sm font-medium transition-colors hover:text-brown-600"
          >
            Om meg
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

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Åpne meny</span>
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 bg-white backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white h-fit shadow-lg">
            <div className="flex h-16 items-center justify-between px-6">
              <Link href="/">
                <img src="/blue-logo.png" alt="" className="h-12 w-auto" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto mr-2"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Lukk meny</span>
              </Button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-lg font-medium hover:underline"
                onClick={() => setOpen(false)}
              >
                Hjem
              </Link>
              <Link
                href="/tjenester"
                className="block py-2 text-lg font-medium hover:underline"
                onClick={() => setOpen(false)}
              >
                Tjenester
              </Link>
              <Link
                href="/design"
                className="block py-2 text-lg font-medium hover:underline"
                onClick={() => setOpen(false)}
              >
                Design
              </Link>
              <Link
                href="/om-meg"
                className="block py-2 text-lg font-medium hover:underline"
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
