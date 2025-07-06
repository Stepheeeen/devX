import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function WorksSection() {
  return (
    <section id="works" className="px-6 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">My Latest Works</h2>
            <p className="text-slate-600">Perfect solution for digital experience</p>
          </div>
          <Link href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
            Explore More Works
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Work Card 1 */}
          <Card className="overflow-hidden bg-yellow-400 text-white">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">App Design</h3>
                <p className="text-sm opacity-90">Food Delivery App</p>
              </div>
              <div className="relative h-48 bg-white/10 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="App Design Preview"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Work Card 2 */}
          <Card className="overflow-hidden bg-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Web Design</h3>
                <p className="text-sm opacity-90">Agency Website</p>
              </div>
              <div className="relative h-48 bg-white/10 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Web Design Preview"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Work Card 3 */}
          <Card className="overflow-hidden bg-slate-300 text-slate-800">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Brand Identity</h3>
                <p className="text-sm opacity-75">Brand Kit</p>
              </div>
              <div className="relative h-48 bg-white/50 rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Brand Identity Preview"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
