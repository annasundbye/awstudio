import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Hammer,
  Headset,
  Sparkle,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "AWStudio Lite",
      description:
        "Trenger du kun en statisk nettsiden, uten behov for å oppdatere innhold? Da er dette tilbudet for deg! Jeg bygger en moderne nettside tilpasset din merkevare og kundegruppe. Enkelt og greit.",
      tags: ["Webdesign", "Statisk", "Personlig"],
      icon: <WandSparkles color="#ffffff" strokeWidth={1.5} size={40} />,
      color: "from-pink-300 to-pink-500",
    },
    {
      id: 2,
      title: "AWStudio Pro",
      description:
        "Har du behov for å oppdatere nettsiden din bør du velge dette tilbudet. Jeg bygger den etter dine ønsker, med et integrert Content Management System. Opplæring følger med, og vipps er du din egen webdesigner!",
      icon: <Sparkle color="#ffffff" strokeWidth={1.5} size={52} />,
      tags: ["Webdesign", "Dynamisk", "CMS"],
      color: "from-turquoise-500 to-turquoise-200",
    },
    {
      id: 3,
      title: "AWStudio Pro + Digital Markedsføring",
      description:
        "I dette tilbudet følger alle godene med Pro, og du vil i tilegg få skreddersydd markedsføring tilpasset dine ønsker og behov.",
      icon: <Sparkles color="#ffffff" strokeWidth={1.5} size={52} />,
      tags: ["Webdesign", "SoMe", "Digital Markedsføring"],
      color: "from-yellow-200 to-yellow-400",
    },
    {
      id: 4,
      title: "AWStudio Support",
      description:
        "For statiske nettsider er det mulighet til å inngå en vedlikeholdsavtale.",
      icon: <Headset color="#ffffff" strokeWidth={1.5} size={52} />,
      tags: ["AWStudio Lite", "Support", "Vedlikehold"],
      color: "from-yellow-100 to-yellow-200",
    },
    {
      id: 5,
      title: "Kommer snart...",
      description:
        "Jeg jobber for tiden med et online-booking-system som så snart som mulig lanseres – en løsning kundene dine enkelt kan ta i bruk direkte via nettsiden.",
      icon: <Hammer color="#ffffff" strokeWidth={1.5} size={52} />,
      tags: [],
      color: "from-pink-100 to-pink-300",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-turquoise-50 to-turquoise-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium mb-4">
                  Mine tilbud
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Se hva jeg <span className="text-turquoise-600">tilbyr</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Utforsk pakketilbudene, og velg pakken som passer ditt behov
                  best!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative max-w-sm flex flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
                >
                  <div
                    className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.color}`}
                  >
                    <div className="opacity-95 mix-blend-overlay flex justify-center items-center h-full">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-2 group border-turquoise-500 text-turquoise-600 hover:bg-turquoise-50 border-2"
                    >
                      <Link href="/about#contact">
                        Kontakt meg for et uforplikende tilbud{" "}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-yellow-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-turquoise-100 px-3 py-1 text-sm text-turquoise-700 font-medium">
                  Min prosess
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Hvordan jeg jobber
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Fra idé til lansering - min prosess sikrer at jeg leverer
                  nettsider som oppfyller dine mål og behov.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Konsultasjon",
                  description:
                    "Vi starter med å forstå din bedrift, dine mål og din målgruppe.",
                  color: "bg-pink-100 text-pink-700 border-pink-200",
                },
                {
                  step: "02",
                  title: "Design & Utvikling",
                  description:
                    "Jeg bygger nettstedet med fokus på brukervennlighet og som reflekterer din merkevare og appellerer til dine kunder",
                  color: "bg-yellow-100 text-yellow-700 border-yellow-200",
                },
                {
                  step: "03",
                  title: "Lansering",
                  description:
                    "Jeg lanserer nettstedet og sikrer at alt fungerer perfekt før jeg overleverer til deg.",
                  color:
                    "bg-turquoise-100 text-turquoise-700 border-turquoise-200",
                },
              ].map((step, index) => (
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

        {/* Testimonials */}
        {/* <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium">
                  Kundeomtaler
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Hva mine kunder sier
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Jeg er stolt av å ha hjulpet mange små bedrifter i Norge med å
                  lykkes på nett.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kari Nordmann",
                  company: "Karis Kafé",
                  testimonial:
                    "Anna hjalp meg med å lage en nettside som virkelig representerer min kafé. Jeg har fått mange nye kunder takket være henne!",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Ola Hansen",
                  company: "Hansens Håndverk",
                  testimonial:
                    "Profesjonell og kreativ tjeneste. Nettsiden min har aldri sett bedre ut, og den er så enkel å bruke!",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Lise Olsen",
                  company: "Olsens Blomster",
                  testimonial:
                    "Fantastisk service fra start til slutt. Anna forstod nøyaktig hva jeg trengte og leverte over forventning.",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
