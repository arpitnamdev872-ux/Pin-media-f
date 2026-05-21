import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa"

import logo from "../assets/images/logo.png"
import JoinUs from "../pages/JoinUs"

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.service) {
      alert("Please select a service from the dropdown.")
      return
    }

    const whatsappMessage = `*PIN MEDIA CLIENT FORM*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n💼 *Service:* ${formData.service}\n📝 *Message:* ${formData.message}`
    const whatsappURL = `https://wa.me/919026619418?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, "_blank")
    setFormData({ name: "", phone: "", service: "", message: "" })
    setShowForm(false)
  }
 

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 navbar-gradient transition-all duration-300 py-2">
        <div className="w-full px-4 md:px-10 py-2 flex items-center justify-between container-padding max-w-[1400px] mx-auto">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 hover:scale-105 duration-300 ring-2 ring-white/20 flex items-center justify-center bg-white p-2 shadow-inner">
              <img src={logo} alt="Pin Media" className="w-full h-full object-contain" />
            </div>

            <div className="hidden sm:flex flex-col text-white">
              <span className="font-extrabold text-xl tracking-tight">
                PIN <span style={{ color: 'var(--accent-end)' }}>MEDIA</span>
              </span>

              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <FaMapMarkerAlt className="" style={{ color: 'var(--brand-1)' }} />
                PR • DIGITAL BRANDING • CREATIVE STRATEGY
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-3 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md nav-item duration-300 font-semibold ${
                    isActive
                      ? "nav-link-active"
                      : "nav-link hover:text-white/90"
                  }`
                }
              >
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md nav-item duration-300 font-semibold ${isActive ? 'nav-link-active' : 'nav-link hover:text-white/90'}`}>
                  <FaUserAlt />
                  About
                </NavLink>
            </li>

            <li>
              <NavLink to="/services" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md nav-item duration-300 font-semibold ${isActive ? 'nav-link-active' : 'nav-link hover:text-white/90'}`}>
                  <FaBriefcase />
                  Services
                </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md nav-item duration-300 font-semibold ${isActive ? 'nav-link-active' : 'nav-link hover:text-white/90'}`}>
                  <FaEnvelope />
                  Contact
                </NavLink>
            </li>
          </ul>

          {/* JOIN BUTTON */}
          <button
            onClick={() => setShowForm(true)} // This will open the JoinUs modal
            className="hidden md:flex items-center gap-2 btn-accent font-semibold shadow-sm rounded-full"
          >
            <FaWhatsapp />
            Join Us
          </button>

          {/* MOBILE ICON */}
          <div
            className="md:hidden w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white text-xl cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* MOBILE MENU */}
          {menu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy-deep backdrop-blur-3xl px-6 py-6 space-y-4 text-white text-lg border-t border-white/5 shadow-2xl">
            <NavLink
              to="/"
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold"
            >
              <FaHome />
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold"
            >
              <FaUserAlt />
              About
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold"
            >
              <FaBriefcase />
              Services
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold"
            >
              <FaEnvelope />
              Contact
            </NavLink>

            <button
              onClick={() => {
                setShowForm(true)
                setMenu(false)
              }}
              className="mt-4 flex items-center justify-center gap-3 btn-accent w-full"
            >
              <FaWhatsapp />
              Join Us
            </button>
          </div>
        )}
      </nav>

      {/* JOIN FORM MODAL */}
      <JoinUs
        showForm={showForm}
        setShowForm={setShowForm}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Navbar
