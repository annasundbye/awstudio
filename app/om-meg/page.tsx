import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pink-50 to-pink-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-turquoise-100 px-3 py-1 text-sm text-turquoise-700 font-medium mb-4">
                  Om meg
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Jeg er{" "}
                  <span className="text-pink-600">Anna Witchen Sundbye</span>
                </h1>
                <p className="text-lg text-gray-700 md:text-xl max-w-[600px]">
                  Webdesigner, digital strateg og grunnlegger av AWStudio
                </p>
              </div>
              <div className="relative">
                <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/anna-paris.png"
                    alt="Anna Witchen Sundbye"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-turquoise-500"></div>
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-pink-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-turquoise-500 to-turquoise-600 shadow-lg">
                  <Image
                    src="/anna-lofoten.png"
                    alt="Anna Witchen Sundbye working"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-yellow-400"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-pink-500"></div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium">
                  Min historie
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Fra idé til virkelighet
                </h2>
                <p className="text-gray-700 text-lg">
                  Jeg startet AWStudio med en enkel visjon: å hjelpe små
                  bedrifter i Norge med å utnytte kraften i digital teknologi.
                  Jeg så at mange små bedrifter slet med å etablere en effektiv
                  digital tilstedeværelse, og bestemte meg for å gjøre noe med
                  det.
                </p>
                <p className="text-gray-700 text-lg">
                  Med bakgrunn i både design og markedsføring, kombinerer jeg
                  kreativitet med strategisk tenkning for å skape nettsider som
                  ikke bare ser bra ut, men som også gir resultater.
                </p>
                <p className="text-gray-700 text-lg">
                  Min filosofi er enkel: jeg tror på å skape nettsider som er
                  skreddersydd for å møte mine kunders unike behov og mål.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-yellow-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-turquoise-100 px-3 py-1 text-sm text-turquoise-700 font-medium">
                  Mine verdier
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Hva jeg står for
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kreativitet",
                  description:
                    "Jeg tenker utenfor boksen for å skape unike og innovative løsninger for mine kunder.",
                  color: "bg-pink-100 text-pink-700 border-pink-200",
                },
                {
                  title: "Kvalitet",
                  description:
                    "Jeg leverer alltid arbeid av høyeste kvalitet, med fokus på detaljer og perfeksjonisme.",
                  color: "bg-yellow-100 text-yellow-700 border-yellow-200",
                },
                {
                  title: "Integritet",
                  description:
                    "Jeg er ærlig og transparent i alt jeg gjør, og setter alltid kundens behov først.",
                  color:
                    "bg-turquoise-100 text-turquoise-700 border-turquoise-200",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${
                      value.color
                    } flex items-center justify-center mb-4 border-2 ${
                      value.color.split(" ")[2]
                    }`}
                  >
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium">
                  Mine ferdigheter
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Ekspertise og kompetanse
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Design",
                  skills: [
                    "UI/UX Design",
                    "Responsivt Design",
                    "Visuell Identitet",
                  ],
                },
                {
                  category: "Utvikling",
                  skills: ["HTML/CSS", "JavaScript", "WordPress"],
                },
              ].map((skillset, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {skillset.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillset.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-turquoise-50 to-turquoise-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-700 font-medium">
                  Min bakgrunn
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Utdanning & Erfaring
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 border-b border-turquoise-200 pb-2">
                  Utdanning
                </h3>
                {[
                  {
                    degree: "Bachelor Digital kommunikasjon og Markedsføring",
                    institution: "BI Norwegian Business School",
                    year: "2023-2026",
                  },
                ].map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 border-b border-turquoise-200 pb-2">
                  Sertifisering
                </h3>
                {[
                  {
                    position: "Content  Marketing",
                    company: "HubSpot Acedamy",
                    year: "2024",
                  },
                ].map((exp, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">
                      {exp.position}
                    </h4>
                    <p className="text-gray-700">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-700 font-medium">
                  Kontaktinformasjon
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  La oss ta en prat
                </h2>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-pink-600 mr-3" />
                    <p className="text-gray-700">Oslo, Norge</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-pink-600 mr-3" />
                    <p className="text-gray-700">+47 45 26 73 67</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-pink-600 mr-3" />
                    <p className="text-gray-700">anna@awstudio.no</p>
                  </div>
                </div>
              </div>
              <div className="ml-auto relative h-[350px] w-[550px] rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
                <Image
                  src="/anna-bergen.png"
                  alt="AWStudio office location"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-pink-500"></div>
                <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-turquoise-500"></div>
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-yellow-200"></div>
                <div className="absolute -top-8 left-6 h-6 w-6 rounded-full bg-yellow-200"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
