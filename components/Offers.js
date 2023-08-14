// /Users/admin/Desktop/fence-final/components/Offers.js
import React from "react"

const Offers = () => {
  const cards = [
    { img: "/gallery/img27.jpg", title: "Paling" },
    { img: "/gallery/img57.jpg", title: "Colorbond" },
    { img: "/gallery/img6.jpg", title: "Repairs and Maintenance" },
  ]

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20 grid gap-6 md:grid-cols-3">
      {cards.map((card, index) => (
        <div
          className="relative rounded-md overflow-hidden shadow-md h-64"
          style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          key={index}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h3 className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-white">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Offers
