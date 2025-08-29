"use client"

import type * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Home,
  History,
  Users,
  Crown,
  Navigation,
  Compass,
  FolderOpen,
  BookOpen,
  GraduationCap,
  Handshake,
  FileText,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "História",
    icon: History,
    items: [
      {
        title: "REDHT e CAPES",
        url: "/historia/redht-capes",
      },
      {
        title: "Fundação da REDHT",
        url: "/historia/fundacao",
      },
      {
        title: "Documentos de Constituição",
        url: "/historia/documentos",
      },
    ],
  },
  {
    title: "Presidência",
    url: "/presidencia",
    icon: Crown,
  },
  {
    title: "Direção",
    url: "/direcao",
    icon: Navigation,
  },
  {
    title: "Coordenação",
    url: "/coordenacao",
    icon: Compass,
  },
  {
    title: "Membros",
    url: "/membros",
    icon: Users,
  },
  {
    title: "Projetos",
    icon: FolderOpen,
    items: [
      {
        title: "Projetos REDHT",
        url: "/projetos/redht",
      },
      {
        title: "Projetos GEDH",
        url: "/projetos/gedh",
      },
    ],
  },

  {
    title: "Pós Doutorado MICHR",
    url: "/pos-doutorado",
    icon: GraduationCap,
  },
  {
    title: "Acordos Institucionais",
    url: "/acordos",
    icon: FileText,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Image src="/images/redht-logo.png" alt="REDHT Logo" width={40} height={40} className="rounded-full" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">REDHT</span>
            <span className="text-xs text-muted-foreground">Direitos Humanos</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <Collapsible
                      asChild
                      defaultOpen={pathname.startsWith("/historia") || pathname.startsWith("/projetos")}
                      className="group/collapsible"
                    >
                      <div>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
