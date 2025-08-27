import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-br from-brown-50 to-sage-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-brown-200 opacity-30"></div>
      <div className="absolute bottom-6 left-8 w-16 h-16 rounded-full bg-sage-200 opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-pink-200 opacity-50"></div>
      
      <div className="container py-6 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 h-12 overflow-hidden"
            >
              <img
                src="/logo-sage.png"
                alt=""
                className="h-44 w-auto translate-y-2 -translate-x-4"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Jeg skaper profesjonelle og effektive nettsider for små bedrifter
              i Norge.
            </p>
          </div>
          <div></div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brown-800">Sider</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tjenester"
                  className="text-sm text-gray-800 hover:text-brown-700 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-brown-400 mr-2 group-hover:bg-brown-600 transition-colors"></div>
                  Tjenester
                </Link>
              </li>
              <li>
                <Link
                  href="/design"
                  className="text-sm text-gray-800 hover:text-brown-700 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-sage-400 mr-2 group-hover:bg-sage-600 transition-colors"></div>
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="/om-meg"
                  className="text-sm text-gray-800 hover:text-brown-700 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-pink-400 mr-2 group-hover:bg-pink-600 transition-colors"></div>
                  Om meg
                </Link>
              </li>
              <li>
                <Link
                  href="/om-meg#contact"
                  className="text-sm text-gray-800 hover:text-brown-700 transition-colors flex items-center group"
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2 group-hover:bg-yellow-600 transition-colors"></div>
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
            <h3 className="text-lg font-semibold mb-4 text-sage-800">Kontakt</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-800 flex items-center">
                <div className="w-2 h-2 rounded-full bg-brown-400 mr-2"></div>
                +47 45 26 73 67
              </li>
              <li className="text-sm text-gray-800 flex items-center">
                <div className="w-2 h-2 rounded-full bg-sage-400 mr-2"></div>
                anna@awstudio.no
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brown-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-800">
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
