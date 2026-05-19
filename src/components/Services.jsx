import {
  FaBullhorn,
  FaInstagram,
  FaPaintBrush,
  FaVideo,
  FaGlobe,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa"

function Services() {

  const services = [

    {
      icon: <FaBullhorn />,
      title: "PR Marketing",
      desc: "Build strong brand reputation with premium PR campaigns and media promotions."
    },

    {
      icon: <FaInstagram />,
      title: "Social Media Growth",
      desc: "Grow your Instagram and social presence with engaging content strategies."
    },

    {
      icon: <FaPaintBrush />,
      title: "Branding Design",
      desc: "Creative logo, brand identity and premium visual design solutions."
    },

    {
      icon: <FaVideo />,
      title: "Video Editing",
      desc: "Professional reels, ads and cinematic video editing for digital marketing."
    },

    {
      icon: <FaGlobe />,
      title: "Website Development",
      desc: "Modern responsive websites with premium UI/UX and fast performance."
    },

    {
      icon: <FaChartLine />,
      title: "Digital Strategy",
      desc: "Advanced marketing strategies to increase audience reach and conversions."
    }

  ]

  return (

    <section
      id="services"
      className="relative w-full bg-slate-50 text-slate-900 pt-24 pb-16 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-teal-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">

        {/* TOP HEADING */}

        <div className="text-center mb-16">

          <h4 className="text-teal-600 text-sm font-black tracking-[0.4em] uppercase mb-6">

            Our Services

          </h4>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter text-slate-900">

            Premium Digital Solutions
            <br />

            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">

              For Modern Brands

            </span>

          </h1>

          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed">

            We help businesses, creators and startups build
            strong digital identity with creative branding,
            social media growth and modern marketing solutions.

          </p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {
            services.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  bg-white
                  border border-slate-100
                  rounded-[48px]
                  p-12
                  overflow-hidden
                  hover:-translate-y-4
                  hover:border-teal-100
                  duration-500
                  delay-${index * 100 + 200}
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_30px_70px_-15px_rgba(13,148,136,0.25)]
                "
              >

                {/* HOVER GLOW */}

                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-500/5 opacity-0 group-hover:opacity-100 duration-500"></div>

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    w-20 h-20
                    rounded-2xl
                    bg-gradient-to-r
                    from-teal-600
                    to-blue-500
                    flex items-center justify-center
                    text-3xl text-white // Increased icon size for better visibility
                    mb-8
                    shadow-lg shadow-teal-500/30
                    group-hover:scale-110
                    duration-300
                  "
                >

                  {item.icon}

                </div>

                {/* TITLE */}

                <h2 className="relative z-10 text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-teal-600 duration-300">

                  {item.title}

                </h2>

                {/* DESCRIPTION */}

                <p className="relative z-10 text-slate-500 leading-relaxed text-lg mb-10">

                  {item.desc}

                </p>

                {/* BUTTON */}

                <button
                  className="
                    relative
                    z-10
                    flex items-center gap-3
                    text-teal-600
                    font-bold
                    text-base
                    group-hover:gap-5
                    duration-300
                  "
                >

                  Learn More

                  <FaArrowRight />

                </button>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )
}

export default Services