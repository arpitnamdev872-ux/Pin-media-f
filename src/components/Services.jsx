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
      className="relative w-full text-white pt-24 pb-16 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-teal-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">

        {/* TOP HEADING */}

        <div className="text-center mb-16">

          <h4 className="text-[--brand-1] text-sm font-black tracking-[0.4em] uppercase mb-6" style={{color:'var(--brand-1)'}}>
            Our Services
          </h4>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
            Premium Digital Solutions
            <br />
            <span style={{ background: 'linear-gradient(90deg,var(--accent-start),var(--accent-end))', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              For Modern Brands
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            We help businesses, creators and startups build strong digital identity with creative branding, social media growth and modern marketing solutions.
          </p>

        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {
            services.map((item, index) => (

              <div
                key={index}
                className="group relative glass-panel rounded-[24px] p-6 overflow-hidden hover:-translate-y-2 duration-500 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >

                {/* HOVER GLOW */}

                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-blue-500/5 opacity-0 group-hover:opacity-100 duration-500"></div>

                {/* ICON */}

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-blue-500 flex items-center justify-center text-2xl text-white mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 duration-300">
                  {item.icon}
                </div>

                {/* TITLE */}

                <h2 className="relative z-10 text-xl sm:text-2xl font-extrabold mb-4 duration-300" style={{color:'var(--accent-start)'}}>{item.title}</h2>

                {/* DESCRIPTION */}

                <p className="relative z-10 text-slate-300 leading-relaxed text-base mb-8">{item.desc}</p>

                {/* BUTTON */}

                <button className="relative z-10 flex items-center gap-3 text-white/90 font-semibold hover:text-white duration-200">Learn More <FaArrowRight /></button>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  )
}

export default Services