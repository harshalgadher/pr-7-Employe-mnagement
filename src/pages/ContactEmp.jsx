import React from 'react'

const ContactEmp = () => {
  return (
    <>
      <section class="bg-white py-8 antialiasedmd:py-16">
        <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
          <div class="lg:flex lg:items-center lg:justify-between lg:gap-4">
            <h2 class="shrink-0 text-xl font-semibold text-gray-900">Reviews :</h2>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-200">
              <div class="space-y-4 py-6 md:py-8">
                <div class="grid gap-4">
                  <div>
                    <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 md:mb-0"> 3 answers </span>
                  </div>

                  <a href="#" class="text-xl font-semibold text-gray-900 hover:underline">“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”</a>
                </div>
                <p class="text-base font-normal text-gray-500">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
                <p class="text-sm font-medium text-gray-500">
                  Answered 1 day ago by
                  <a href="#" class="text-gray-900 hover:underline">Bonnie Green</a>
                </p>
              </div>

              <div class="space-y-4 py-6 md:py-8">
                <div class="grid gap-4">
                  <div>
                    <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 md:mb-0"> 1 answer </span>
                  </div>

                  <a href="#" class="text-xl font-semibold text-gray-900 hover:underline">“Is this just the monitor?”</a>
                </div>
                <p class="text-base font-normal text-gray-500">It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.</p>
                <p class="text-sm font-medium text-gray-500">
                  Answered 1 day ago by
                  <a href="#" class="text-gray-900 hover:underline">Jese Leos</a>
                </p>
              </div>

              <div class="space-y-4 py-6 md:py-8">
                <div class="grid gap-4">
                  <div>
                    <span class="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 md:mb-0"> 7 answers </span>
                  </div>
                  <a href="#" class="text-xl font-semibold text-gray-900 hover:underline">“For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?”</a>
                </div>
                <p class="text-base font-normal text-gray-500">It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.</p>
                <p class="text-sm font-medium text-gray-500">
                  Answered 2 days ago by
                  <a href="#" class="text-gray-900 hover:underline">Bonnie Green</a>
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

    </>
  )
}

export default ContactEmp