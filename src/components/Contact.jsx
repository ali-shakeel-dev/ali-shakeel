import React from 'react'

function Contact() {
  return (
    <section id="contact" class="section text-gray-600 body-font">
      <div class="text-center mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#141414]">Send Message</h1>
        <p class="text-base leading-relaxed max-w-lg xl:w-2/4 lg:w-3/4 mx-auto">Your message 💬 is important to me, and I’ll respond as soon as possible.</p>
      </div>
      <div class="container px-5 py-4 mx-auto flex flex-wrap items-center">
        <div class="border border-[#5e5e5e] lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
          <div class="relative mb-4">
            <label for="full-name" class="leading-7"><p>Name</p></label>
            <input type="text" id="full-name" name="full-name" class="w-full bg-[#1A1A1A] rounded border border-[#5e5e5e] focus:border-white focus:ring-2 text-base outline-none text-[#5e5e5e] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#5e5e5e]" placeholder='Name' />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7"><p>Message</p></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full bg-[#1A1A1A] rounded border border-[#5e5e5e] focus:border-white focus:ring-2 text-base outline-none text-[#5e5e5e] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-[#5e5e5e]"
              placeholder='Enter your message here'
            ></textarea>
          </div>
          <button className="btn">Start the Conversation</button>
          <p class="text-xs mt-3">Don't hesitate to say hello.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
