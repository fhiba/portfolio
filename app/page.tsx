"use client";

import { useEffect, useState } from "react";

const metadata = {
  title: "Felipe Hiba Portfolio",
  description:
    "Portfolio of Felipe Hiba, a university student in Ingeniería en Informática.",
};

type Translation = typeof import("../messages/messages_en").messages;

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [messages, setMessages] = useState<Translation | null>(null);

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "es") {
      setLang("es");
      import("../messages/messages_es").then((mod) =>
        setMessages(mod.messages),
      );
    } else {
      setLang("en");
      import("../messages/messages_en").then((mod) =>
        setMessages(mod.messages),
      );
    }
  }, []);

  if (!messages) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="navbar bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-extrabold p-4">{messages.headerName}</h1>
          <nav className="space-x-4 p-4">
            <a
              href="https://github.com/fhiba"
              className="btn btn-outline btn-sm"
            >
              {messages.navGitHub}
            </a>
            <a
              href="https://linkedin.com/in/felipe-hiba"
              className="btn btn-outline btn-sm"
            >
              {messages.navLinkedIn}
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{messages.aboutTitle}</h2>
          <p className="text-lg">{messages.aboutText}</p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{messages.educationTitle}</h2>
          <div className="space-y-6">
            {messages.educationItems.map((item, index) => (
              <div
                key={index}
                className="card bg-gray-800 shadow-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl">{item.school}</h3>
                  <p className="text-lg">{item.degree}</p>
                  <p className="text-sm">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {messages.experienceTitle}
          </h2>
          <div className="space-y-6">
            {messages.experienceItems.map((item, index) => (
              <div
                key={index}
                className="card bg-gray-800 shadow-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl">{item.company}</h3>
                  <p className="text-lg">{item.role}</p>
                  <p className="text-sm">{item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">{messages.projectsTitle}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {messages.projects.map((project, index) => (
              <div
                key={index}
                className="card bg-gray-800 shadow-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className="card-body">
                  <h3 className="card-title text-2xl">{project.title}</h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  {project.youtubeId && (
                    <div className="mt-4 w-full">
                      <div className="relative w-full aspect-[4/3]">
                        <iframe
                          src={`https://www.youtube.com/embed/${project.youtubeId}`}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 mt-12 py-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-sm">{messages.footerText}</p>
        </div>
      </footer>
    </main>
  );
}
