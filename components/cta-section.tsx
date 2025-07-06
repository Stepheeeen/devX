import Link from "next/link"

export default function CTASection() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-slate-800">
          Let's make something amazing together.
        </h2>
        <Link
          href="mailto:devx10@gmail.com"
          className="inline-block text-2xl text-orange-500 hover:text-orange-600 transition-colors font-medium"
        >
          Start by saying hi
        </Link>
      </div>
    </section>
  )
}