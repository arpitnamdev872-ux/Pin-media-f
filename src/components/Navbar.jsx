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
import JoinUs from "../pages/JoinUs" // Import the new JoinUs component

function Navbar() { 
  const [menu, setMenu] = useState(false)
  const [showForm, setShowForm] = useState(false) // State ko yahan define kiya taaki undefined error na aaye
  const location = useLocation();

  useEffect(() => {
    // Enable smooth scroll globally for the document
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Scroll to top smoothly when the route/path changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.service) {
      alert("Please select a service from the dropdown.");
      return;
    }

    const whatsappMessage = `*PIN MEDIA CLIENT FORM*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
💼 *Service:* ${formData.service}
📝 *Message:* ${formData.message}`;

    const whatsappURL =
      `https://wa.me/919026619418?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, "_blank")
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: ""
    })
    setShowForm(false) // Close modal after submission
  }

  return (

    <>

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl transition-all duration-300 animate-in fade-in duration-500 py-2">

        <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">

          {/* LOGO */}

          <a href="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Pin Media"
              className="
                h-12
                w-auto
                object-contain
                hover:scale-105
                duration-300
                drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]
              "
            />

            <div className="hidden sm:flex flex-col">

              <span className="text-slate-900 font-extrabold text-xl tracking-tight">

                PIN
                <span className="text-teal-600">
                  {" "}MEDIA
                </span>

              </span>

              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2">

                <FaMapMarkerAlt className="text-teal-600" />

                PR • BRANDING • DIGITAL

              </span>

            </div>

          </a>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex items-center gap-3 text-slate-700 font-medium">

            <li>

                <NavLink to="/" className={({isActive})=>`flex items-center gap-2 px-5 py-2.5 rounded-full duration-300 font-semibold ${isActive? 'bg-teal-600 text-white shadow-md shadow-teal-200' : 'hover:text-teal-600'}`}>
                    <FaHome />
                    Home
                  </NavLink>

            </li>

            <li>

                <NavLink to="/about" className={({isActive})=>`flex items-center gap-2 px-5 py-2.5 rounded-full duration-300 font-semibold ${isActive? 'bg-teal-600 text-white shadow-md shadow-teal-200' : 'hover:text-teal-600'}`}>
                  <FaUserAlt />
                  About
                </NavLink>

            </li>

            <li>

                <NavLink to="/services" className={({isActive})=>`flex items-center gap-2 px-5 py-2.5 rounded-full duration-300 font-semibold ${isActive? 'bg-teal-600 text-white shadow-md shadow-teal-200' : 'hover:text-teal-600'}`}>
                  <FaBriefcase />
                  Services
                </NavLink>

            </li>

            <li>

                <NavLink to="/contact" className={({isActive})=>`flex items-center gap-2 px-5 py-2.5 rounded-full duration-300 font-semibold ${isActive? 'bg-teal-600 text-white shadow-md shadow-teal-200' : 'hover:text-teal-600'}`}>
                  <FaEnvelope />
                  Contact
                </NavLink>

            </li>

          </ul>

          {/* JOIN BUTTON */}

          <button
            onClick={() => setShowForm(true)}
            className="
              hidden md:flex
              items-center gap-3
              bg-gradient-to-r
              from-teal-600
              to-blue-600
              px-6 py-3
              rounded-full
              text-white
              font-semibold
              hover:scale-105
              duration-300
              shadow-[0_20px_50px_rgba(13,148,136,0.3)]
              shadow-teal-200
            "
          >

            <FaWhatsapp />

            Join Us

          </button>

          {/* MOBILE ICON */}

          <div
            className="
              md:hidden
              w-11 h-11
              rounded-full
              bg-teal-50
              flex items-center justify-center
              text-teal-600 text-xl
              cursor-pointer
            "
            onClick={() => setMenu(!menu)}
          >

            {
              menu ? <FaTimes /> : <FaBars />
            }

          </div>

        </div>

        {/* MOBILE MENU */}

        {
          menu && (

            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl px-6 py-10 space-y-6 text-slate-800 text-lg border-t border-blue-50 shadow-2xl">

              <NavLink to="/" onClick={() => setMenu(false)} className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold">
                <FaHome />
                Home
              </NavLink>

              <NavLink to="/about" onClick={() => setMenu(false)} className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold">
                <FaUserAlt />
                About
              </NavLink>

              <NavLink to="/services" onClick={() => setMenu(false)} className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold">
                <FaBriefcase />
                Services
              </NavLink>

              <NavLink to="/contact" onClick={() => setMenu(false)} className="flex items-center gap-3 hover:text-teal-600 duration-300 font-semibold">
                <FaEnvelope />
                Contact
              </NavLink>

              <button
                onClick={() => {
                  setShowForm(true)
                  setMenu(false)
                }}
                className="
                  mt-4
                  flex items-center justify-center gap-3
                  bg-gradient-to-r
                  from-teal-600
                  to-blue-600
                  px-6 py-3
                  rounded-full
                  text-white
                  font-semibold
                  w-full
                "
              >

                <FaWhatsapp />

                Join Us

              </button>

            </div>

          )
        }

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