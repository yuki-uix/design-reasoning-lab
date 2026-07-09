import {
  BookOpen,
  Coffee,
  Droplet,
  Dumbbell,
  Footprints,
  Heart,
  Leaf,
  Moon,
  Music,
  PenLine,
  Sprout,
  Sun,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Sun,
  Droplet,
  BookOpen,
  Footprints,
  Sprout,
  Moon,
  Heart,
  Dumbbell,
  PenLine,
  Coffee,
  Music,
  Leaf,
}

export function HabitIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = ICON_MAP[name] ?? Sprout
  return <Icon className={className} aria-hidden="true" />
}
