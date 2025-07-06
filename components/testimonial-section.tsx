import { TestimonialCard } from "./custom-ui/testimoinial-card"

export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Unamilla Sandula",
      role: "Graphic Designer",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    },
    {
      name: "John Allendone",
      role: "Senior Manager",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    },
    {
      name: "Souther Halcox",
      role: "Product Manager",
      image: "/placeholder.svg?height=40&width=40",
      quote:
        "A complete search of the internet has found these results satisfactory result is the most popular phrase on the web. You wouldn't really say that it was satisfying",
    },
  ]
  return (
    <section className="px-6 py-16 bg-[#f8f7f1]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-4">People talk about us</h2>
        <p className="text-slate-600 text-center mb-16">
          I got a job that was in accordance with the salary and field of work. The process of submitting an
          application was quite easy.
        </p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}