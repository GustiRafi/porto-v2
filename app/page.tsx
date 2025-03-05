"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Twitter, Linkedin, Instagram, Code, Palette, Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-6 md:px-10 bg-white">
        <div className="container mx-auto flex justify-between items-center">
        <div className="neo-brutalist-green px-4 py-2 tilted">
          <span className="text-white font-bold text-xl">GUSTI.UNO</span>
        </div>

          {/* Mobile menu button */}
          <button className="md:hidden neo-brutalist-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {["Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="neo-brutalist-white px-4 py-2"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-20 right-6 z-50 neo-brutalism bg-white p-6 flex flex-col space-y-4 md:hidden">
              {["Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="neo-brutalism-sm px-3 py-1 hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <div className="neo-brutalist-green inline-block px-6 py-3 mb-4 tilted">
              <h1 className="text-4xl font-bold text-white">Hi There, I'm Rafi Gusti</h1>
            </div>
            <div className="neo-brutalist-white p-6 mb-8">
              <p className="text-xl">
                Full Stack Web Developer specializing in creating{" "}
                <span className="bg-black px-2 py-1 text-white">modern</span> and{" "}
                <span className="bg-black px-2 py-1 text-white">responsive</span> web
                applications.
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="neo-brutalist-green text-white tilted">
                Get Started →
              </Button>
              <Button className="neo-brutalist-white text-black">
                Hire Me
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="neo-brutalist-white p-8 relative">
              <div className="aspect-video bg-gray-100 rounded-lg">
                <img src="/images/me2.jpg" alt="Rafi Gusti" className="h-full w-full" />
              </div>
              <div className="neo-brutalist-green px-4 py-2 absolute -bottom-4 right-8 tilted">
                <span className="text-white font-medium">Full Stack Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="neo-brutalist-green inline-block px-6 py-3 mb-12 tilted">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pergiyuks",
              image: "/images/pergiyuks.png",
              description: "Pergiyuks is an agent platform that connects clients with agents to buy plane, train, ship, hotel and bill credit tickets.",
              tech: ["Nuxt.js", "Pinia", "Firebase", "TypeScript"],
            },
            {
              title: "ATA Tour Management Dashboard",
              image: "/images/tour.png",
              description: "ATA Tour Management Dashboard is a web application that helps tour operators manage their tours, bookings, and customers.",
              tech: ["Nuxt.js", "Pinia", "Bootstrap", "Laravel 10", "MySQL"],
            },
            {
              title: "WhatsApp Blaster API",
              image: "/images/project-wa.jpg",
              description: "WhatsApp Blaster is a application that helps you send bulk messages to your WhatsApp contacts.",
              tech: ["Node.js", "Express", "Venom Bot", "PostgreSQL"],
            },
          ].map((project, i) => (
            <Card key={i} className="neo-brutalist-white p-6">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 rounded-lg border-2 border-black">
                  <img src={project.image} alt={project.title} className="h-full w-full" />
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="neo-brutalist-white px-2 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="neo-brutalist-green inline-block px-6 py-3 mb-12 tilted">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="neo-brutalist-white p-6">
              <p className="text-lg">
                I'm a passionate Full Stack Web Developer with expertise in building modern, responsive, and user-friendly web applications. I specialize in JavaScript technologies and have a strong foundation in both frontend and backend development.
              </p>
            </div>
            <div className="neo-brutalist-white p-6">
              <p className="text-lg">
                With a focus on clean code and intuitive user experiences, I strive to create digital solutions that not only meet but exceed client expectations. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
            </div>
          </div>
          <div>
            <div className="neo-brutalist-green p-8 mb-2">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Next.js",
                  "vue",
                  "Nuxt",
                  "Laravel",
                  "PHP",
                ].map((skill) => (
                  <div key={skill} className="neo-brutalist-white px-3 py-2">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Development",
                  description: "Clean, efficient, scalable code",
                },
                {
                  icon: <Palette className="h-6 w-6" />,
                  title: "Design",
                  description: "Intuitive, responsive interfaces",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Performance",
                  description: "Fast, optimized applications",
                },
              ].map((item) => (
                <div key={item.title} className="neo-brutalist-white p-4">
                  <div className="space-y-2">
                    {item.icon}
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="neo-brutalist-green inline-block px-6 py-3 mb-12 tilted">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="neo-brutalist-white p-6">
              <h3 className="text-2xl font-bold mb-4">📧 Let's Work Together</h3>
              <p className="text-lg mb-4">
                I'm currently available for freelance work and full-time positions. If you have a project that needs a skilled web developer or are looking to add a dedicated team member to your company, I'd love to hear from you.
              </p>
              <p className="text-lg">
                Whether you have a specific project in mind or just want to discuss possibilities, feel free to reach out and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="neo-brutalist-green p-4 tilted">
              <span className="text-white text-lg">contact@gusti.uno</span>
            </div>
          </div>
          <div className="neo-brutalist-white p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <Input className="neo-brutalist-white" />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <Input className="neo-brutalist-white" type="email" />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Message</label>
                <Textarea className="neo-brutalist-white" rows={6} />
              </div>
              <Button className="neo-brutalist-green text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="neo-brutalist-green px-4 py-2 tilted mb-6 md:mb-0">
              <span className="text-white font-bold text-xl">GUSTI.UNO</span>
            </div>
            <div className="flex gap-4 mb-6 md:mb-0">
              {[Github, Twitter, Linkedin, Instagram].map((Icon) => (
                <Link
                  key={Icon.toString()}
                  href="#"
                  className="neo-brutalist-green p-2 text-white hover:opacity-80"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}