import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Palette } from "lucide-react"
import { SiPython, SiRust, SiTypescript } from "react-icons/si"

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-16 py-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16">
          {/* Services List */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Card className="p-6 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DEA584] text-black">
                    <SiRust size={30} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Rust</h3>
                    <p className="text-sm text-slate-600">76 Projects</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3178C6] text-white">
                    <SiTypescript size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Typescript</h3>
                    <p className="text-sm text-slate-600">63 Projects</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex items-center space-x-4 p-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3776AB] text-[#FFD43B]">
                    <SiPython size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Python</h3>
                    <p className="text-sm text-slate-600">47 Projects</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Description & Stats */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">What do I help?</h2>
              <p className="text-slate-600 mb-4">
                I will help you with finding a solution and solving your problems. We use process design to create
                digital products. Besides that, we also help businesses grow.
              </p>
              <p className="text-slate-600">
                We use process design to create digital products. Besides that, we also help businesses grow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-800">285+</div>
                <div className="text-sm text-slate-600">Project Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-800">190+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}