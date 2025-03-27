import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  // Sample portfolio projects
  const projects = [
    {
      id: 1,
      title: "Bergens Bakeri",
      description:
        "En moderne nettside for et tradisjonelt bakeri i Bergen, med online bestillingssystem og produktkatalog.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Webdesign", "E-handel", "Responsivt"],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 2,
      title: "Trondheim Tannklinikk",
      description:
        "Profesjonell nettside med online booking-system for en tannklinikk i Trondheim.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Webdesign", "Booking", "SEO"],
      color: "from-turquoise-500 to-turquoise-600",
    },
    {
      id: 3,
      title: "Oslo Optikk",
      description:
        "E-handelsløsning for en optiker i Oslo, med produktvisning og virtuell prøving av briller.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["E-handel", "3D-visning", "Responsivt"],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      id: 4,
      title: "Stavanger Sjømat",
      description:
        "Nettbutikk for fersk sjømat med leveringstjeneste i Stavanger-området.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["E-handel", "Logistikk", "SEO"],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      title: "Kristiansand Kaffe",
      description:
        "Merkevarebygging og nettbutikk for et lokalt kaffebrenneri i Kristiansand.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Branding", "E-handel", "Innholdsstrategi"],
      color: "from-turquoise-500 to-turquoise-600",
    },
    {
      id: 6,
      title: "Tromsø Turisme",
      description:
        "Informasjonsrik turistportal for aktiviteter og opplevelser i Tromsø-området.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Informasjonsarkitektur", "Kart", "Flerspråklig"],
      color: "from-yellow-400 to-yellow-500",
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
                  Mine prosjekter
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Se hva jeg har{" "}
                  <span className="text-turquoise-600">skapt</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Utforsk min portefølje av nettsider jeg har designet og
                  utviklet for små bedrifter over hele Norge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
                >
                  <div
                    className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.color}`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 mix-blend-overlay opacity-75"
                    />
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
                      Se prosjektet{" "}
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                  step: "03",
                  title: "Design & Utvikling",
                  description:
                    "Jeg bygger nettstedet med fokus på brukervennlighet og som reflekterer din merkevare og appellerer til dine kunder",
                  color: "bg-yellow-100 text-yellow-700 border-yellow-200",
                },
                {
                  step: "04",
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
