"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/blue-logo.png" alt="" className="h-12 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {/* <Link
            href="/portfolio"
            className="text-sm font-medium transition-colors hover:text-pink-600"
          >
            Portefølje
          </Link> */}
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-pink-600"
          >
            Om meg
          </Link>
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Link href="/about#contact">Kontakt meg</Link>
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
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg">
            <div className="flex h-16 items-center justify-between px-6">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setOpen(false)}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-turquoise-600">
                  AWStudio
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Lukk meny</span>
              </Button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Hjem
              </Link>
              <Link
                href="/portfolio"
                className="block py-2 text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Portefølje
              </Link>
              <Link
                href="/services"
                className="block py-2 text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Tjenester
              </Link>
              <Link
                href="/about"
                className="block py-2 text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Om meg
              </Link>
              <Link
                href="/about#contact"
                className="block py-2 text-lg font-medium"
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
