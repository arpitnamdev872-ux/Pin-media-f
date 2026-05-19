import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {

  return (

    <footer className="w-full bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-1">
            <h1 className="text-2xl font-black text-teal-500 tracking-tighter mb-4">
              PIN MEDIA
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We are a premier PR and Digital Branding agency dedicated to scaling brands and building influential digital identities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 inline-block">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 inline-block">Contact Us</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><span className="text-teal-500 font-semibold block text-[9px] mb-0.5">EMAIL</span> <a href="mailto:pinweball@gmail.com" className="hover:text-teal-400">pinweball@gmail.com</a></li>
              <li><span className="text-teal-500 font-semibold block text-[9px] mb-0.5">PHONE</span> <a href="tel:+919026619418" className="hover:text-teal-400">+91 9026619418</a></li>
              <li>
                <span className="text-teal-500 font-semibold block text-[9px] mb-0.5">LOCATIONS</span>
                <p className="mb-0.5">1st Office: Manjhanpur, Kaushambi</p>
                <p>2nd Office: Ramadevi, Kanpur</p>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-white uppercase tracking-wider border-b border-slate-800 pb-1.5 inline-block">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/pin_media.in" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 text-lg">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919026619418" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 text-lg">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          <p className="backdrop-blur-md bg-slate-800/30 px-3 py-1 rounded">© 2026 PIN MEDIA. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY PINWEB PVT LTD</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer