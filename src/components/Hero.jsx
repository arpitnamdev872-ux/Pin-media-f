function Hero() {

  return (

    <section className="w-full min-h-[90vh] bg-slate-50/30 text-slate-900 flex items-center pt-32 pb-12 relative overflow-hidden">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[80px] opacity-60"></div>

      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}

        <div className="space-y-6 animate-in fade-in slide-in-from-left-10 duration-700 ease-out">

          <h3 className="text-teal-600 text-sm md:text-lg mb-6 font-black uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-12 h-[2px] bg-teal-600"></span>
            PR • Branding • Digital Media
          </h3>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
            We Build
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent"> Powerful </span>
            Digital Presence
          </h1>

          <p className="text-slate-500 text-lg md:text-2xl leading-relaxed mb-10 max-w-xl font-medium">

            PIN MEDIA helps brands grow through premium
            branding, social media marketing and creative
            digital strategies.

          </p>

          <div className="flex flex-col sm:flex-row gap-6">

            <button className="bg-teal-600 hover:bg-teal-700 px-12 py-5 rounded-full text-white text-xl font-bold duration-300 shadow-[0_20px_50px_rgba(13,148,136,0.3)] hover:-translate-y-2 hover:shadow-teal-300">

              Get Started

            </button>

            <button className="border-2 border-slate-200 text-slate-800 px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:border-white hover:shadow-xl duration-300 hover:-translate-y-2">

              Learn More

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="animate-in fade-in slide-in-from-right-10 duration-700 ease-out delay-100">

          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="hero"
            className="w-full h-[600px] rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] object-cover ring-1 ring-slate-100"
          />

        </div>

      </div>

    </section>

  )
}

export default Hero