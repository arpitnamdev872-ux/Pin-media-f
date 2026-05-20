import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import heroImg from "../assets/images/home-hero.jpg";

function Hero() {
  return (
    <section className="w-full min-h-[90vh] text-white flex items-center pt-32 pb-12 relative overflow-hidden">

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40" style={{ background: 'radial-gradient(circle at center, rgba(124,58,237,0.18), transparent)' }}></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-[80px] opacity-30" style={{ background: 'radial-gradient(circle at center, rgba(255,77,158,0.12), transparent)' }}></div>

      <div className="w-full px-6 sm:px-8 md:px-16 lg:px-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <div className="space-y-6">

          <h3 className="text-[--brand-1] text-sm md:text-lg mb-6 font-black uppercase tracking-[0.4em] flex items-center gap-4" style={{color:'var(--brand-1)'}}>
            <span className="w-12 h-[2px] bg-teal-600"></span>
            PR • BRANDING • DIGITAL MARKETING
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tighter">
            We Build
            <br />
            <span style={{ background: 'linear-gradient(90deg,var(--accent-start),var(--accent-end))', WebkitBackgroundClip: 'text', color: 'transparent' }}> Powerful </span>
            Digital Presence
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-medium">
            PIN MEDIA helps brands grow through premium
            branding, social media marketing and creative
            digital strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-accent text-lg font-bold">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full text-white/90 border border-white/10 hover:bg-white/5 duration-200">
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a href="https://instagram.com/pin_media.in" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-2xl hover:text-white/90 duration-300 shadow-sm">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-2xl hover:text-teal-600 hover:bg-teal-50 duration-300 shadow-sm">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-2xl hover:text-teal-600 hover:bg-teal-50 duration-300 shadow-sm">
              <FaYoutube />
            </a>
          </div>

        </div>

        {/* RIGHT - hero mockup */}
        <div className="relative animate-in fade-in slide-in-from-right-10 duration-700 ease-out delay-100">
          <img 
            src={heroImg}
            alt="hero"
            className="w-full h-[420px] sm:h-[480px] md:h-[560px] rounded-[28px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.45)] object-cover ring-1 ring-white/5"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero