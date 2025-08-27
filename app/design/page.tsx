import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, ExternalLink, Palette, Monitor, Smartphone, Layout, Globe, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function DesignPage() {
  // Design categories
  const designTypes = [
    {
      id: 1,
      title: "Webdesign",
      description: "Moderne og responsive nettsider som skaper inntrykk og konverterer besøkende til kunder.",
      icon: <Monitor className="h-8 w-8" />,
      color: "from-brown-200 to-brown-400",
      examples: [
        "E-handel nettsider",
        "Bedrift presentasjonssider",
        "Portfolio nettsider",
        "Blogg og innholdssider"
      ]
    },
    {
      id: 2,
      title: "Mobil design",
      description: "App-design og mobiltilpassede løsninger for optimal brukeropplevelse på alle enheter.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-sage-200 to-sage-400",
      examples: [
        "Mobile apper",
        "Responsive webdesign",
        "Touch-vennlige grensesnitt",
        "Progressive Web Apps"
      ]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Brukergrensesnitt og brukeropplevelse design som fokuserer på funksjonalitet og estetikk.",
      icon: <Layout className="h-8 w-8" />,
      color: "from-pink-200 to-pink-400",
      examples: [
        "Wireframes og prototyper",
        "Brukerreise kartlegging",
        "Interaksjonsdesign",
        "Brukbarhetstesting"
      ]
    },
    {
      id: 4,
      title: "Visuell identitet",
      description: "Logo design, fargepaletter og merkevareidentitet som skaper gjenkjennelig profil.",
      icon: <Palette className="h-8 w-8" />,
      color: "from-yellow-200 to-yellow-400",
      examples: [
        "Logo design",
        "Fargepaletter",
        "Typografi",
        "Merkevare guidelines"
      ]
    },
    {
      id: 5,
      title: "E-handel design",
      description: "Nettbutikk design som optimaliserer salg og skaper en sømløs handleopplevelse.",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-brown-300 to-brown-500",
      examples: [
        "Produktkatalog design",
        "Handlekurv optimalisering",
        "Checkout prosess",
        "Kundekontoer"
      ]
    },
    {
      id: 6,
      title: "Landingsider",
      description: "Målrettede landingsider som konverterer trafikk til leads og salg.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-sage-300 to-sage-500",
      examples: [
        "Lead generering",
        "Produkt lansering",
        "Event promotering",
        "Kampanje sider"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brown-200 to-brown-300 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-white/90 px-3 py-1 text-sm text-brown-700 font-medium mb-4 shadow-sm">
                  Design portefølje
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                  Kreative <span className="text-white underline decoration-sage-400 decoration-4 underline-offset-4">designløsninger</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                  Utforsk de forskjellige typene design jeg kan lage for din bedrift - 
                  fra nettsider til visuell identitet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Types Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brown-100 px-3 py-1 text-sm text-brown-600 font-medium">
                  Mine spesialiteter
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Design tjenester
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Jeg tilbyr en bred portefølje av designtjenester tilpasset dine behov og målgruppe.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designTypes.map((design) => (
                <div
                  key={design.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl bg-white border border-gray-100"
                >
                  <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${design.color}`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white/90">
                      {design.icon}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Eye className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {design.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-1">
                      {design.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-gray-900">Eksempler:</h4>
                      <ul className="space-y-1">
                        {design.examples.map((example, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 rounded-full bg-brown-400 mr-2 flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-auto border-brown-400 text-brown-600 hover:bg-brown-50 border-2"
                    >
                      <Link href="/om-meg#contact" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Kontakt for tilbud
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brown-50 to-brown-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sage-100 px-3 py-1 text-sm text-sage-600 font-medium">
                  Design prosess
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Fra idé til ferdig design
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Min strukturerte designprosess sikrer at jeg leverer løsninger som møter dine forventninger.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Oppdagelse",
                  description: "Vi diskuterer dine mål, målgruppe og designpreferanser for å forstå ditt behov.",
                  color: "bg-brown-100 text-brown-600 border-brown-200"
                },
                {
                  step: "02", 
                  title: "Konsept",
                  description: "Jeg lager initiale skisser og konsepter basert på vår samtale og research.",
                  color: "bg-sage-100 text-sage-600 border-sage-200"
                },
                {
                  step: "03",
                  title: "Design",
                  description: "Utvikling av detaljert design med farger, typografi og alle visuelle elementer.",
                  color: "bg-pink-100 text-pink-600 border-pink-200"
                },
                {
                  step: "04",
                  title: "Levering",
                  description: "Ferdig design leveres med alle nødvendige filer og dokumentasjon.",
                  color: "bg-yellow-100 text-yellow-600 border-yellow-200"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4 border-2`}
                  >
                    <span className="font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Klar for å starte ditt designprosjekt?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
                  Kontakt meg i dag for en uforpliktende samtale om hvordan jeg kan hjelpe deg med dine designbehov.
                </p>
              </div>
              <Button size="lg" className="bg-brown-400 hover:bg-brown-500 text-white">
                <Link href="/om-meg#contact">Få et tilbud</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}