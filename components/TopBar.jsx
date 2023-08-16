import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { BiMenu } from "react-icons/bi"
import { GrClipboard } from "react-icons/gr"

export default function Layout({ title, children }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const router = useRouter()
  const route = router.pathname
  const isHomePage = router.pathname === "/"
  const isAboutPage = router.pathname === "/about"
  const isGalleryPage = router.pathname === "/gallery"
  const isContactPage = router.pathname === "/contact"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 || mobileMenu) {
        setMobileMenu(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileMenu])

  return (
    <>
      <Head>
        <title>
          {title ? title + " - Citadel Fencing" : "Citadel Fencing"}
        </title>
        <meta name="description" content="Website" />
      </Head>

      <header id="header" className="fixed top-0 w-full z-10">
        <div className="flex justify-between items-center px-4 py-2 bg-white">
          <div className="flex items-center gap-2">
            <Link href="/">
              <a>
                <img
                  src="/logo.jpg"
                  alt="Citadel Fencing Logo"
                  className="w-[45px] md:w-[60px] object-cover p-2"
                />
              </a>
            </Link>
            <Link href="/">
              <h1
                onClick={() => {
                  if (mobileMenu) {
                    setMobileMenu((prev) => !prev)
                  }
                }}
                className="text-xl md:text-2xl mt-1"
              >
                Citadel Fencing
              </h1>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link href="/">
              <a
                className={`p-2 px-6 text-base hover:underline underline-offset-4 ${
                  isHomePage ? "text-white" : ""
                }`}
              >
                Home
              </a>
            </Link>
            {[
              { label: "About", href: "/about" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`p-2 px-12 text-base hover:underline underline-offset-4 ${
                    route === link.href ? "underline underline-offset-4" : ""
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          <BiMenu
            className="lg:hidden"
            size={30}
            onClick={() => {
              setMobileMenu((prev) => !prev)
            }}
          />
          <GrClipboard size={0.00000001} className="hidden lg:block lg:mr-16" />
          <div
            className={`fixed z-50 mt-[61px] h-full left-0 top-0 w-full overflow-y-auto overflow-x-hidden lg:hidden bg-white px-4 py-7 flex flex-col transition-all ${
              mobileMenu
                ? "duration-300 translate-x-0"
                : "duration-500 translate-x-full"
            }`}
          >
            {[
              { label: "Home", href: "/", isActive: isHomePage },
              {
                label: "About",
                href: "/about",
                isActive: isAboutPage,
              },
              {
                label: "Gallery",
                href: "/gallery",
                isActive: isGalleryPage,
              },
              {
                label: "Contact Us",
                href: "/contact",
                isActive: isContactPage,
              },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`flex justify-center p-2 py-6 text-base hover:underline underline-offset-4 ${link.isActive}`}
                  onClick={() => {
                    if (link.isActive && mobileMenu) {
                      setMobileMenu(false)
                    }
                  }}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main>
        <div className="py-[65px]">{children}</div>
      </main>
    </>
  )
}
