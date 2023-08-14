// /Users/admin/Desktop/fence-final/components/Plan.js
import Link from "next/link" // Import Link from Next.js
import React from "react"

const Plan = () => {
  const planImagesDesktop = [
    "/gallery/img20.jpg",
    "/plan3.jpg",
    "/plan1.jpg",
    "/plan7.jpg",
    "/plan2.jpg",
    "/plan5.jpg",
  ]
  const planImagesMobile = ["/plan1.jpg", "/plan2.jpg", "/plan5.jpg"]

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:py-20 grid gap-6 md:grid-cols-2">
      <div className="hidden md:grid gap-4 grid-cols-2 grid-rows-3 auto-rows-fr">
        {planImagesDesktop.map((planImage, index) => (
          <div
            key={index}
            className="w-full h-64 object-cover rounded-md shadow-md"
            style={{
              backgroundImage: `url(${planImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            alt="Plan"
          />
        ))}
      </div>

      <div className="grid gap-4 grid-rows-3 md:hidden">
        {planImagesMobile.map((planImage, index) => (
          <div
            key={index}
            className="w-full h-64 object-cover rounded-md shadow-md"
            style={{
              backgroundImage: `url(${planImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            alt="Plan"
          />
        ))}
      </div>

      <div className="md:pl-12 flex flex-col justify-center space-y-6 mt-6 md:mt-0">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Plan your next fence
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl">
          Citadel Fencing offers clients a range of home improvement services
          including timber paling fencing, fence repairs, Colorbond fencing, and
          retaining walls.
        </p>
        <div className="flex flex-wrap items-center space-x-4">
          <Link href="/about">
            <a className="px-3 md:px-6 py-3 md:text-lg font-medium border-2 border-black rounded-md hover:shadow-lg">
              Learn More
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-3 md:px-6 py-3 md:text-lg font-medium text-white bg-black rounded-md hover:shadow-lg">
              Get a quote
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Plan
