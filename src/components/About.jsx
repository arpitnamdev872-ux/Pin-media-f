

function About() {

  return (

    <section
      id="about"
      className="w-full text-white pt-28 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SECTION */}

        <div className="order-2 md:order-1 relative">

          {/* GLOW EFFECT */}

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-400/10 blur-[120px] rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="PIN MEDIA Team"
            className="relative w-full h-[520px] md:h-[650px] object-cover rounded-[28px] border border-white/5 shadow-2xl hover:scale-[1.01] duration-700"
          />

          <div className="absolute bottom-6 left-6 glass-panel px-5 py-3 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-[--brand-1]">100+</h3>
            <p className="text-slate-300 text-sm font-medium">Successful Digital Campaigns</p>
          </div>

        </div>

        {/* CONTENT SECTION */}

        <div className="order-1 md:order-2">

          {/* SMALL TITLE */}

          <span className="inline-block bg-white/5 border border-white/5 text-purple-300 px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">
            About PIN MEDIA
          </span>

          {/* HEADING */}

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 tracking-tighter">Building Powerful <span style={{ background: 'linear-gradient(90deg,var(--accent-start),var(--accent-end))', WebkitBackgroundClip: 'text', color: 'transparent' }}> Digital Brands</span></h1>

          {/* PARAGRAPH */}

          <p className="text-slate-300 text-lg leading-8 mb-6">PIN MEDIA is a modern PR & Digital Branding agency focused on helping creators, startups, businesses and personal brands grow in the digital world.</p>
          <p className="text-slate-300 text-lg leading-8 mb-6">We specialize in social media growth, PR marketing, branding, creative content and premium digital strategies that create strong online presence and real audience engagement.</p>
          <p className="text-slate-300 text-lg leading-8 mb-10">Our mission is to turn ideas into impactful brands through creativity, innovation and powerful storytelling.</p>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

            <div className="relative group glass-panel rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/6 via-blue-500/6 to-purple-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">PR Marketing</h3>
                <p className="text-slate-300 text-sm">Powerful media presence and audience engagement.</p>
              </div>
            </div>

            <div className="relative group glass-panel rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Branding</h3>
                <p className="text-slate-300 text-sm">Premium identity creation for modern businesses.</p>
              </div>
            </div>

            <div className="relative group glass-panel rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Social Growth</h3>
                <p className="text-slate-300 text-sm">Organic audience growth and engagement strategies.</p>
              </div>
            </div>

            <div className="relative group glass-panel rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Creative Content</h3>
                <p className="text-slate-300 text-sm">Modern visuals and storytelling for brands.</p>
              </div>
            </div>

          </div>

          {/* BUTTON */}

          <a href="tel:+919026619418" className="inline-block btn-accent">Call +91 9026619418</a>

        </div>

      </div>

    </section>

  )
}

export default About