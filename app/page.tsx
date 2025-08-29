import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  // Service packages
  const services = [
    {
      id: 1,
      title: "Webdesign",
      description:
        "Moderne og brukervennlige nettsider som representerer din merkevare på best mulig måte.",
      features: [
        "Responsivt design som fungerer på alle enheter",
        "Skreddersydd visuell identitet",
        "Brukervennlig navigasjon",
        "Optimalisert for hastighet og ytelse",
        "SEO-grunnlag for god synlighet",
      ],
      icon: "🎨",
      color: "from-pink-300 to-pink-400",
    },
    {
      id: 2,
      title: "Samarbeid",
      description:
        "Jeg tilbyr et tett samarbeid fra starten til slutten av prosjektet med rom for tilpasning.",
      features: [
        "Personlig kommunikasjon",
        "Jeg forstår og dekker bedriftens behov",
        "Åpent for tilbakemeldinger og justering under hele prosessen",
        // "Gir meg ikke før du er fornøyd",
        // "Kundekontoer og lojalitetsfunksjoner",
        // "Integrering med fraktløsninger",
      ],
      icon: "🫱🏼‍🫲🏾",
      color: "from-yellow-300 to-yellow-500",
    },
    {
      id: 3,
      title: "Oppfølging",
      description:
        "Oppfølging etter levert resultat er inkludert, for å sikre at nettsiden fungerer optimalt.",
      features: [
        "Viser deg hvordan du oppdaterer nettsiden selv.",
        "Svarer på spørsmål og gir råd.",
        "Jeg fikser eventuelle feil som dukker opp.",
      ],
      icon: "🌸",
      color: "from-sage-200 to-sage-500",
    },
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Konsultasjon",
      description:
        "Vi starter med en samtale om din bedrift, dine mål, målgruppe og behov.",
      color: "bg-brown-100 text-brown-600 border-brown-200",
    },

    {
      step: "02",
      title: "Design",
      description:
        "Jeg skaper et visuelt design som reflekterer din merkevare og appellerer til dine kunder.",
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
    },
    {
      step: "03",
      title: "Utvikling",
      description:
        "Jeg bygger nettstedet med fokus på brukervennlighet, hastighet og sikkerhet.",
      color: "bg-sage-100 text-sage-600 border-sage-200",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Grundig testing på ulike enheter og nettlesere for å sikre optimal funksjonalitet.",
      color: "bg-sage-100 text-sage-600 border-sage-200",
    },
    {
      step: "05",
      title: "Lansering",
      description:
        "Jeg lanserer nettstedet og sikrer at alt fungerer perfekt før jeg overleverer til deg.",
      color: "bg-brown-100 text-brown-600 border-brown-200",
    },
    {
      step: "06",
      title: "Support",
      description: "Etterjusterer produktet ved behov.",
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Hvor lang tid tar det å lage en nettside?",
      answer:
        "Tidsrammen varierer avhengig av prosjektets kompleksitet. En enkel nettside kan ta 1-2 uker, mens mer omfattende prosjekter kan ta 3-4 uker eller mer. Jeg gir alltid en detaljert tidsplan i starten av prosjektet.",
    },
    {
      question: "Hva koster det å få laget en nettside?",
      answer:
        "Prisen avhenger av prosjektets omfang, funksjonalitet og kompleksitet. Jeg tilbyr skreddersydde løsninger tilpasset ditt budsjett og behov. Kontakt meg for et uforpliktende tilbud basert på dine spesifikke krav.",
    },
    {
      question: "Vil jeg kunne oppdatere nettsiden selv?",
      answer:
        "Absolutt! Jeg bygger nettsider med brukervennlige administrasjonssystemer som gjør det enkelt for deg å oppdatere innhold, legge til produkter eller publisere innlegg. Jeg gir også grundig opplæring i hvordan du bruker systemet.",
    },
    {
      question: "Inkluderer du SEO i dine tjenester?",
      answer:
        "Ja, grunnleggende SEO er inkludert i alle mine webdesign-pakker. Dette omfatter optimalisering av sidetitler, meta-beskrivelser, alt-tekster for bilder, og en responsiv, rask nettside.",
    },
    {
      question: "Hjelper du med hosting og domene?",
      answer:
        "Ja, jeg kan hjelpe deg med å sette opp hosting og registrere domenenavn. Jeg kan også gi anbefalinger om pålitelige hostingleverandører basert på dine behov og budsjett.",
    },
    {
      question: "Tilbyr du vedlikehold etter lansering?",
      answer:
        "Ja, jeg tilbyr vedlikeholdsavtaler som inkluderer regelmessige oppdateringer, sikkerhetssjekker, backup og teknisk support. Dette sikrer at nettstedet ditt forblir oppdatert, sikkert og fungerer optimalt.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brown-200 to-brown-300 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/90 px-3 py-1 text-sm text-brown-700 mb-4 font-medium shadow-sm">
                  Mine tjenester
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                  Digitale løsninger for{" "}
                  <span className="text-white underline decoration-sage-400 decoration-4 underline-offset-4">
                    din bedrift
                  </span>
                </h1>
                <p className="text-lg text-white/90 md:text-xl max-w-[600px] drop-shadow">
                  Jeg tilbyr skreddersydde digitale tjenester som hjelper små
                  bedrifter med å vokse og lykkes på nett.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="bg-brown-400 hover:bg-brown-500 text-white"
                  >
                    <Link href="/about#contact">Kontakt meg</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto lg:ml-auto h-[300px] md:h-[350px] w-full max-w-[450px] rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-xl">
                <Image
                  src="/anna-paris.png"
                  alt="AWStudio tjenester"
                  fill
                  className="size-full scale-75 invert opacity-75"
                />
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-pink-400"></div>
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-sage-400"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-600 font-medium">
                  Hva jeg tilbyr
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Mine tjenester
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Jeg tilbyr en rekke digitale tjenester for å hjelpe din
                  bedrift med å lykkes på nett.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col h-full overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
                >
                  <div
                    className={`p-6 bg-gradient-to-br ${service.color} text-white`}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="opacity-90">{service.description}</p>
                  </div>
                  <div className="flex flex-col flex-1 p-6 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Dette får du:
                    </h4>
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brown-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <Button className="mt-auto w-full bg-turquoise-400 hover:bg-turquoise-500 text-white">
                      Les mer
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-brown-50 to-brown-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-sage-100 px-3 py-1 text-sm text-sage-600 font-medium">
                  Flere tjenester
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Spesialiserte tjenester
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  I tillegg til mine hovedtjenester, tilbyr jeg også disse
                  spesialiserte tjenestene.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innholdsproduksjon",
                  description:
                    "Profesjonell tekst og innhold som engasjerer dine besøkende og konverterer dem til kunder.",
                  color: "bg-brown-100 text-brown-600",
                },
                {
                  title: "Vedlikehold",
                  description:
                    "Kontinuerlig support og oppdateringer for å holde nettstedet ditt sikkert og oppdatert.",
                  color: "bg-yellow-100 text-yellow-600",
                },
                {
                  title: "Konverteringsoptimalisering",
                  description:
                    "Forbedring av nettstedet for å øke konverteringsraten og maksimere avkastningen.",
                  color: "bg-sage-100 text-sage-600",
                },
                {
                  title: "Søkemotoroptimalisering",
                  description:
                    "Strategier for å forbedre synligheten i søkemotorer og tiltrekke mer organisk trafikk.",
                  color: "bg-sage-100 text-sage-600",
                },
                {
                  title: "Sosiale medier",
                  description:
                    "Strategi og innhold for sosiale medier som bygger merkevarebevissthet og engasjement.",
                  color: "bg-brown-100 text-brown-600",
                },
                {
                  title: "Analyse og rapportering",
                  description:
                    "Detaljert innsikt i nettstedets ytelse for å ta datadrevne beslutninger.",
                  color: "bg-yellow-100 text-yellow-600",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-4`}
                  >
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-600 font-medium">
                  Min prosess
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Hvordan jeg jobber
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Min arbeidsprosess sikrer at jeg leverer høykvalitets
                  løsninger som møter dine behov og forventninger.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${
                      step.color
                    } flex items-center justify-center mb-4 border-2 ${
                      step.color.split(" ")[2]
                    }`}
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

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-yellow-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brown-100 px-3 py-1 text-sm text-brown-600 font-medium">
                  Spørsmål og svar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Ofte stilte spørsmål
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Her er svar på noen av de vanligste spørsmålene jeg får om
                  mine tjenester.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-sage-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-4">
                Har du flere spørsmål? Ikke nøl med å kontakte meg.
              </p>
              <Button className="bg-brown-400 hover:bg-brown-500 text-white">
                <Link href="/about#contact">Kontakt meg</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
