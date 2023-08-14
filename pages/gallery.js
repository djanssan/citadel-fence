// /Users/admin/Desktop/fence-final/pages/gallery.js
import React, { useEffect, useState } from "react"
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai"
import TopBar from "../components/TopBar"

const Gallery = () => {
  const images = Array.from(
    { length: 66 },
    (_, i) => `/gallery/img${i + 1}.jpg`
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (index) => {
    setIsModalOpen(true)
    setSelectedImage(index)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  return (
    <TopBar>
      <div id="gallery" className="px-12 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {images.map((image, index) => (
            <img
              key={index} // Consider using a unique key if possible
              className="cursor-pointer object-cover w-full h-60"
              src={image}
              alt="Gallery"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-full h-full flex items-center">
              <div
                className="absolute top-0 left-0 w-100px h-full bg-black bg-opacity-50"
                onClick={prevImage}
              >
                <AiOutlineLeftCircle className="cursor-pointer text-white text-5xl absolute top-1/2 left-8 transform -translate-y-1/2 -translate-x-1/2" />
              </div>
              <img
                className="w-full h-auto max-h-screen mx-auto"
                src={images[selectedImage]}
                alt="Selected"
              />
              <div
                className="absolute top-0 right-0 w-100px h-full bg-black bg-opacity-50"
                onClick={nextImage}
              >
                <AiOutlineRightCircle className="cursor-pointer text-white text-5xl absolute top-1/2 right-8 transform -translate-y-1/2 translate-x-1/2" />
              </div>
              <AiOutlineCloseCircle
                className="cursor-pointer text-white text-5xl absolute top-2 right-4 transform translate-x-2 translate-y-2"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </TopBar>
  )
}

export default Gallery
// not bad variant
