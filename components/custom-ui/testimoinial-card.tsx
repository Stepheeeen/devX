import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const TestimonialCard = ({ name, role, image, quote }: any) => {
  return (
    <Card className="p-5 bg-white shadow-sm relative">
      <CardHeader className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full absolute -top-8"
        />
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <p className="text-sm text-slate-600 text-center">
          "{quote}"
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between flex-col mt-3 pt-2 pb-0 border-t border-dashed border-slate-200">
        <div className="font-semibold text-slate-800">{name}</div>
        <div className="text-sm text-slate-600">{role}</div>
      </CardFooter>
    </Card>
  )
}
