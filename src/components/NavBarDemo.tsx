"use client"

import { Home, Lightbulb, ArrowRight, Briefcase, HelpCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

// Composants d'icônes sans "use server"
function HomeIcon(props: any) {
  return <Home {...props} />
}

function LightbulbIcon(props: any) {
  return <Lightbulb {...props} />
}

function ArrowRightIcon(props: any) {
  return <ArrowRight {...props} />
}

function BriefcaseIcon(props: any) {
  return <Briefcase {...props} />
}

function HelpCircleIcon(props: any) {
  return <HelpCircle {...props} />
}

const NavBarDemo = () => {
  const navItems = [
    { name: 'Accueil', url: '#hero', icon: HomeIcon },
    { name: 'Fonctionnalités', url: '#features', icon: LightbulbIcon },
    { name: 'Processus', url: '#process', icon: ArrowRightIcon },
    { name: 'Industries', url: '#industries', icon: BriefcaseIcon }
  ]

  return <NavBar items={navItems} />
}

export default NavBarDemo 