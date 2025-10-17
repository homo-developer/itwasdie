import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Send, MapPin, Calendar, Users, Star } from "lucide-react"
import Image from "next/image"

export function SocialProfileCard() {
  return (
    <Card className="p-6 bg-card border-border max-w-sm mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <Image
            src="https://shahad.top/die.jpg"
            alt="DIE Profile"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-background" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground">DIE</h3>
          <p className="text-sm text-muted-foreground">@a_telegram_user</p>
          <Badge variant="outline" className="text-xs mt-1">
            Security Researcher
          </Badge>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Cyber Security Researcher & Developer. Crafting secure digital experiences through code and research.
      </p>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <MapPin size={12} />
          <span>Digital Realm</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>Joined 2025</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-1">
          <Users size={14} className="text-primary" />
          <span className="font-semibold">1.2K</span>
          <span className="text-muted-foreground">followers</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size={14} className="text-accent" />
          <span className="font-semibold">50+</span>
          <span className="text-muted-foreground">projects</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="sm" className="flex-1" asChild>
          <a href="https://t.me/a_telegram_user" target="_blank" rel="noopener noreferrer">
            <Send size={14} className="mr-1" />
            Contact
          </a>
        </Button>
        <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
          <a href="https://github.com/homo-developer" target="_blank" rel="noopener noreferrer">
            <Github size={14} className="mr-1" />
            GitHub
          </a>
        </Button>
      </div>
    </Card>
  )
}
