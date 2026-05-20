

export default function CTA(){
  return (
    <section className="w-full py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl" style={{ background: 'linear-gradient(90deg,var(--accent-start),var(--accent-end))', padding: '2rem' }}>
          <div>
            <h3 className="text-white text-3xl font-bold">Ready to Build a Brand That Stands Out?</h3>
            <p className="text-teal-100/80 mt-2">Let's create something powerful together.</p>
          </div>
          <div>
            <button onClick={() => window.dispatchEvent(new Event('openJoinUs'))} className="btn-accent">Book Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}
