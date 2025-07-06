"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import clsx from "clsx"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={clsx(
        "px-6 py-4 flex items-center justify-between max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white shadow-sm",
        {
          "-translate-y-full": scrollDirection === "down",
          "translate-y-0": scrollDirection !== "down",
        }
      )}
    >
      {/* Brand */}
      <div
        className="text-2xl font-bold text-slate-800 hover:text-orange-500 transition-colors cursor-pointer"
        style={{ fontFamily: "cursive" }}
      >
        Dev X
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        {["services", "works", "notes", "experience"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className={clsx(
              "text-slate-600 hover:text-slate-800 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            )}
          >
            {item.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* Contact */}
      <div className="hidden md:flex items-center space-x-2 text-slate-600">
        <span className="text-sm">+001 (313) 345 678</span>
        <Phone className="w-10 h-10 p-2.5 rounded-full bg-gray-50 border border-gray-300" />
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-slate-600"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full backdrop-blur bg-white/90 border-t border-slate-200 shadow-md md:hidden z-40 animate-fadeIn">
          <nav className="flex flex-col p-4 space-y-4 text-slate-600">
            {["services", "works", "notes", "experience"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="hover:text-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.toUpperCase()}
              </Link>
            ))}
            <div className="flex items-center space-x-2 pt-2 border-t border-slate-200 text-sm">
              <Phone className="w-4 h-4" />
              <span>+001 (313) 345 678</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
