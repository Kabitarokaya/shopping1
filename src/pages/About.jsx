import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="py-5 my-3 bg-[#f6f6f7]">
        <div className="container p-[65px]  bg-white shadow-xl mx-auto">
          <h1 className="my-2 mx-auto text-center font-bold text-2xl text-blue-700">Shopping</h1>
          <p className='py-4'>Welcome to <span className='font-semibold text-blue-600 '>Shopping</span>,
            Your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we're here to power up your tech life with premium and products and unbeatable services.
          </p>
          <div className='space-y-3'>

            <p>
              Your About Us page is one of the first web pages you’ll want to prioritize when building your business website.

            </p>

            <h1 className='text-lg font-bold py-4'>What is an About Us page?
            </h1>
            <p>
              An About Us page is a section on a website that provides information about a company, organization, or individual. It’s an opportunity to tell your brand’s story, share your vision or mission, introduce team members, and outline your history and achievements. This is where you build trust and credibility with customers.

            </p>

            <h1 className="text-lg font-bold">Our Mission</h1>
            <p>At Shopping, our mission is to make innovative technology accessible to everyone. We're passionate about connecting people with the tools and tech they need to thive in a digital world- all at the competitive pieces and delivered with spped and care.</p>

            <h1 className="text-lg font-bold">Why Choose Shopping</h1>
            <ul className="space-y-2">
              <li className='list-disc marker:text-red-600 '>Top-quality electronics products from trusted brands.</li>
              <li className='list-disc marker:text-red-600'>Lightning-fast and secured shipping.</li>
              <li className='list-disc marker:text-red-600'>Reliable customer support, always ready to help</li>
              <li className='list-disc marker:text-red-600'>Easy returns and hassle-free shopping experience.</li>

            </ul>


            <p>
              Shoppers are also interested in a company’s mission and brand values. They’ll use the About Us page to determine if they share core values with the business and to decide if they want to shop with you or not. Shared values, especially related to ethical and sustainable business practices, continue to drive consumer decision making.

            </p>
            <h1 className='text-lg font-bold py-4'>Components of an About Us page
            </h1>
            <p>

              In contrast to a landing page, your About Us page should focus more on your brand identity and less on sales.

            </p>
            <p>
              Here are some components to include in an About Us page:

            </p>
            <h1 className="text-lg font-bold">
              Your brand story

            </h1>
            <p>
              Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand. If your brand is your name or it was formed based on a personal brand, your company’s story can be one and the same with your founder story.

            </p>

            <div className="text-center">
              <h1 className="text-lg font-bold text-orange-600">Join the Shopping Family</h1>
              <p> Whether you're a tech enthusiast, a professional, or just looking for something cool and functional-shopping something for everyone.</p>
              <Link to={'/products'}>
                <button className='text-white px-3 py-1.5 cursor-pointer mt-4 font-bold bg-gradient-to-t from-pink-700 rounded-md  to-purple-400'>Start Shopping </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
