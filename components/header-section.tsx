"use client"

import { useEffect, useState } from "react"
import { Mail, TreePine } from "lucide-react"
import Image from "next/image"
import ImageBg from "../public/images/image-background.png" // Adjust the path as necessary

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full px-8 py-8 pb-0 md:pb-8 pt-20 md:pt-0 relative bg-[#f8f7f1]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center min-h-screen relative md:gap-0">
        {/* Left Column */}
        <div className={`h-1/2 flex flex-col justify-between`}>
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 leading-tight">
              Hey There,
              <br />
              I'm <span className="text-slate-700">devx</span>
            </h1>

            <p className="md:hidden text-lg md:text-xl text-slate-600">
              I design beautifully simple things, And I love what I do.
            </p>
          </div>

          <div className="md:flex items-center space-x-3 text-[#388ee9] hidden">
            <Mail className="w-5 h-5" />
            <span className="text-lg font-medium underline">devx10@gmail.com</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-7xl font-bold text-slate-800">10</div>
            <div className="text-lg text-gray-600 uppercase tracking-wide leading-tight">
              Years<br />Experience
            </div>
          </div>
        </div>

        {/* middle column */}
        <div className={`w-full md:w-auto`}>
          <div className={`relative md:absolute bottom-0 mx-auto`}>
            <div className="w-full md:w-[60%] overflow-hidden">
              <Image
                src={ImageBg} // Provide a valid image source here
                alt="Profile picture of devx"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={`relative transition-all duration-1000 delay-300 hidden md:flex flex-col h-1/2 justify-between items-end`}>
          <div className=" text-right text-slate-700 text-lg leading-relaxed max-w-xs mt-5">
            I design beautifully simple things, And I love what I do.
          </div>

          {/* Certification Badge */}
          <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 text-center w-46">
            <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
              IDF Certified<br />Professional<br />UI/UX Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
