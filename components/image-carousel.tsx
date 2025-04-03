"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

export default function ImageCarousel({ images, autoSlide = true, autoSlideInterval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const next = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`
                transition-all w-2 h-2 bg-white rounded-full
                ${current === index ? "p-1.5" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

