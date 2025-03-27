import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/pink-logo.png" alt="" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Jeg skaper profesjonelle og effektive nettsider for små bedrifter
              i Norge.
            </p>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sider</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Tjenester
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Portefølje
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Tjenester
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Om meg
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Webdesign
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Innholdsstrategi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Vedlikehold
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">+47 45 26 73 67</li>
              <li className="text-sm text-muted-foreground">
                anna@awstudio.no
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AWStudio. Alle rettigheter reservert.
          </p>
          {/* <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Personvern
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Vilkår
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
