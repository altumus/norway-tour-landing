export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Detailed Journey</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Hiking and relaxing (Days 1 - 2)
              </h4>
              <p className="text-gray-600 text-center">
                You better take some cosy and warm clothes, if you dont want
                turn into ice cube
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Discover Norway Cities (Days 3 - 8)
              </h4>
              <p className="text-gray-600 text-center">
                Discover Bergen and Oslo. Go out to museums and local
                marketplace, to buy some souveniers or maybe go to a bar, to
                talk with local folks
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Watch a Northen Light (Days 9 - 14)
              </h4>
              <p className="text-gray-600 text-center">
                Northen Light is slowly appearing event, so better prepare for
                it early. Watch a Northen Light in Oslo observatory, to get
                maximum of the visual beauty of nature. Better take a hot
                tea/coffe with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
