"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialProfileCard } from "@/components/social-profile-card"
import { Github, Send, Code, Shield, Zap, ExternalLink, Users, FileCode2, Globe, Cpu, Lock, Bug } from "lucide-react"

export default function Portfolio() {
  const [decryptedText, setDecryptedText] = useState("")
  const [isDecrypting, setIsDecrypting] = useState(false)

  const originalText = "@veinsploit"
  const encryptedChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    const startDecryption = () => {
      setIsDecrypting(true)
      let currentText = ""
      let iterations = 0
      const maxIterations = 30

      const interval = setInterval(() => {
        currentText = originalText
          .split("")
          .map((char, index) => {
            if (index < iterations / 3) {
              return originalText[index]
            }
            return encryptedChars[Math.floor(Math.random() * encryptedChars.length)]
          })
          .join("")

        setDecryptedText(currentText)
        iterations++

        if (iterations >= maxIterations) {
          clearInterval(interval)
          setDecryptedText(originalText)
          setIsDecrypting(false)

          setTimeout(() => {
            startDecryption()
          }, 3000)
        }
      }, 100)
    }

    startDecryption()
  }, [])

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend", icon: FileCode2, color: "text-yellow-400" },
    { name: "React", level: 85, category: "Frontend", icon: Globe, color: "text-blue-400" },
    { name: "Node.js", level: 88, category: "Backend", icon: Cpu, color: "text-green-400" },
    { name: "Python", level: 92, category: "Backend", icon: FileCode2, color: "text-blue-500" },
    { name: "PHP", level: 80, category: "Backend", icon: Code, color: "text-purple-400" },
    { name: "HTML/CSS", level: 95, category: "Frontend", icon: Globe, color: "text-orange-400" },
    { name: "API Security", level: 95, category: "Security", icon: Lock, color: "text-red-400" },
    { name: "Penetration Testing", level: 90, category: "Security", icon: Bug, color: "text-cyan-400" },
  ]

  const projects = [
    {
      title: "Email Spoofer",
      description: "Advanced email spoofing tool for security testing",
      tech: ["HTML", "CSS", "PHP"],
      status: "Active",
      url: "https://shahad.top/spoofer.php",
    },
    {
      title: "Web Shell",
      description: "Powerful web-based command execution interface",
      tech: ["PHP", "JavaScript"],
      status: "Active",
      url: "https://github.com/homo-developer/web-shell",
    },
    {
      title: "APK to Image Injector",
      description: "Steganography tool for embedding APK files in images",
      tech: ["Python"],
      status: "Active",
      url: "https://github.com/homo-developer/apk-to-img",
    },
    {
      title: "WormGPT API",
      description: "API interface for WormGPT AI model integration",
      tech: ["PHP"],
      status: "Active",
      url: "https://github.com/homo-developer/wormgpt-api",
    },
    {
      title: "Stealer",
      description: "Information gathering and extraction tool",
      tech: ["Kivy", "Python"],
      status: "Active",
      url: "https://github.com/homo-developer/stealer",
    },
    {
      title: "Telegram Member Scraper",
      description: "Advanced Telegram member extraction utility",
      tech: ["Python"],
      status: "Active",
      url: "https://github.com/homo-developer/atu-tg-mem-scrapper",
    },
  ]

  const duplicatedProjects = [...projects, ...projects, ...projects]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Terminal Grid Background */}
      <div className="fixed inset-0 terminal-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-mono font-bold text-primary neon-text glitch-text" data-text="DIE">
                DIE
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="https://github.com/homo-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hover:neon-glow"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://t.me/a_telegram_user"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors hover:neon-glow"
              >
                <Send size={20} />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <SocialProfileCard />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-accent neon-text">Skills</span> Matrix
            </h2>
            <p className="text-muted-foreground text-lg">Technical expertise across development and security domains</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card
                  key={skill.name}
                  className={`p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:neon-glow group ${
                    index === 0 || index === 3 ? "md:col-span-2" : ""
                  } ${index === 6 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`p-3 rounded-lg bg-background/50 ${skill.color} group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                    <div className="w-full space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-primary" size={24} />
                <h3 className="text-lg font-semibold">Development</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Full-stack development with modern frameworks and technologies
              </p>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-accent" size={24} />
                <h3 className="text-lg font-semibold">Security Research</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                API security, penetration testing, and vulnerability assessment
              </p>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-primary" size={24} />
                <h3 className="text-lg font-semibold">Tool Creation</h3>
              </div>
              <p className="text-muted-foreground text-sm">Custom security tools and automation frameworks</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-primary neon-text">Exploit</span> Lab
            </h2>
            <p className="text-muted-foreground text-lg">Interactive gallery of security tools and research projects</p>
          </div>

          <div className="relative">
            <div className="flex animate-infinite-scroll gap-6">
              {duplicatedProjects.map((project, index) => (
                <Card
                  key={`${project.title}-${index}`}
                  className="flex-shrink-0 w-80 p-6 bg-card/80 border-border hover:border-accent/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant={project.status === "Active" ? "default" : "secondary"}
                      className={project.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent hover:text-accent-foreground hover:bg-accent/20"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Source
                    </a>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-accent text-glow">Channel</span> Spotlight
              </h2>
              <p className="text-muted-foreground text-lg">Stay updated with the latest security research and tools</p>
            </div>

            <hr className="modern-hr mb-12" />

            <Card className="p-8 bg-card/80 border-border backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Send className="text-accent" size={32} />
                <h3 className="text-2xl font-bold font-mono">
                  <span
                    className={`${isDecrypting ? "text-accent" : "text-primary"} text-glow transition-colors duration-300`}
                  >
                    {decryptedText}
                  </span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Exclusive security research, tool releases, and cybersecurity insights. Join the community of security
                professionals and researchers.
              </p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Tools Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Daily</div>
                  <div className="text-sm text-muted-foreground">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Active</div>
                  <div className="text-sm text-muted-foreground">Community</div>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground subtle-glow" asChild>
                <a href="https://t.me/veinsploit" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2" size={20} />
                  Join Channel
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative p-12 rounded-2xl bg-card/50 border border-primary/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl animate-pulse" />
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-block p-4 rounded-full bg-primary/20 border border-primary/40 mb-6">
                    <Lock className="text-primary" size={32} />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-mono">
                    <span
                      className={`${isDecrypting ? "text-accent" : "text-primary"} text-glow transition-colors duration-300`}
                    >
                      INITIATE SECURE CONNECTION
                    </span>
                  </h2>
                  <div className="text-xs font-mono text-muted-foreground mb-6">
                    [ENCRYPTION: AES-256] [STATUS: {isDecrypting ? "DECRYPTING..." : "SECURE"}]
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Ready to collaborate on security research, custom tool development, or cybersecurity consulting?
                  Establish encrypted communication channel for secure project discussions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="text-sm font-mono text-primary mb-1">RESPONSE TIME</div>
                    <div className="text-lg font-bold">{"< 24H"}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="text-sm font-mono text-accent mb-1">SECURITY LEVEL</div>
                    <div className="text-lg font-bold">MAXIMUM</div>
                  </div>
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <div className="text-sm font-mono text-primary mb-1">AVAILABILITY</div>
                    <div className="text-lg font-bold">24/7</div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 subtle-glow font-mono"
                  asChild
                >
                  <a href="https://t.me/a_telegram_user" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2" size={24} />
                    ESTABLISH CONNECTION
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-card/20 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-card/10 to-transparent" />
        <div className="absolute inset-0 terminal-grid opacity-5" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-mono font-bold text-primary text-glow glitch-text" data-text="DIE">
                  DIE
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cybersecurity researcher and developer specializing in penetration testing, API security, and custom
                tool development.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary">SYSTEM ONLINE</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Access</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/homo-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github size={16} className="group-hover:subtle-glow transition-all" />
                  <span className="text-sm">GitHub Repository</span>
                </a>
                <a
                  href="https://t.me/veinsploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Send size={16} className="group-hover:subtle-glow transition-all" />
                  <span className="text-sm">Security Channel</span>
                </a>
                <a
                  href="https://t.me/a_telegram_user"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Users size={16} className="group-hover:subtle-glow transition-all" />
                  <span className="text-sm">Direct Contact</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Security Notice</h3>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <div className="flex items-start gap-3">
                  <Shield className="text-accent mt-0.5" size={16} />
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-accent">ETHICAL USE ONLY</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All tools and research are intended for educational purposes and authorized security testing only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="modern-hr mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/homo-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:subtle-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://t.me/a_telegram_user"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/50 border border-border hover:border-accent/50 text-muted-foreground hover:text-accent transition-all hover:subtle-glow"
              >
                <Send size={20} />
              </a>
              <a
                href="https://t.me/veinsploit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:subtle-glow"
              >
                <Users size={20} />
              </a>
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-muted-foreground text-sm">© 2025 DIE. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                <p className="font-mono text-xs text-muted-foreground">{"coded with ☠️ by DIE"}</p>
                <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
