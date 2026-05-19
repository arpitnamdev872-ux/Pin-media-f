import { useState } from "react"

function Contact() {

  const [copied, setCopied] = useState(false)

  const handleInstagramDM = () => {
    const username = "pin_media.in"
    const appLink = `instagram://user?username=${username}`
    const webLink = `https://instagram.com/${username}`

    // try to open Instagram app (deep link). If the app isn't installed
    // the browser will ignore the deep link; fallback opens the web profile.
    window.location.href = appLink

    // fallback: open profile in new tab after short delay
    setTimeout(() => {
      window.open(webLink, "_blank")
    }, 600)

    // copy onboarding message to clipboard so user can paste in DM
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("onboard").then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      }).catch(() => { /* ignore clipboard failures */ })
    }
  }

  return (

    <section className="w-full bg-white text-slate-900 pt-24 pb-16 border-t border-slate-100">

      <div className="w-full px-6 md:px-20 text-center">

        <h4 className="text-teal-600 text-lg font-bold tracking-[0.3em] mb-4 animate-in fade-in slide-in-from-top-10 duration-700">
          CONTACT US
        </h4>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">

          Let's Work Together

        </h1>

        <p className="text-slate-600 text-lg mb-8 leading-8">

          Connect with PIN MEDIA through WhatsApp
          or Instagram and grow your brand digitally.

        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">

          <a
            href="https://wa.me/919026619418?text=Hello%20Pin%20Media%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
            target="_blank"
            rel="noreferrer"
            className="bg-teal-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 duration-300 shadow-2xl shadow-teal-100"
          >
            WhatsApp US
          </a>

          <button
            onClick={handleInstagramDM}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-105 duration-300 shadow-2xl shadow-blue-100"
          >
            Instagram DM
          </button>

        </div>

        <div className="mt-8 text-slate-500">
          <p>Or visit us: <a href="https://pin_media.in" target="_blank" rel="noreferrer" className="text-teal-600 font-bold hover:underline">pin_media.in</a></p>
        </div>

        {copied && (
          <div className="mt-4 text-green-400 text-sm">"onboard" copied to clipboard — paste it in your Instagram DM.</div>
        )}

      </div>

    </section>

  )
}

export default Contact