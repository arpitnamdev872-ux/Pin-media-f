import { useState, useEffect } from "react"
import {
  FaTimes,
  FaUser,
  FaPhoneAlt,
  FaBriefcase,
  FaRegCommentDots,
  FaWhatsapp
} from "react-icons/fa"

function JoinUs({ showForm, setShowForm, formData, setFormData, handleSubmit }) {

  const isControlled = typeof showForm !== 'undefined' && typeof setShowForm === 'function'
  const [internalShow, setInternalShow] = useState(false)
  const visible = isControlled ? showForm : internalShow

  // internal form state when not controlled
  const [internalForm, setInternalForm] = useState({ name: '', phone: '', service: '', message: '' })

  const [serviceOpen, setServiceOpen] = useState(false)
  const services = [
    "PR Marketing",
    "Branding",
    "Social Media Growth",
    "Website Development"
  ]

  // Listen for global open event when used without controlled props (moved inside component)
  useEffect(() => {
    const handler = () => {
      if (isControlled && typeof setShowForm === 'function') setShowForm(true)
      else setInternalShow(true)
    }
    window.addEventListener('openJoinUs', handler)
    return () => window.removeEventListener('openJoinUs', handler)
  }, [isControlled, setShowForm])
  return (
    <>
      {
        visible && (
            <div className="fixed inset-0 bg-navy-deep backdrop-blur-md flex items-start md:items-center justify-center z-[100] px-4 py-6 transition-all duration-300">
              <div className="w-full max-w-xl glass-panel p-6 md:p-10 relative shadow-xl max-h-[95vh] overflow-y-auto">
              {/* DECORATIVE BLUR BACKGROUNDS */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/40 rounded-full -mr-10 -mt-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/40 rounded-full -ml-10 -mb-10 blur-3xl"></div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => isControlled ? setShowForm(false) : setInternalShow(false)}
                className="absolute top-6 right-6 text-slate-200 hover:text-white transition-colors z-20 p-2 bg-white/5 rounded-full"
              >
                <FaTimes />
              </button>

              {/* TITLE */}
              <div className="relative z-10 mb-10">
                <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
                  Join <span style={{ color: 'var(--accent-end)' }}>PIN MEDIA</span>
                </h2>
                <p className="text-slate-300 text-lg">
                  Fill this form and connect directly on WhatsApp.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={(e) => {
                e.preventDefault()
                if (isControlled && typeof handleSubmit === 'function') {
                  handleSubmit(e)
                } else {
                  // internal submit opens WhatsApp
                  const data = internalForm
                  if (!data.service) { alert('Please select a service.'); return }
                  const whatsappMessage = `*PIN MEDIA CLIENT FORM*\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n💼 Service: ${data.service}\n📝 Message: ${data.message}`
                  const whatsappURL = `https://wa.me/919026619418?text=${encodeURIComponent(whatsappMessage)}`
                  window.open(whatsappURL, '_blank')
                  setInternalForm({ name: '', phone: '', service: '', message: '' })
                  setServiceOpen(false)
                  setInternalShow(false)
                }
              }} className="space-y-6 relative z-10">
                {/* NAME */}
                <div className="relative group">
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={isControlled ? formData.name : internalForm.name}
                    onChange={(e) => {
                      if (isControlled) setFormData({ ...formData, name: e.target.value })
                      else setInternalForm({ ...internalForm, name: e.target.value })
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 transition-all"
                  />
                </div>

                {/* PHONE */}
                <div className="relative group">
                  <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={isControlled ? formData.phone : internalForm.phone}
                    onChange={(e) => {
                      if (isControlled) setFormData({ ...formData, phone: e.target.value })
                      else setInternalForm({ ...internalForm, phone: e.target.value })
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 transition-all"
                  />
                </div>

                {/* SERVICE */}
                <div className="relative group">
                  <FaBriefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-600 transition-colors z-10" />
                  <button type="button" onClick={() => setServiceOpen(!serviceOpen)} className="relative w-full text-left bg-slate-800 border border-slate-700 rounded-2xl pl-14 pr-12 py-4 text-white font-medium outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 transition-all">
                    {(isControlled ? formData.service : internalForm.service) || "Select Service"}
                    <span className={`absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  {serviceOpen && (
                    <ul className="absolute left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-2xl max-h-56 overflow-y-auto z-[110] shadow-lg py-3 animate-in fade-in slide-in-from-top-2">
                      {services.map((s) => (
                        <li key={s} className="px-8 py-3 hover:bg-white/5 hover:text-teal-400 transition-colors text-white cursor-pointer font-medium" onClick={() => {
                          if (isControlled) setFormData({ ...formData, service: s })
                          else setInternalForm({ ...internalForm, service: s })
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
                    value={isControlled ? formData.message : internalForm.message}
                    onChange={(e) => {
                      if (isControlled) setFormData({ ...formData, message: e.target.value })
                      else setInternalForm({ ...internalForm, message: e.target.value })
                    }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-400 transition-all"
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
                    hover:shadow-lg
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