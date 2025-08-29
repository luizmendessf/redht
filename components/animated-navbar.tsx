"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Início", href: "/" },
  { title: "História", href: "/historia" },
  { title: "Estrutura", href: "/estrutura" },
  { title: "Projetos", href: "/projetos" },
  { title: "Notícias", href: "/noticias" },
]

export function AnimatedNavbar() {
  const pathname = usePathname()

  const isLinkActive = (href?: string) => {
    if (!href) return false
    if (href === "/") return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        "bg-blue-900/95 backdrop-blur-md shadow-lg" // Estilo escuro aplicado permanentemente
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/redht-logo.png"
              alt="REDHT Logo"
              width={45} // Tamanho fixo para a logo na navbar
              height={45}
              className="rounded-full bg-white/10 p-1"
            />
            <div className="text-white hidden sm:block">
              <div className="font-bold text-lg">REDHT</div>
              <div className="text-blue-200 text-xs">
                Direitos Humanos na Transnacionalidade
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn("bg-transparent text-white hover:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10", {
                            "bg-white/10": isLinkActive(item.href),
                          })}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.items.map((subItem) => (
                              <ListItem key={subItem.title} href={subItem.href} title={subItem.title} />
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href!} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white",
                            { "bg-white/10": pathname === item.href }
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-blue-900 text-white border-blue-800 p-4">
                <Accordion type="multiple" className="w-full mt-8">
                  {menuItems.map((item) =>
                    item.items ? (
                      <AccordionItem key={item.title} value={item.title} className="border-blue-800">
                        <AccordionTrigger className="hover:no-underline text-base text-blue-100 font-medium py-3">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          <div className="flex flex-col gap-2 mt-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block py-2 text-sm text-white hover:text-blue-200 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href!}
                        className="block py-3 font-medium text-white hover:text-blue-200 transition-colors border-b border-blue-800 text-base"
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </Accordion>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"