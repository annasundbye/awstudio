import { Button } from "@/components/ui/button";
import {
  Eye,
  Palette,
  Monitor,
  Smartphone,
  Layout,
  Globe,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function DesignPage() {
  // Design categories
  const designTypes = [
    {
      id: 1,
      title: "Minimalistisk",
      description:
        "En luftig og enkel stil der innholdet står i fokus. Lite distraksjoner, ryddig oppsett og lett å navigere.",
      icon: <Monitor className="h-8 w-8" />,
      color: "from-brown-200 to-brown-400",
    },
    {
      id: 2,
      title: "Moderne",
      description:
        "Et oppdatert og tidsriktig uttrykk med rene linjer, struktur og profesjonelle elementer. Gir et klart og pålitelig inntrykk.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-sage-200 to-sage-400",
    },
    {
      id: 3,
      title: "Artsy",
      description:
        "Et kreativt og visuelt spennende design med unike former, farger og detaljer. Perfekt om dere vil skille dere ut og være litt annerledes.",
      icon: <Layout className="h-8 w-8" />,
      color: "from-pink-200 to-pink-400",
    },
    {
      id: 4,
      title: "Retro",
      description:
        "Et design inspirert av en bestemt tidsperiode, som 70-, 80- eller 90-tallet. Skaper nostalgi og personlighet, samtidig som det føles lekent.",
      icon: <Palette className="h-8 w-8" />,
      color: "from-yellow-200 to-yellow-400",
    },
    {
      id: 5,
      title: "Industriell",
      description:
        "Et robust og stilrent uttrykk med mørke toner, sterke kontraster og litt “rå” preg. Gir assosiasjoner til styrke og teknikk.Nettbutikk design som optimaliserer salg og skaper en sømløs handleopplevelse.",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-brown-300 to-brown-500",
    },
    {
      id: 6,
      title: "Organisk/naturlig",
      description:
        "En myk og innbydende stil med naturinspirerte farger og former. Passer godt for å formidle ro, bærekraft og tillit..",
      icon: <Globe className="h-8 w-8" />,
      color: "from-sage-300 to-sage-500",
    },
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
                  Kreative{" "}
                  <span className="text-white underline decoration-sage-400 decoration-4 underline-offset-4">
                    designløsninger
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl drop-shadow">
                  Utforsk de forskjellige typene design jeg kan lage for din
                  bedrift - fra nettsider til visuell identitet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Types Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-brown-100 px-3 py-1 text-sm text-brown-600 font-medium">
                  Mine design
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Design tjenester
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Jeg tilbyr forskjellige designstiler tilpasset din bedrifts
                  personlighet og målgruppe. Alle mine nettsider er dynamiske,
                  brukervennlige og responsive.
                </p>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  {" "}
                  Illustrasjonene under viser noen få eksempler på hva jeg kan
                  tilby. Jeg former nettsider som passer din identitet, uansett
                  stil.{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designTypes.map((design) => (
                <div
                  key={design.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl bg-white border border-gray-100"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span className="text-sm font-medium">
                        Style eksempel kommer snart
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Eye className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div
                    className={`flex flex-1 flex-col p-6 bg-gradient-to-br ${design.color} text-white`}
                  >
                    <div className="flex items-center mb-3">
                      {design.icon}
                      <h3 className="text-xl font-bold ml-3 drop-shadow">
                        {design.title}
                      </h3>
                    </div>
                    <p className="mb-4 flex-1 text-white font-medium drop-shadow-sm leading-relaxed">
                      {design.description}
                    </p>
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
                  Min strukturerte designprosess sikrer at jeg leverer løsninger
                  som møter dine forventninger.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Oppdagelse",
                  description:
                    "Vi diskuterer dine mål, målgruppe og designpreferanser for å forstå ditt behov.",
                  color: "bg-brown-100 text-brown-600 border-brown-200",
                },
                {
                  step: "02",
                  title: "Konsept",
                  description:
                    "Jeg lager initiale skisser og konsepter basert på vår samtale og research.",
                  color: "bg-sage-100 text-sage-600 border-sage-200",
                },
                {
                  step: "03",
                  title: "Design",
                  description:
                    "Utvikling av detaljert design med farger, typografi og alle visuelle elementer.",
                  color: "bg-pink-100 text-pink-600 border-pink-200",
                },
                {
                  step: "04",
                  title: "Levering",
                  description:
                    "Ferdig design leveres med alle nødvendige filer og dokumentasjon.",
                  color: "bg-yellow-100 text-yellow-600 border-yellow-200",
                },
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
                  Kontakt meg i dag for en uforpliktende samtale om hvordan jeg
                  kan hjelpe deg med dine designbehov.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-brown-400 hover:bg-brown-500 text-white"
              >
                <Link href="/om-meg#contact">Få et tilbud</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
