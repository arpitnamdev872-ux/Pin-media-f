import { useState } from "react"
import {
  FaTimes,
  FaUser,
  FaPhoneAlt,
  FaBriefcase,
  FaRegCommentDots,
  FaWhatsapp
} from "react-icons/fa"

function JoinUs({ showForm, setShowForm, formData, setFormData, handleSubmit }) {

  const [serviceOpen, setServiceOpen] = useState(false)
  const services = [
    "PR Marketing",
    "Branding",
    "Social Media Growth",
    "Website Development"
  ]

  return (
    <>
      {
        showForm && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-start md:items-center justify-center z-[100] px-4 py-6 transition-all duration-300">
            <div className="w-full max-w-xl bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 relative shadow-[0_30px_100px_rgba(0,0,0,0.15)] max-h-[95vh] overflow-y-auto">
              {/* DECORATIVE BLUR BACKGROUNDS */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-full -mr-10 -mt-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/40 rounded-full -ml-10 -mb-10 blur-3xl"></div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors z-20 p-2 hover:bg-slate-100 rounded-full"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <div className="relative z-10 mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Join
                  <span className="text-teal-600">
                    {" "}PIN MEDIA
                  </span>
                </h2>
                <p className="text-slate-500 text-lg">
                  Fill this form and connect directly on WhatsApp.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* NAME */}
                <div className="relative group">
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value
                      })
                    }
                    className="
                      w-full
                      bg-slate-50/50
                      border border-slate-200
                      rounded-2xl
                      pl-14 pr-5 py-4
                      text-slate-900
                      outline-none
                      focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500
                      focus:bg-white
                      transition-all
                    "
                  />
                </div>

                {/* PHONE */}
                <div className="relative group">
                  <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value
                      })
                    }
                    className="
                      w-full
                      bg-slate-50/50
                      border border-slate-200
                      rounded-2xl
                      pl-14 pr-5 py-4
                      text-slate-900
                      outline-none
                      focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500
                      focus:bg-white
                      transition-all
                    "
                  />
                </div>

                {/* SERVICE */}
                <div className="relative group">
                  <FaBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors z-10" />
                  <button type="button" onClick={() => setServiceOpen(!serviceOpen)} className="relative w-full text-left bg-slate-50/50 border border-slate-200 rounded-2xl pl-14 pr-12 py-4 text-slate-900 font-medium outline-none focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 transition-all">
                    {formData.service || "Select Service"}
                    <span className={`absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  {serviceOpen && (
                    <ul className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl max-h-56 overflow-y-auto z-[110] shadow-2xl py-3 animate-in fade-in slide-in-from-top-2">
                      {services.map((s) => (
                        <li key={s} className="px-8 py-3 hover:bg-teal-50 hover:text-teal-600 transition-colors text-slate-700 cursor-pointer font-medium" onClick={() => {
                          setFormData({ ...formData, service: s })
                          setServiceOpen(false)
                        }}>{s}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="relative group">
                  <FaRegCommentDots className="absolute left-5 top-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value
                      })
                    }
                    className="
                      w-full
                      bg-slate-50/50
                      border border-slate-200
                      rounded-2xl
                      pl-14 pr-5 py-4
                      text-slate-900
                      outline-none
                      focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500
                      focus:bg-white
                      transition-all
                    "
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    bg-gradient-to-r
                    from-teal-600
                    to-blue-600
                    py-5
                    rounded-2xl
                    text-white
                    font-bold
                    text-lg
                    hover:scale-[1.01]
                    hover:shadow-[0_20px_40px_rgba(13,148,136,0.3)]
                    active:scale-[0.98]
                    transition-all
                    duration-300
                    flex items-center justify-center gap-3
                  "
                >
                  <FaWhatsapp className="text-2xl" />
                  Submit On WhatsApp
                </button>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default JoinUs;