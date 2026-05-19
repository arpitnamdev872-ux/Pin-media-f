function About({ setShowForm }) { // Accept setShowForm as a prop

  return (

    <section
      id="about"
      className="w-full bg-white text-slate-900 pt-28 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SECTION */}

        <div className="order-2 md:order-1 relative">

          {/* GLOW EFFECT */}

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-400/10 blur-[120px] rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="PIN MEDIA Team"
            className="relative w-full h-[650px] object-cover rounded-[40px] border border-slate-50 shadow-2xl hover:scale-[1.01] duration-700"
          />

          <div className="
            absolute
            bottom-6
            left-6
            bg-white/80
            backdrop-blur-xl
            border border-slate-100
            px-6 py-4
            rounded-2xl
            shadow-xl
          ">

            <h3 className="text-2xl font-bold text-teal-600">
              100+
            </h3>

            <p className="text-slate-500 text-sm font-medium">
              Successful Digital Campaigns
            </p>

          </div>

        </div>

        {/* CONTENT SECTION */}

        <div className="order-1 md:order-2">

          {/* SMALL TITLE */}

          <span className="
            inline-block
            bg-teal-50
            border border-teal-100
            text-teal-600
            px-5 py-2
            rounded-full
            text-sm
            font-bold
            tracking-[0.2em]
            uppercase
            mb-6
          ">

            About PIN MEDIA

          </span>

          {/* HEADING */}

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">

            Building Powerful
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Digital Brands
            </span>

          </h1>

          {/* PARAGRAPH */}

          <p className="text-slate-600 text-lg leading-9 mb-6">

            PIN MEDIA is a modern PR & Digital Branding agency focused on helping
            creators, startups, businesses and personal brands grow in the digital world.

          </p>

          <p className="text-slate-500 text-lg leading-9 mb-6">

            We specialize in social media growth, PR marketing, branding,
            creative content and premium digital strategies that create strong
            online presence and real audience engagement.

          </p>

          <p className="text-slate-500 text-lg leading-9 mb-10">

            Our mission is to turn ideas into impactful brands through creativity,
            innovation and powerful storytelling. At PIN MEDIA, we believe every
            brand deserves a premium identity and extraordinary digital success.

          </p>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

            <div className="
              relative group
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-6
              overflow-hidden
              hover:-translate-y-2
              transition-all duration-500
              shadow-sm hover:shadow-2xl
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                PR Marketing
              </h3>
              <p className="text-slate-500 text-sm">
                Powerful media presence and audience engagement.
              </p>
              </div>
            </div>

            <div className="
              relative group
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-6
              overflow-hidden
              hover:-translate-y-2
              transition-all duration-500
              shadow-sm hover:shadow-2xl
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Branding
              </h3>
              <p className="text-slate-500 text-sm">
                Premium identity creation for modern businesses.
              </p>
              </div>
            </div>

            <div className="
              relative group
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-6
              overflow-hidden
              hover:-translate-y-2
              transition-all duration-500
              shadow-sm hover:shadow-2xl
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                Social Growth
              </h3>
              <p className="text-slate-500 text-sm">
                Organic audience growth and engagement strategies.
              </p>
              </div>
            </div>

            <div className="
              relative group
              bg-slate-50
              border border-slate-100
              rounded-2xl
              p-6
              overflow-hidden
              hover:-translate-y-2
              transition-all duration-500
              shadow-sm hover:shadow-2xl
            ">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                Creative Content
              </h3>
              <p className="text-slate-500 text-sm">
                Modern visuals and storytelling for brands.
              </p>
              </div>
            </div>

          </div>

          {/* BUTTON */}

          <button
            onClick={() => setShowForm(true)} // Open the Join Us form
            className="
              inline-block
              bg-gradient-to-r
              from-teal-600
              to-blue-600
              text-white
              px-10 py-4.5
              rounded-full cursor-pointer
              text-xl
              font-bold
              hover:scale-105
              duration-300
              shadow-[0_20px_40px_rgba(13,148,136,0.2)]
              shadow-teal-100
            "
          >

            Connect With US

          </button>

        </div>

      </div>

    </section>

  )
}

export default About