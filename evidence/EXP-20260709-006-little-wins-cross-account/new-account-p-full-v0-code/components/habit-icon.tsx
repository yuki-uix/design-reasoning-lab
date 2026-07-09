import {
  Droplet,
  BookOpen,
  Wind,
  Footprints,
  Phone,
  Sparkles,
  Moon,
  Utensils,
  type LucideIcon,
} from "lucide-react"
import type { IconName } from "@/lib/habits"

const MAP: Record<IconName, LucideIcon> = {
  droplet: Droplet,
  book: BookOpen,
  wind: Wind,
  footprints: Footprints,
  phone: Phone,
  sparkles: Sparkles,
  moon: Moon,
  utensils: Utensils,
}

export function HabitIcon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  const Icon = MAP[name] ?? Sparkles
  return <Icon className={className} aria-hidden="true" />
}
