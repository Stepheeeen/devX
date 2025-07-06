import { MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t w-full">
      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
            Let's make something amazing together.
          </h2>
          <Link
            href="mailto:devx10@gmail.com"
            className="inline-block text-2xl transition-colors font-bold text-slate-800"
          >
            Start by
            <span className="text-orange-500 hover:text-orange-600 underline ml-2 font-medium">
              saying hi
            </span>
          </Link>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* Brand & Info */}
          <div className="space-y-2 text-sm text-slate-600">
            <div className="font-semibold text-xl">Information</div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>145 New York, FL 5467, USA</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 text-sm">
            <Link href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">
              SERVICES
            </Link>
            <Link href="#works" className="text-slate-600 hover:text-slate-800 transition-colors">
              WORKS
            </Link>
            <Link href="#notes" className="text-slate-600 hover:text-slate-800 transition-colors">
              NOTES
            </Link>
            <Link href="#experience" className="text-slate-600 hover:text-slate-800 transition-colors">
              EXPERIENCE
            </Link>
          </nav>
        </div>
      </section>

      {/* Legal */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 gap-y-4">
          <div>© 2025. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
