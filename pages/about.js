// /Users/admin/Desktop/fence-final/pages/about.js
import Link from "next/link.js"
import React from "react"
import { AiOutlineStar } from "react-icons/ai"
import TopBar from "../components/TopBar.jsx"

const About = () => {
  return (
    <TopBar title="About">
      <div className="bg-white md:mt-4 px-2 md:px-4">
        <h2 className="sm:px-6 md:px-8 py-2 font-light text-xl xs:text-2xl sm:text-3xl md:text-5xl text-blue-700/80">
          The Citadel Fencing Quality Guide
        </h2>
        <h1 className="sm:px-6 md:px-8 py-4 text-base md:text-lg lg:text-xl md:mt-2">
          Citadel Fencing offers a range of home improvement services including
          timber paling fencing, fence repairs, Colorbond fencing and retaining
          walls.
        </h1>
        <div className="flex flex-col mt-2 md:mt-4 lg:mt-8 sm:px-6 md:px-8 mb-12">
          {/* Third Section */}
          <h3 className="text-xl md:text-2xl lg:text-3xl">Colorbond Fencing</h3>
          <hr className="border-blue-700/80 w-[180px] md:w-[290px]" />
          <div className="md:flex md:justify-between md:gap-8">
            <div>
              <h1 className="py-4 text-base md:text-lg lg:text-xl mt-4">
                Colorbond Fencing is growing in popularity due to its impactful
                aesthetic, durability and low maintenance.
              </h1>
              <p className="text-xs md:text-sm lg:text-base">
                Citadel Fencing offers a range of colours for Colorbond Fencing,
                and knows how to construct them the right way.
                <br />
                <br />
                Whether it is for additional height, for aesthetic purposes, for
                situations that require increased durability, or to retain soil
                in the event of a difference in ground level between properties,
                timber sleeper plinths are a great, cost effective option to
                improve your fence. Colour matched steel plinths are also
                available at additional cost.
                <br />
                <br />
                Posts are set a minimum of 600mm deep into the ground, using
                40kg of concrete per post. This amount of concrete may seem
                excessive, but proper post installation is the difference
                between the Colorbond fences that stand the test of time, and
                those that you drive past in your car that just make you think
                "what went wrong?". Inadequate installation can lead to the
                fence tilting out of plumb and ruins the durability and
                aesthetic of the fence. To ensure your job is done correctly,
                make sure to contact Citadel Fencing for your free quote today!
                <br />
                <br />
                Citadel Fencing offers post repairs and partial fence
                replacement where appropriate. In some cases, Citadel Fencing
                will be called to quote a job at which the previous fencer
                improperly installed posts, leading to fence instability.
                Considering the fence is otherwise in good condition, Citadel
                Fencing can offer to install additional posts to restore the
                fence to a plumb (vertically straight), as close as reasonably
                possible.
              </p>
              <div className="flex justify-center">
                <img
                  src="/gallery/img20.jpg"
                  alt="loading..."
                  className="w-[450px] h-[400px] object-cover brightness-55 flex md:hidden mt-8"
                />
              </div>
            </div>
            <img
              src="/gallery/img20.jpg"
              alt="loading..."
              className="hidden md:block w-full md:w-[400px] h-auto object-cover brightness-55 mt-8"
            />
          </div>

          {/* First Section */}
          <h3 className="text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8">
            Paling Fences
          </h3>
          <hr className="border-blue-700/80 w-[125px] md:w-[210px]" />
          <h1 className="py-4 text-base md:text-lg lg:text-xl mt-2">
            Timber paling fences are a durable and renewable form of fencing
            that are constructed using a combination of soft and hard woods.
          </h1>
          <div className="flex gap-2 mb-1">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Palings</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Timber palings are generally cut from low-grade timber and may
            contain knots and other cosmetic defects. They are chemically
            treated to protect with copper chromium arsenate (hence CCA Treated
            Pine), a chemical compound which makes them resilient to rot,
            moisture, general weathering, and termites. Palings sit atop the
            plinth and are fixed to the rails using electronically galvanised
            nails with either screw or ring shanks. Base palings are fixed with
            one nail in the centre of the paling for each rail, and cover
            palings are fixed with two nails per rail. Each nail on the cover
            paling should penetrate the base paling which it overlaps, further
            securing it in place. Standard paling thickness is 12mm, but being
            rough sawn, they can vary from 10mm to 14mm in thickness.
          </p>
          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Rails</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Timber fence rails are generally rough sawn from CCA Treated Pine.
            They are generally 75x50mm and are fixed into notches manually cut
            into the fence posts with three 90mm electronically galvanised
            framing nails for each point of contact with the post. Standard
            fences feature three rails, while taller fences may demand
            additional rails to adequately support the palings, and shorter
            fences may require only two rails.
          </p>
          <div className="flex justify-center mt-8">
            <img
              src="/gallery/img10.jpg"
              alt="loading..."
              className="w-[550px] h-[400px]"
            />
          </div>
          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Plinths</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            The plinth is the horizontal plank of timber which sits at ground
            level and supports the palings, which sit above it. Standard plinths
            are 150x25mm. They are rough sawn from CCA Treated Pine and fixed to
            the posts with four 90mm electronically galvanised framing nails at
            each point of contact with the post. If the plinth is required to
            retain soil, such as in the event of a difference in ground level
            between properties, Citadel Fencing recommends upgrading the plinth
            to a sleeper plinth, which measures 200x50mm and is fixed to the
            posts with two 150mm batten screws (heavy duty outdoor timber
            screws) at each point of contact with the post.
          </p>

          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Posts</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Posts are class 1 or 2 durability including Red Gum, Yellow Stringy
            Bark, Jarrah, Bloodwood, and Cypress Pine (which is only used in
            areas not susceptible to strong winds). Posts are cemented into the
            ground a minimum of 600mm deep, using a mix of cement, soil and
            water. The mixture is compacted around the post, holding it sturdily
            in place allowing for construction to continue on the same day the
            posts are set into the ground. Victorian requirements outline a
            minimum of 6kg of cement to be used per post, Citadel Fencing uses a
            minimum of 15kg of cement per post for superior strength. *Please
            Note: Citadel Fencing refuses to use treated pine posts for
            construction of fences due to their inferior quality and durability.
          </p>
          <div className="flex justify-center mt-8">
            <img
              src="/gallery/img59.jpg"
              alt="loading..."
              className="w-[550px] h-[400px]"
            />
          </div>
          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Nails</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Citadel Fencing uses electronically galvanised nails. For the fixing
            of plinths and rails, 90mm framing nails are used, while palings are
            fixed with ring shank or screw shank nails with a minimum length of
            50mm.
          </p>
          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">Capping</h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Capping is an optional addition to fences available at extra cost.
            It is cut from CCA Treated Pine and can offer additional protection
            to the palings as well as a different aesthetic which is pleasing to
            some customers. Citadel Fencing mitres joins on capping, meaning
            where the capping meets it is cut on an angle, which looks more
            presentable and may reduce the chance of the join coming apart with
            time.
          </p>

          <div className="flex gap-2 mb-1 mt-4">
            <AiOutlineStar className="mt-[2.5px]" />
            <h1 className="text-base md:text-lg lg:text-xl">
              Fence Extensions
            </h1>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            Fence extensions are another optional addition to fences available
            at extra cost. Enquire for more information regarding available
            patterns.
            <br /> <br />
            It is important to understand that Treated Pine elements must be
            allowed to properly weather before being painted. Generally, a
            period of 3-4 months is sufficient weathering for the fence before
            paint is applied. Failure to allow for adequate weathering may cause
            warped palings and bubbled paint.
          </p>
          {/* Third Section */}
          <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 lg:mt-16">
            Fence repairs and maintenance
          </h3>
          <hr className="border-blue-700/80 w-[282px] md:w-[450px]" />
          <h1 className="py-4 text-base md:text-lg lg:text-xl mt-2">
            For all types of fences
          </h1>
          <div className="md:flex md:justify-between md:gap-8 ">
            <div>
              <p className="mt-2 text-xs md:text-sm lg:text-base">
                Citadel Fencing offers post repairs and partial fence
                replacement where appropriate. In some cases, Citadel Fencing
                will be called to quote a job at which the previous fencer
                improperly installed posts, leading to fence instability.
                Considering the fence is otherwise in good condition, Citadel
                Fencing can offer to install additional posts to restore the
                fence to a plumb (vertically straight), as close as reasonably
                possible.
              </p>
              <div className="flex justify-center">
                <div className="md:flex gap-4">
                  <img
                    src="/gallery/img30.jpg"
                    alt="loading..."
                    className="w-[340px] h-[400px] object-cover brightness-55 mt-8"
                  />
                  <img
                    src="/gallery/img29.jpg"
                    alt="loading..."
                    className="w-[340px] h-[400px] object-cover brightness-55 mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 md:mb-4">
          <Link href="/contact">
            <a className="px-3 md:px-8 py-3 md:text-lg font-medium text-white bg-green-500 rounded-md hover:shadow-lg hover:text-black">
              Get a quote today
            </a>
          </Link>
        </div>
      </div>
    </TopBar>
  )
}

export default About
